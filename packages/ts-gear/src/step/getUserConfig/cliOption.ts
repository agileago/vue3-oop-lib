import { Command } from 'commander'
import pkg from '../../../package.json'
import { configFileName } from '../../constant'

function collectProjects(value: string) {
  return value.split(',')
}

type Result = {
  names: string[]
  init: boolean
  config: string
}

const program = new Command()

/**
 * collect project names from cli
 * */
export const getCliOption = (): Result => {
  program
    .version(pkg.version)
    .usage('tsg or tsg -p projectName')
    .option(
      '-p, --projects <project name>',
      'assign project name, more names use comma split, like projectA,projectB',
      collectProjects,
    )
    .option('-i, --init', `create ${configFileName}.ts config file`)
    .option('-c, --config <assign config file>', 'assign config file')
    .parse(process.argv)

  const options = program.opts()

  const result: Result = {
    names: [],
    init: Boolean(options.init),
    config: '',
  }
  const names = options.projects
  if (names) {
    result.names = names
  }
  if (options.config) {
    result.config = String(options.config).trim()
  }
  // if not delete commander cache
  // program will keep cache and break test
  delete options.projects
  delete options.init
  return result
}
