import vueJsx from '@vue3-oop/plugin-vue-jsx'
import webviewDebug from '@vue3-oop/vite-plugin-debug'
import versionPlugin from '@vue3-oop/vite-plugin-version'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vueJsx(),
    webviewDebug({ envDebugSet: { development: true }, icomeAuthCode: true }),
    versionPlugin({
      console: true,
      generateFile: true,
      fileName: 'version.json',
    }),
  ],
})
