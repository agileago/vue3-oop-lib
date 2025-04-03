import type { BodyParameter, Parameter, Reference } from 'swagger-schema-official'
import { assembleDoc } from '../../tool/assembleDoc'
import { isReference } from '../../tool/isReference'
import type { ParameterPositionMap, Project } from '../../type'

/** assemble parameters to type ParameterPositionMap
 *
 * NOTD: body has a useless nest 'body' property, will generate type as
 * { body: { body: Pet } }
 * remove it to generate as below
 * { body: Pet }
 * */
export const assembleRequestParam = (parameters: Array<Parameter | Reference>, project: Project) => {
  const bodyParamCount = parameters.filter(p => 'in' in p && p.in === 'body').length
  return parameters.reduce<ParameterPositionMap>((map, parameter) => {
    // ? TODO never meet this case
    if (isReference(parameter)) {
      return map
    }
    if (parameter.in in map) {
      const positionParameter = map[parameter.in]!
      // once required, then required
      if (parameter.required && !positionParameter.required.includes(parameter.name)) {
        positionParameter.required.push(parameter.name)
      }
      if (positionParameter.properties) {
        positionParameter.properties![parameter.name] = parameter
      }
      /**
       * 为兼容openapiv3，在src/step/assembleSchemaToGlobal
       * 将formData的schema也放进来，与body的格式一致
       * */
    } else if (
      (parameter.in === 'formData' || (parameter.in === 'body' && parameter.name === 'body')) &&
      (parameter as BodyParameter).schema
    ) {
      /** remove body nest structure */
      map.body = {
        type: 'object',
        name: 'body',
        required: parameter.required ? [parameter.name] : [],
        schema: (parameter as BodyParameter).schema,
        docs: assembleDoc(parameter),
      }
    } else if (
      (parameter.in === 'formData' ||
        (parameter.in === 'body' && project.stripBodyPropWhenOnlyOneBodyProp && bodyParamCount === 1)) &&
      (parameter as BodyParameter).schema
    ) {
      /** remove body nest structure */
      map.body = {
        type: 'object',
        name: 'body',
        required: parameter.required ? [parameter.name] : [],
        schema: (parameter as BodyParameter).schema,
        docs: assembleDoc(parameter),
      }
    } else {
      map[parameter.in] = {
        type: 'object',
        name: parameter.in,
        required: parameter.required ? [parameter.name] : [],
        properties: {
          [parameter.name]: parameter,
        },
        docs: assembleDoc(parameter),
      }
    }
    return map
  }, {})
}
