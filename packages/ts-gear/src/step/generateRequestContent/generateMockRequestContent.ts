import type { Spec } from 'swagger-schema-official'
import type { FunctionDeclarationStructure, OptionalKind, VariableDeclarationKind } from 'ts-morph'
import join from 'url-join'
import { config } from '../../constant'
import { getGlobal } from '../../projectGlobalVariable'
import { harvest, sow } from '../../source'
import { assembleDoc } from '../../tool/assembleDoc'
import { shouldKeepRequest } from '../../tool/shouldKeepRequest'
import { transformSwaggerPathToRouterPath } from '../../tool/transformSwaggerPathToRouterPath'
import type { Project } from '../../type'
import { generateMockData } from './generateMockData'
import { generateRequestOptionType } from './generateRequestOptionType'
import { generateResponseType } from './generateResponseType'

/**
 * 为了将mock数据可以暴露出来单独使用，需要的时候配合fetch-mock一起使用
 * 且使返回mock数据的请求函数，与实际请求函数的签名保持一致
 * 最终采用了这种将mock函数生成单独文件的方法
 * 取消了将mock数据混合到实际请求函数中的做法
 * */
export const generateMockRequestContent = (spec: Spec, project: Project) => {
  const { apiFilter, requestOptionUnionType } = project
  const { requestMap, definitionMap, enumMap } = getGlobal(project)

  const { EOL } = config

  // const resultContent: string[] = []
  Object.getOwnPropertyNames(requestMap).forEach(requestFunctionName => {
    const requestTypeScriptContent: string[] = []
    const request = requestMap[requestFunctionName]
    const { httpMethod } = request
    if (!shouldKeepRequest(request, apiFilter)) {
      return
    }

    let parameterTypeName = ''
    let parameterRequired = false
    if (request.parameters && request.parameters.length > 0) {
      const parameterType = generateRequestOptionType(requestFunctionName, request.parameters, project)
      parameterTypeName = parameterType.parameterTypeName
      parameterRequired = parameterType.parameterRequired
      requestTypeScriptContent.push(parameterType.parameterTypeContent)
    }
    const responseType = generateResponseType(requestFunctionName, request.responses, project)
    requestTypeScriptContent.push(responseType.responseTypeContent)
    requestTypeScriptContent.push(responseType.successTypeContent)
    const source = sow()
    /** 生成mock data */
    let mockFunctionContent = ''
    const mockRequestFunctionSource = sow()
    const functionStatment = `return Promise.resolve(mockData)`
    const functionData: OptionalKind<FunctionDeclarationStructure> = {
      isExported: false,
      returnType: `Promise<${responseType.successTypeName}>`,
      statements: functionStatment,
    }
    functionData.parameters = []
    if (parameterTypeName) {
      const type = requestOptionUnionType ? `${parameterTypeName} & ${requestOptionUnionType}` : parameterTypeName
      functionData.parameters.push({
        hasQuestionToken: !parameterRequired,
        name: 'option',
        type,
      })
    } else if (requestOptionUnionType) {
      functionData.parameters.push({
        hasQuestionToken: true,
        name: 'option',
        type: requestOptionUnionType,
      })
    }
    const mockFunctionSource = sow()
    mockRequestFunctionSource.addFunction(functionData)
    mockFunctionSource.addVariableStatement({
      declarationKind: 'const' as VariableDeclarationKind.Const,
      declarations: [
        {
          name: 'mockRequest',
          initializer(writter) {
            writter.write(harvest(mockRequestFunctionSource))
          },
        },
      ],
    })
    mockFunctionContent = `const mockData = (${JSON.stringify(
      generateMockData(request, definitionMap, enumMap),
    )} as unknown as ${responseType.successTypeName})
        ${harvest(mockFunctionSource)}
        mockRequest.method = method
        mockRequest.url = url
        mockRequest.mockData = mockData
        return mockRequest
      `
    const urlPath = join(spec.basePath || '/', transformSwaggerPathToRouterPath(String(request.pathname)))
    const sourceContent = `/* #__PURE__ */ (() => {
         /** http method */
         const method = '${httpMethod}'
         /** request url */
         const url = '${urlPath}'
         ${mockFunctionContent}
    })()`
    source.addVariableStatement({
      declarationKind: 'const' as VariableDeclarationKind.Const,
      docs: assembleDoc(request.schema),
      isExported: true,
      declarations: [
        {
          name: requestFunctionName,
          initializer: sourceContent,
        },
      ],
    })
    requestTypeScriptContent.push(harvest(source))
    /** store typescript content to requestMap */
    request.mockTypescriptContent = requestTypeScriptContent.join(EOL)
    // resultContent.push(request.mockTypescriptContent)
  })

  /** return value only for test and debug */
  // return resultContent.join(EOL)
}
