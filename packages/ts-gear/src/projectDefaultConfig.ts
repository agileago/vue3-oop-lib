import { camelCase, upperFirst } from 'es-toolkit/compat'
import { generateRequestFunctionName } from './tool/generateRequestFunctionName'
import type { Project } from './type'

const requestTemplate: Project['generateRequestFunction'] = function (arg) {
  // 适配 fastApi 路径参数需要被path-to-regexp正确解析
  const path = arg.pathname.replace(/{(\w+?)}/g, (s, p1) => `:${p1}`)
  // 入参是否需要外部泛型再次转换，主要针对所有参数现在必填比较麻烦
  let parameterTypeName = arg.parameterTypeName
  if (parameterTypeName && arg.project.paramGeneric) {
    parameterTypeName = `${arg.project.paramGeneric}<${parameterTypeName}>`
  }
  let parameter = parameterTypeName ? `option${!arg.parameterRequired ? '?' : ''}: ${parameterTypeName}, ` : ''
  parameter += 'config?: AxiosRequestConfig'
  const bodyData = parameterTypeName ? `, ${arg.simpleOption ? arg.simpleOption : '...option'}` : ''
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
  paramGeneric: 'DeepPartial',
  importRequesterStatement: (name, project) => {
    const paramGeneric = project.paramGeneric ? `, type ${project.paramGeneric}` : ''
    return `import { ${camelCase(name) + 'Requester'}, type AxiosRequestConfig${paramGeneric} } from '../http'`
  },
  // 生成请求函数名称
  generateRequestFunctionName(arg, name) {
    return 'api' + upperFirst(camelCase(name)) + upperFirst(generateRequestFunctionName(arg))
  },
  generateRequestFunction: requestTemplate,
}
