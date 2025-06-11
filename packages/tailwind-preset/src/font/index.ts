import plugin from 'tailwindcss/plugin'
import { name } from '../../package.json'
import type { JuanOptions, WebFontProps } from '../types'

const numberFont: Record<string, WebFontProps[]> = {
  'd-din-pro': [
    {
      path: `${name}/font/D-DIN-PRO/D-DIN-PRO-400-Regular.otf`,
      weight: 400,
    },
    {
      path: `${name}/font/D-DIN-PRO/D-DIN-PRO-500-Medium.otf`,
      weight: 500,
    },
    {
      path: `${name}/font/D-DIN-PRO/D-DIN-PRO-600-SemiBold.otf`,
      weight: 600,
    },
    {
      path: `${name}/font/D-DIN-PRO/D-DIN-PRO-700-Bold.otf`,
      weight: 700,
    },
    {
      path: `${name}/font/D-DIN-PRO/D-DIN-PRO-800-ExtraBold.otf`,
      weight: 800,
    },
    {
      path: `${name}/font/D-DIN-PRO/D-DIN-PRO-900-Heavy.otf`,
      weight: 900,
    },
  ],
}

export function fontPlugin(options: JuanOptions) {
  if (!options?.useNumberFont && !options.webFonts) return plugin(() => {})
  const fontFamily: Record<string, WebFontProps[]> = {}
  if (options.useNumberFont) Object.assign(fontFamily, numberFont)
  if (options.webFonts) Object.assign(fontFamily, options.webFonts)
  const base = Object.entries(fontFamily)
    .map(([key, val]) => {
      return val.map(k => {
        const { path, ...extra } = k
        const fontface: Record<string, any> = {
          'font-family': key,
          src: `url('${k.path}') format('opentype')`,
        }
        Object.entries(extra).forEach(c => (fontface[`font-${c[0]}`] = c[1]))
        return {
          '@font-face': fontface,
        }
      })
    })
    .flat()
  const family = Object.fromEntries(Object.keys(fontFamily).map(k => [k, [k]]))
  return plugin(
    ({ addBase }) => {
      addBase(base)
    },
    {
      theme: {
        extend: {
          fontFamily: family,
        },
      },
    },
  )
}
