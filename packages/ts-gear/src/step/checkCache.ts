/* eslint-disable import/first */
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { contentHash } from '../tool/contentHash'
import type { Project } from '../type'

import appRoot = require('app-root-path')

export const checkCache = (project: Project, spec: any): boolean => {
  const cacheFile = join(appRoot.path, 'node_modules', '.cache')
  const hash = contentHash(JSON.stringify([project, spec]))
  if (!existsSync(cacheFile)) {
    writeFileSync(cacheFile, hash)
    return false
  }
  const cacheContent = readFileSync(cacheFile, { encoding: 'utf8' })
  if (cacheContent === hash) {
    return true
  }
  writeFileSync(cacheFile, hash)
  return false
}
