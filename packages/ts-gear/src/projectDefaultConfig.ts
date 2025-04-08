import { camelCase, upperFirst } from 'es-toolkit/compat'
import { generateRequestFunctionName } from './tool/generateRequestFunctionName'
import type { Project } from './type'

const requestTemplate: Project['generateRequestFunction'] = function (arg) {
  // 适配 fastApi 路径参数需要被path-to-regexp正确解析
  const path = arg.pathname.replace(/{(\w+?)}/g, (s, p1) => `:${p1}`)
  let parameter = arg.parameterTypeName ? `option${!arg.parameterRequired ? '?' : ''}: ${arg.parameterTypeName}, ` : ''
  parameter += 'config?: AxiosRequestConfig'
  const bodyData = arg.parameterTypeName ? `, ${arg.simpleOption ? arg.simpleOption : '...option'}` : ''
  const body = `requester<${arg.responseSuccessTypeName}>('${path}', { method: '${arg.httpMethod}'${bodyData}}, config)`
  return `(${parameter}) => ${body}`
}

// 默认的项目配置
export const projectDefaultConfig: Partial<Project> = {
  dest: '.',
  keepGeneric: false,
  shouldExportResponseType: false,
  shouldExportRequestOptionType: false,
  shouldForceSkipRequestHeaderOption: true,
  stripBodyPropWhenOnlyOneBodyProp: true,
  nullableFalseAsRequired: true,
  simplifyRequestOption: true,
  importRequesterStatement: name =>
    `import { ${camelCase(name) + 'Requester'}, type AxiosRequestConfig } from '../http'`,
  // 生成请求函数名称
  generateRequestFunctionName(arg, name) {
    return 'api' + upperFirst(camelCase(name)) + upperFirst(generateRequestFunctionName(arg))
  },
  generateRequestFunction: requestTemplate,
}
