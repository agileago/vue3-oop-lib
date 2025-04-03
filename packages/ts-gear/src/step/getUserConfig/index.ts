import { existsSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import prompts from 'prompts'
import { configFileName } from '../../constant'
import { initConfig } from '../../content/initConfig'
import { warn } from '../../tool/log'
import type { Project } from '../../type'
import { getCliOption } from './cliOption'

/**
 * get user config
 * from cli option
 * */
export const getUserConfig = async () => {
  const cwd = process.cwd()
  const cliOption = getCliOption()
  const configFilePath = join(cwd, 'src', `${configFileName}.ts`)
  if (cliOption.init) {
    if (existsSync(configFilePath)) {
      const { overwrite } = await prompts({
        type: 'confirm',
        name: 'overwrite',
        message: `${configFilePath} already exist, overwrite?`,
        initial: true,
      })
      if (overwrite) {
        writeFileSync(configFilePath, initConfig)
      }
    } else {
      writeFileSync(configFilePath, initConfig)
    }
    return {
      projects: [],
      tsGearConfigPath: '',
    }
  }
  const tsGearConfigPath = join(cwd, cliOption.config || join('src', configFileName))
  /* eslint-disable import/no-dynamic-require */
  const config = require(tsGearConfigPath)
  /* eslint-enable import/no-dynamic-require */
  let projects = (config.default ? config.default : config) as Project[]
  const projectNamesFromCommandLine = cliOption.names
  if (projectNamesFromCommandLine.length > 0) {
    projects = projects.filter(project => projectNamesFromCommandLine.some(name => name === project.name))
    if (projects.length === 0) {
      warn(`your input names "${cliOption.names.join(', ')}" match 0 projects, checkout and retry.`)
    }
  }
  return {
    tsGearConfigPath: dirname(tsGearConfigPath),
    projects,
  }
}
