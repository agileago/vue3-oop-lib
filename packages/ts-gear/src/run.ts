import { restore } from './projectGlobalVariable'
import * as step from './step'
import { info } from './tool/log'
import type { Project } from './type'

/**
 * run step by step
 * sequence could not be changed
 * every step depends on the pre step
 * */
export const processProject = async (project: Project, tsGearConfigPath: string): Promise<void> => {
  step.processEOL(project)
  step.prepareProjectDirectory(project, tsGearConfigPath)
  const spec = await step.fetchOpenapiData(project, tsGearConfigPath)
  if (project.useCache && step.checkCache(project, spec)) {
    info(
      `cache hit, skip regenerate project(${project.name}), add "useCache: false" to your project in "tsg.config.ts" to disable cache`,
    )
    return
  }
  const keepGeneric = project.keepGeneric !== false
  step.cleanRefAndDefinitionName(spec, keepGeneric)
  step.assembleSchemaToGlobal(spec, project)
  if (keepGeneric) {
    step.parseGenericType(project)
  }
  step.collectRefsInRequestAndPatchDefinition(project)
  step.generateDefinitionContent(project)
  step.generateRequestContent(spec, project)
  if (project.shouldGenerateMock) {
    step.generateMockRequestContent(spec, project)
  }
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

  if (project.transformJS) {
    step.toJS(project, tsGearConfigPath)
  }

  restore(project)
}

/**
 * run from command line
 * */
export const runByCommand = async (): Promise<void> => {
  const { projects, tsGearConfigPath } = await step.getUserConfig()
  await Promise.all(projects.map(project => processProject(project, tsGearConfigPath)))
}

/**
 * same as runByCommand
 * should be used by nodejs env call
 * */
export const run = async ({ projects, appPath }: { projects: Project[]; appPath: string }): Promise<void> => {
  await Promise.all(projects.map(project => processProject(project, appPath)))
}
