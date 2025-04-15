import plugin from 'tailwindcss/plugin'
import type { JuanOptions } from '../types'
import { createVarsFn, flatten, isHexColor, removeDefaultSuffix, rgbColorChannel, toKebabCase } from '../utils'

// css 前缀
function getCssVarPrefix(options: JuanOptions) {
  if (!options?.cssVarPrefix) return ''
  return options.cssVarPrefix + '-'
}

export const colorPlugin = (options?: JuanOptions) => {
  if (!options?.colors || !Reflect.ownKeys(options?.colors || {}).length) return plugin(() => {})
  const cssVarPrefix = getCssVarPrefix(options)
  const vars = createVarsFn(cssVarPrefix)
  const finalColors = flatten(options.colors, '-')
  const rootCssVars: Record<string, string> = {}
  const colors = Object.keys(finalColors).reduce((acc, key) => {
    const formattedKey = toKebabCase(removeDefaultSuffix(key))
    acc[cssVarPrefix + formattedKey] = `rgba(${vars(key)},<alpha-value>)`
    rootCssVars['--' + cssVarPrefix + formattedKey] = isHexColor(finalColors[key])
      ? rgbColorChannel(finalColors[key])
      : finalColors[key]
    return acc
  }, {} as any)

  return plugin(
    ({ addBase }) => {
      addBase({
        body: rootCssVars,
      })
    },
    {
      theme: {
        extend: {
          colors,
        },
      },
    },
  )
}
