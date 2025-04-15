import { type Config } from 'tailwindcss'
import { createPreset } from 'tailwindcss-rem2px-preset'
// @ts-ignore
import safeAreaPlugin from 'tailwindcss-safe-area'
import { colorPlugin } from './color'
import { fontPlugin } from './font'
import { svgIconPlugin } from './icon'
import type { JuanOptions } from './types'

export function preset(options: JuanOptions | undefined = {}): Partial<Config> {
  return {
    corePlugins: {
      // button的重置色会导致按钮失色
      preflight: false,
    },
    plugins: [colorPlugin(options), fontPlugin(options), svgIconPlugin(options), safeAreaPlugin],
    presets: [createPreset()],
  }
}
