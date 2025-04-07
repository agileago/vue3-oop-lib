import type { RequestParameter } from '@vue3-oop/ts-gear'
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import * as pathToRegexp from 'path-to-regexp'

// region 基础方法 基本不需要动

interface RdfaResult {
  code?: string
  data?: any
  message?: string
  success?: boolean
}

// type ReturnEntityType<T> = T extends RdfaResult ? NonNullable<T['data']> : T
type ReturnEntityType<T> = T

export type { AxiosRequestConfig }
/**
 * 解析url中的参数  /abc/:id 替换id
 * @param url
 * @param option
 */
export const parseUrl = (url: string, option?: RequestParameter): string => {
  if (option) {
    if (option.path) {
      Object.getOwnPropertyNames(option.path).forEach(k => {
        option.path[k] = encodeURIComponent(String(option.path[k]))
      })
      url = pathToRegexp.compile(url)(option.path)
    }
  }
  return url
}
/**
 * 转换成axios里面的配置
 * @param url
 * @param option
 */
export function interceptRequest(url: string, option?: RequestParameter): [string, AxiosRequestConfig] {
  try {
    url = parseUrl(url, option)
  } catch (e: any) {
    throw new Error(e.message)
  }
  option = option || {}
  const requestOption: AxiosRequestConfig = {
    method: option.method || 'get',
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
/**
 * 创建请求方法
 * @param ax
 */
export const createRequester = <R>(ax: AxiosInstance) => {
  return <T>(apiUrl: string, param: RequestParameter, config: AxiosRequestConfig = {}) => {
    // eslint-disable-next-line prefer-const
    let [url, option] = interceptRequest(apiUrl, param)
    option = { url, ...option, ...config }
    return ax.request<T>(option) as unknown as Promise<R<T>>
  }
}
// endregion

// 创建request 对request进行拦截各种操作

export const gatewayRequest = axios.create({
  baseURL: '/api/v1/gateway',
  timeout: 20000,
})
export const gatewayRequester = createRequester(gatewayRequest)

export const emergencyRequest = axios.create({
  baseURL: '/api/v1/emergency',
  timeout: 20000,
})
export const emergencyRequester = createRequester(emergencyRequest)

export const abilityRequest = axios.create({
  baseURL: '/api/v1/ability',
  timeout: 20000,
})
export const abilityRequester = createRequester(abilityRequest)

export const obsRequest = axios.create({
  baseURL: '/api/v1/obs',
  timeout: 20000,
})
export const obsRequester = createRequester(obsRequest)

export const operationRequest = axios.create({
  baseURL: '/api/v1/operation',
  timeout: 20000,
})
export const operationRequester = createRequester(operationRequest)

export const fastdfsRequest = axios.create({
  baseURL: '/api/v1/fastdfs',
  timeout: 20000,
})
export const fastdfsRequester = createRequester(fastdfsRequest)

export const pipelineRequest = axios.create({
  baseURL: '/api/v1/pipeline',
  timeout: 20000,
})
export const pipelineRequester = createRequester(pipelineRequest)
