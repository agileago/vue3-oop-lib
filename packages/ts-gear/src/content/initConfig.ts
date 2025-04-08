export const initConfig = `
import type { Project } from '@vue3-oop/ts-gear'

const projects: Project[] = [
  {
    name: 'app',
    source: 'https://petstore3.swagger.io/api/v3/openapi.json',
  },
]

export default projects
`.trimStart()

export const httpConfig = `
import { createRequester, type RequestParameter } from '@vue3-oop/ts-gear/requester'
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

axios.defaults.timeout = 20000

// region 类型转换

export type { AxiosRequestConfig }

interface RdfaResult {
  code?: string
  data?: any
  message?: string
  success?: boolean
}

// type ReturnEntityType<T> = T extends RdfaResult ? NonNullable<T['data']> : T
type ReturnEntityType<T> = T

export interface RequesterTranform {
  <T>(url: string, param?: RequestParameter, config?: AxiosRequestConfig): Promise<ReturnEntityType<T>>
}

// endregion

export const [appRequest, appRequester] = createRequester({
  baseURL: '/app',
}) as [AxiosInstance, RequesterTranform]
`.trimStart()
