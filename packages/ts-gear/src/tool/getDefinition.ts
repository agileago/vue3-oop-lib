import type { OpenAPIObject } from 'openapi3-ts'
import type { Schema, Spec } from 'swagger-schema-official'

type ReturnSchema = { [definitionsName: string]: Schema }

/**
 * return definitions
 * */
export const getDefinition = (spec: Spec | OpenAPIObject): ReturnSchema => {
  if ('components' in spec) {
    const v3spec = spec as OpenAPIObject
    return v3spec.components?.schemas as ReturnSchema
  }
  return spec.definitions!
}
