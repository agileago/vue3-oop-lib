import { attemptAsync } from 'es-toolkit'
import { restore } from './projectGlobalVariable'
import * as step from './step'
import { formatWithPrettierIfAvailable } from './step/formatWithPrettier'
import { error, info } from './tool/log'
import type { Project } from './type'

/**
 * run step by step
 * sequence could not be changed
 * every step depends on the pre step
 * */
export const processProject = async (project: Project, tsGearConfigPath: string): Promise<void> => {
  step.processEOL(project)
  const spec = await step.fetchOpenapiData(project, tsGearConfigPath)
  step.prepareProjectDirectory(project, tsGearConfigPath)
  const keepGeneric = project.keepGeneric !== false
  step.cleanRefAndDefinitionName(spec, keepGeneric)
  step.assembleSchemaToGlobal(spec, project)
  if (keepGeneric) {
    step.parseGenericType(project)
  }
  step.collectRefsInRequestAndPatchDefinition(project)
  step.generateDefinitionContent(project)
  step.generateRequestContent(spec, project)

  const writeResult = step.prepareWriteContent(project, tsGearConfigPath)

  if (project.hooks?.beforeWriteTs) {
    await project.hooks?.beforeWriteTs({
      project,
      ...writeResult,
    })
  }

  step.writeProject(project, writeResult)

  if (project.hooks?.afterWriteTs) {
    await project.hooks?.afterWriteTs({
      project,
      ...writeResult,
    })
  }

  restore(project)
}

/**
 * run from command line
 * */
export const runByCommand = async (): Promise<void> => {
  const { projects, tsGearConfigPath } = await step.getUserConfig()
  for (const project of projects) {
    info(`开始生成项目 ${project.name}:`)
    const [e] = await attemptAsync(() => processProject(project, tsGearConfigPath))
    if (!e) {
      info(`项目 ${project.name}: 生成成功`)
      console.log('\n')
      continue
    }
    error(`${project.name} 生成出现异常，错误如下`)
    console.error(e)
    console.log('\n')
  }
  await formatWithPrettierIfAvailable(tsGearConfigPath)
}

/**
 * same as runByCommand
 * should be used by nodejs env call
 * */
export const run = async ({ projects, appPath }: { projects: Project[]; appPath: string }): Promise<void> => {
  await Promise.all(projects.map(project => processProject(project, appPath)))
}
