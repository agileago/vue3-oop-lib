import type { SchemaObject } from 'openapi3-ts'
import type { Operation, Parameter, Schema } from 'swagger-schema-official'
import { config } from '../constant'

/** add many possible properties to doc */
export const assembleDoc = (schema: Schema | Operation | Parameter | SchemaObject) => {
  const { EOL } = config
  if (typeof schema !== 'object') {
    return undefined
  }
  const docs: string[] = []
  const hasDescription = 'description' in schema || 'summary' in schema
  if (hasDescription) {
    docs.push('@description')
    if ('description' in schema && schema.description) {
      docs.push(`  ${String(schema.description)}`)
    }
    if ('summary' in schema && schema.summary) {
      docs.push(`  ${String(schema.summary)}`)
    }
  }
  if ('format' in schema) {
    docs.push(`@format ${schema.format}`)
  }
  if ('tags' in schema && schema.tags) {
    docs.push(`@tags ${schema.tags.join()}`)
  }
  if ('default' in schema) {
    docs.push(`@default ${schema.default}`)
  }
  if ('produces' in schema) {
    docs.push(`@produces ${schema.produces}`)
  }
  if ('consumes' in schema) {
    docs.push(`@consumes ${schema.consumes}`)
  }
  const hasExample = 'example' in schema || 'readOnly' in schema || 'writeOnly' in schema
  const v3Schema = schema as SchemaObject
  if (hasExample) {
    docs.push(`@example`)
    if ('example' in schema) {
      docs.push(`  ${schema.example}`)
    }
    if ('readOnly' in schema) {
      docs.push('@readonly')
    }
    if ('writeOnly' in schema) {
      docs.push('@writeonly')
    }
  }
  if ('deprecated' in schema && schema.deprecated) {
    docs.push('@deprecated')
  }
  if (v3Schema.not) {
    docs.push(`@not ${v3Schema.not}`)
  }
  if (v3Schema.anyOf) {
    docs.push(`@anyOf ${v3Schema.anyOf}`)
  }
  if (v3Schema.oneOf) {
    docs.push(`@oneOf ${v3Schema.oneOf}`)
  }
  if (docs.length === 0) {
    return undefined
  }
  // openapi v2 generate external properties starts with "x-"
  const keys = Object.getOwnPropertyNames(schema) as (keyof typeof schema)[]
  if (keys.some(k => k.startsWith('x-'))) {
    keys.forEach(k => {
      if (k.startsWith('x-')) {
        docs.push(`@${k} ${JSON.stringify(schema[k])}`)
      }
    })
  }
  // openapi v3 generate "extensions" property
  if (v3Schema.extensions && typeof v3Schema.extensions === 'object') {
    Object.getOwnPropertyNames(v3Schema.extensions).forEach(k => {
      docs.push(`@${k} ${JSON.stringify(v3Schema.extensions[k])}`)
    })
  }
  return [
    docs
      .filter(Boolean)
      /** replace invalid comment charator */
      .map(doc => doc.replace(/\*\/\*?/, '*'))
      .join(EOL),
  ]
}
