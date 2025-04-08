import { join } from 'path'
import 'cross-fetch'
import { existsSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname } from 'node:path'
import json5 from 'json5'
import mkdirp from 'mkdirp'
import { DEFAULT_OPENAPI_DIR } from '../constant'
import { error, info } from '../tool/log'
import type { Project } from '../type'

/**
 * fetch remote spec if url starts with "http"
 * or use "require" read local file.
 * when remote swagger doc has auth, the best way is download the spec to local, and assign the local file path.
 * the second param ref is https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
 * */
export const fetchOpenapiData = async (project: Project, tsGearConfigPath: string) => {
  const localFilePath = join(tsGearConfigPath, DEFAULT_OPENAPI_DIR, project.name + '.json')
  const url = project.source
  if (url?.startsWith('http')) {
    const verbose = `project: ${project.name} url: ${url}`
    info(`start fetching ${verbose}`)
    let fetchOption = project.fetchApiDocOption
    if (typeof fetchOption === 'function') {
      fetchOption = await fetchOption()
    }
    const res = await fetch(url, fetchOption)
    const swaggerSchema = json5.parse(await res.text())
    info(`got swagger spec doc from ${verbose}`)
    // 写入本地文件
    if (!existsSync(dirname(localFilePath))) {
      mkdirp.sync(dirname(localFilePath))
    }
    writeFileSync(localFilePath, JSON.stringify(swaggerSchema, null, 2))

    return swaggerSchema
  }
  const source = project.source ? join(tsGearConfigPath, project.source) : localFilePath
  // use require for json file
  if (!source.endsWith('.json')) {
    const message = 'user config file should ends with `.json`'
    error(message)
    throw new Error(message)
  }
  if (!existsSync(source)) {
    const message = 'json file does not exist'
    error(message)
    throw new Error(message)
  }

  const require = createRequire(import.meta.url)
  return require(source)
}
