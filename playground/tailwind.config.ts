import { preset } from '@vue3-oop/tailwind-preset'
import type { Config } from 'tailwindcss'

export default {
  presets: [
    preset({
      colors: {
        biz: {
          primary: '#276ff5',
        },
      },
    }),
  ],
} satisfies Partial<Config>
