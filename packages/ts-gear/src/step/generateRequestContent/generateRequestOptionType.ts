import { isEmpty, upperFirst } from 'lodash'
import type { Parameter, Reference } from 'swagger-schema-official'
import { harvest, sow } from '../../source'
import { schemaToTypescript } from '../../tool/schemaToTypescript'
import type { Project, RequestParameterPosition } from '../../type'
import { assembleRequestParam } from './assembleRequestParam'

/**
 * @param functionName request function parameter interface name
 * @param parameters swagger request parameters
 * */
export const generateRequestOptionType = (
  functionName: string,
  parameters: Array<Parameter | Reference>,
  project: Project,
) => {
  const source = sow()
  const parameterTypeName = `${upperFirst(functionName)}Option`
  const assembledParameters = assembleRequestParam(parameters, project)
  let parameterRequired = false
  const positionSet = new Set(
    Object.getOwnPropertyNames(assembledParameters),
  ) as unknown as Set<RequestParameterPosition>
  if (project.simplifyRequestOption && positionSet.size === 1) {
    const param = assembledParameters[Array.from(positionSet)[0]]!
    source.addTypeAlias({
      isExported: project.shouldExportRequestOptionType === undefined || !!project.shouldExportRequestOptionType,
      name: parameterTypeName,
      type: schemaToTypescript(param, project),
    })
  } else {
    ;(Object.getOwnPropertyNames(assembledParameters) as RequestParameterPosition[]).forEach(position => {
      const param = assembledParameters[position]!
      if (!parameterRequired) {
        parameterRequired = !isEmpty(param.required)
      }
      const inter = source.addInterface({
        isExported: project.shouldExportRequestOptionType === undefined || !!project.shouldExportRequestOptionType,
        name: parameterTypeName,
        docs: [`@description request parameter type for ${functionName}`],
      })
      let hasQuestionToken = false
      if (project.shouldForceSkipRequestHeaderOption && position === 'header') {
        hasQuestionToken = true
      } else {
        hasQuestionToken = isEmpty(param.required)
      }
      inter.addProperty({
        name: position,
        type: schemaToTypescript(param, project),
        hasQuestionToken,
        docs: param.docs,
      })
    })
  }
  return {
    parameterTypeName,
    parameterTypeContent: harvest(source),
    parameterRequired,
  }
}
