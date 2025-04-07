import { existsSync } from 'fs'
import { join } from 'path'
import mkdirp from 'mkdirp'
import type { Project } from '../type'

export const prepareProjectDirectory = (project: Project, tsGearConfigPath: string) => {
  const dest = join(tsGearConfigPath, project.dest, project.name)
  if (!existsSync(dest)) {
    mkdirp.sync(dest)
  }
}
