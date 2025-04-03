import { EOL } from 'os'
import { config } from '../constant'
import type { Project } from '../type'

/** 将换行符号写入一个全局变量中存放 */
export const processEOL = (project: Project) => {
  if (project.EOL === 'auto') {
    config.EOL = EOL as any
  }
  if (!project.EOL) {
    config.EOL = '\n'
  }
}
