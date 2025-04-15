import plugin from 'tailwindcss/plugin'
import { name } from '../../package.json'
import type { JuanOptions } from '../types'

const fontFiles = [
  {
    path: 'D-DIN-PRO/D-DIN-PRO-400-Regular.otf',
    weight: '400',
  },
  {
    path: 'D-DIN-PRO/D-DIN-PRO-500-Medium.otf',
    weight: '500',
  },
  {
    path: 'D-DIN-PRO/D-DIN-PRO-600-SemiBold.otf',
    weight: '600',
  },
  {
    path: 'D-DIN-PRO/D-DIN-PRO-700-Bold.otf',
    weight: '700',
  },
  {
    path: 'D-DIN-PRO/D-DIN-PRO-800-ExtraBold.otf',
    weight: '800',
  },
  {
    path: 'D-DIN-PRO/D-DIN-PRO-900-Heavy.otf',
    weight: '900',
  },
]

export function fontPlugin(options: JuanOptions) {
  if (options?.useNumberFont === false) return plugin(() => {})
  return plugin(
    ({ addBase }) => {
      addBase(
        fontFiles.map(k => {
          return {
            '@font-face': {
              'font-family': 'D-DIN-PRO',
              src: `url('${name}/font/${k.path}') format('opentype')`,
              'font-weight': k.weight,
            },
          }
        }),
      )
    },
    {
      theme: {
        extend: {
          fontFamily: {
            'd-din-pro': ['D-DIN-PRO'],
          },
        },
      },
    },
  )
}
