import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { createJiti } from 'jiti'
import prompts from 'prompts'
import { configFileName, configHttpFileName } from '../../constant'
import { httpConfig, initConfig } from '../../content/initConfig'
import { projectDefaultConfig } from '../../projectDefaultConfig'
import { warn } from '../../tool/log'
import type { Project } from '../../type'
import { getCliOption } from './cliOption'

const jiti = createJiti(import.meta.url)

function writeInitFile(configDir: string) {
  if (!existsSync(configDir)) {
    mkdirSync(configDir, { recursive: true })
  }

  // 写入配置文件
  const configFilePath = join(configDir, `${configFileName}.ts`)
  const httpFilePath = join(configDir, `${configHttpFileName}.ts`)

  writeFileSync(configFilePath, initConfig)
  writeFileSync(httpFilePath, httpConfig)
}
/**
 * get user config
 * from cli option
 * */
export const getUserConfig = async () => {
  const cwd = process.cwd()
  const cliOption = getCliOption()
  const configDir = join(cwd, cliOption.init || 'src')
  const configFilePath = join(configDir, `${configFileName}.ts`)
  if (cliOption.init) {
    if (existsSync(configFilePath)) {
      const { overwrite } = await prompts({
        type: 'confirm',
        name: 'overwrite',
        message: `${configFilePath} already exist, overwrite?`,
        initial: true,
      })
      if (overwrite) {
        writeInitFile(configDir)
      }
    } else {
      writeInitFile(configDir)
    }
    return {
      projects: [],
      tsGearConfigPath: '',
    }
  }
  const tsGearConfigPath = join(cwd, cliOption.config || join('src', configFileName))
  const config: any = await jiti.import(tsGearConfigPath)
  let projects = (config.default ? config.default : config) as Project[]
  const projectNamesFromCommandLine = cliOption.names
  if (projectNamesFromCommandLine.length > 0) {
    projects = projects.filter(project => projectNamesFromCommandLine.some(name => name === project.name))
    if (projects.length === 0) {
      warn(`your input names "${cliOption.names.join(', ')}" match 0 projects, checkout and retry.`)
    }
  }

  // 配置默认的项目配置
  projects.forEach(project => Object.assign(project, projectDefaultConfig))

  return {
    tsGearConfigPath: dirname(tsGearConfigPath),
    projects,
  }
}
