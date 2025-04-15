import plugin from 'tailwindcss/plugin'
import type { JuanOptions } from '../types'
import { getIcons } from './icons'

export function svgIconPlugin(options: JuanOptions = {}) {
  if (options?.useSvgIcon === false) return plugin(() => {})

  const { iconClassPrefix = 'i', iconPath = 'src/icons' } = options

  const icons = getIcons(iconPath)

  const defaultProps = {
    display: 'inline-block',
    width: `1em`,
    height: `1em`,
  }

  return plugin(({ matchComponents }) => {
    matchComponents(
      {
        [iconClassPrefix]: (value: any) => {
          if (typeof value !== 'object') {
            return {}
          }
          const isMask = value.isMask
          const props = {
            '--icon': `url("${value.base64}")`,
            'flex-shrink': 0,
            ...defaultProps,
          }

          if (isMask) {
            return {
              ...props,
              mask: 'var(--icon) no-repeat',
              'mask-size': '100% 100%',
              'background-color': 'currentColor',
            }
          }

          return {
            ...props,
            background: 'var(--icon) no-repeat',
            'background-size': '100% 100%',
            'background-color': 'transparent',
          }
        },
      },
      {
        values: icons,
      },
    )
  })
}
