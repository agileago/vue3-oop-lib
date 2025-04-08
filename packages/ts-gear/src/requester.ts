/** use axios fetch to request */
import axios, { mergeConfig } from 'axios'
import type { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults, Method } from 'axios'
import * as pathToRegexp from 'path-to-regexp'
import type { RequestParameter } from './type'

export type * from 'swagger-schema-official'

export type { RequestParameter, AxiosRequestConfig }

export interface RequesterWrapper {
  <T>(url: string, param?: RequestParameter, config?: AxiosRequestConfig): Promise<T>
}

/** transform parseUrl('/api/abc/:id', { path: { id: '123' } }) to '/api/abc/123'
 * */
export const parseUrl = (url: string, option?: RequestParameter): string => {
  if (option?.path) {
    Object.getOwnPropertyNames(option.path).forEach(k => {
      option.path[k] = encodeURIComponent(String(option.path[k]))
    })
    url = pathToRegexp.compile(url)(option.path)
  }
  return url
}
/** assign request body to axios option */
export function interceptRequest(url: string, option?: RequestParameter): [string, AxiosRequestConfig] {
  try {
    url = parseUrl(url, option)
  } catch (e: any) {
    throw new Error(e.message)
  }
  option = option || {}
  const requestOption: AxiosRequestConfig = {
    method: (option.method || 'get') as Method,
  }
  if (option.header) {
    requestOption.headers = option.header
  }
  if (option.body) {
    requestOption.data = option.body
  }
  if (option.formData) {
    const formData = new FormData()
    Object.keys(option.formData).forEach(k => {
      formData.append(k, option?.formData[k])
    })
    requestOption.data = formData
  }
  if (option.query) {
    requestOption.params = option.query
  }
  return [url, requestOption]
}

export function isAxiosInstance(ax: any): ax is AxiosInstance {
  return 'defaults' in ax
}

export const createRequester = (ax?: AxiosInstance | CreateAxiosDefaults) => {
  const http = ax && isAxiosInstance(ax) ? ax : axios.create(ax || {})
  const requester = <T>(apiUrl: string, param: RequestParameter = {}, config: AxiosRequestConfig = {}) => {
    // eslint-disable-next-line prefer-const
    let [url, option] = interceptRequest(apiUrl, param)
    option = mergeConfig({ url, ...option }, config)
    return http.request(option) as Promise<T>
  }
  return [ax, requester] as [AxiosInstance, RequesterWrapper]
}
