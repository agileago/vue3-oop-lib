/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from '@vue3-oop/ts-gear'
import { generateRequestFunctionName } from '@vue3-oop/ts-gear'
import * as _ from 'es-toolkit'

// 过滤掉某些开始路径
const excludePath: string[] = []
// 过滤掉某些后端框架自动生成的controller tag
const excludeTags = ['basic-error-controller', 'task-controller', 'test-controller']

// swagger文档  http://10.39.89.15:8662/swagger-ui/index.html
const projects: Partial<Project>[] = [
  {
    name: 'emergency',
    source: 'http://10.39.89.15:8662/enn-smart-emergency-web/v2/api-docs',
    apiFilter: req => {
      const tag = req.schema.tags?.[0]
      if (tag && excludeTags.includes(tag)) {
        return false
      }
      return excludePath.every(k => !req.pathname.startsWith(k))
    },
  },
  {
    name: 'ability',
    source: 'http://10.39.89.15:8662/enn-smart-ability-web/v2/api-docs',
    apiFilter: req => {
      const tag = req.schema.tags?.[0]
      if (tag && excludeTags.includes(tag)) {
        return false
      }
      return excludePath.every(k => !req.pathname.startsWith(k))
    },
  },
  {
    name: 'obs',
    source: 'http://10.39.89.15:8662/enn-smart-obs-web/v2/api-docs',
    apiFilter: req => {
      const tag = req.schema.tags?.[0]
      if (tag && excludeTags.includes(tag)) {
        return false
      }
      return excludePath.every(k => !req.pathname.startsWith(k))
    },
  },
  {
    name: 'operation',
    source: 'http://10.39.89.15:8662/enn-smart-operation-web/v2/api-docs',
    // source: './openapi/operation.json',
    apiFilter: req => {
      const tag = req.schema.tags?.[0]
      if (tag && excludeTags.includes(tag)) {
        return false
      }
      return excludePath.every(k => !req.pathname.startsWith(k))
    },
  },
  {
    name: 'fastdfs',
    source: 'http://10.39.89.15:8662/enn-smart-fastdfs-web/v2/api-docs',
    apiFilter: req => {
      const tag = req.schema.tags?.[0]
      if (tag && excludeTags.includes(tag)) {
        return false
      }
      return excludePath.every(k => !req.pathname.startsWith(k))
    },
  },
  {
    name: 'pipeline',
    source: 'http://10.39.89.15:8662/enn-smart-operation-pipeline-web/v2/api-docs',
    // source: './openapi/pipeline.json',
    apiFilter: req => {
      const tag = req.schema.tags?.[0]
      if (tag && excludeTags.includes(tag)) {
        return false
      }
      return excludePath.every(k => !req.pathname.startsWith(k))
    },
  },
]

/**
 * 生成请求代码样例:
 * (option?: RequestType, config?: AxiosRequestConfig) => requester<ResponseType>('/url', {method: 'post', ...option}, config)
 */
const requestTemplate: Project['generateRequestFunction'] = function (arg) {
  // 适配 fastApi 路径参数需要被path-to-regexp正确解析
  const path = arg.pathname.replace(/{(\w+?)}/g, (s, p1) => `:${p1}`)
  let parameter = arg.parameterTypeName ? `option${!arg.parameterRequired ? '?' : ''}: ${arg.parameterTypeName}, ` : ''
  parameter += 'config?: AxiosRequestConfig'
  const bodyData = arg.parameterTypeName ? `, ${arg.simpleOption ? arg.simpleOption : '...option'}` : ''
  const body = `requester<${arg.responseSuccessTypeName}>('${path}', { method: '${arg.httpMethod}'${bodyData}}, config)`
  return `(${parameter}) => ${body}`
}
function createStandardProjects(projects: Partial<Project>[]) {
  return projects.map(p => {
    const { name } = p
    return {
      dest: '.',
      keepGeneric: false,
      shouldExportResponseType: false,
      shouldExportRequestOptionType: false,
      shouldForceSkipRequestHeaderOption: true,
      stripBodyPropWhenOnlyOneBodyProp: true,
      nullableFalseAsRequired: true,
      simplifyRequestOption: true,
      importRequesterStatement: `import { ${
        _.camelCase(name!) + 'Requester'
      }, type AxiosRequestConfig } from "../http"`,
      prettierConfig: false,
      // 生成请求函数名称
      generateRequestFunctionName(arg) {
        return 'api' + _.upperFirst(_.camelCase(name!)) + _.upperFirst(generateRequestFunctionName(arg))
      },
      generateRequestFunction: requestTemplate,
      ...p,
    } as Project
  })
}

export default createStandardProjects(projects)
