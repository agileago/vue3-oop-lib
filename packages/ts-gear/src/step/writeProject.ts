import { writeFileSync } from 'node:fs'
import type { PrepareToWrite, Project } from '../type'

/**
 * write to project dir
 */
export const writeProject = (project: Project, option: PrepareToWrite) => {
  writeFileSync(option.definitionFile, option.definitionFileContent)
  writeFileSync(option.requestFile, option.requestFileContent)
  writeFileSync(option.indexFile, option.indexFileContent)
}
