import { existsSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { attemptAsync } from 'es-toolkit'
import json5 from 'json5'
import mkdirp from 'mkdirp'
import { DEFAULT_OPENAPI_DIR } from '../constant'
import { error, info } from '../tool/log'
import type { Project } from '../type'

const require = createRequire(import.meta.url)

if (!global.fetch) require('cross-fetch/polyfill')

/**
 * fetch remote spec if url starts with "http"
 * or use "require" read local file.
 * when remote swagger doc has auth, the best way is download the spec to local, and assign the local file path.
 * the second param ref is https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
 * */
export const fetchOpenapiData = async (project: Project, tsGearConfigPath: string) => {
  const localFilePath = join(tsGearConfigPath, DEFAULT_OPENAPI_DIR, project.name + '.json')
  let url = project.source
  if (url?.startsWith('http')) {
    const verbose = `project: ${project.name} url: ${url}`
    info(`start fetching ${verbose}`)
    let fetchOption = project.fetchApiDocOption
    if (typeof fetchOption === 'function') fetchOption = await fetchOption()
    const [e, res] = await attemptAsync(() => fetch(url!, fetchOption))

    if (e || !res?.ok) {
      error(`获取数据异常,请检查：${verbose}`)
      console.error(e || (await res?.text()))
      info(`尝试从本地获取json：${localFilePath}`)
      url = ''
    } else {
      const swaggerSchema = json5.parse(await res!.text())
      info(`已获取到swagger数据 ${verbose}`)
      return swaggerSchema
    }
  }
  const source = url ? join(tsGearConfigPath, url) : localFilePath
  // use require for json file
  if (!source.endsWith('.json')) {
    const message = '用户配置文件必须以 `.json` 结尾'
    error(message)
    throw new Error(message)
  }
  if (!existsSync(source)) {
    const message = '本地swagger json 文件不存在'
    error(message)
    throw new Error(message)
  }
  return require(source)
}

export const backupOpenapiData = (project: Project, tsGearConfigPath: string, swaggerSchema: string) => {
  const localFilePath = join(tsGearConfigPath, DEFAULT_OPENAPI_DIR, project.name + '.json')
  // 写入本地文件
  if (!existsSync(dirname(localFilePath))) {
    mkdirp.sync(dirname(localFilePath))
  }
  writeFileSync(localFilePath, swaggerSchema)
}
