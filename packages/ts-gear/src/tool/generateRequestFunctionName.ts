import { camelCase, upperFirst } from 'es-toolkit/compat'
import type { GenerateRequestFunctionNameParameter } from '../type'

/** default generate request function method */
export const generateRequestFunctionName = ({ httpMethod, pathname }: GenerateRequestFunctionNameParameter) =>
  `${httpMethod}${upperFirst(camelCase(pathname))}`
