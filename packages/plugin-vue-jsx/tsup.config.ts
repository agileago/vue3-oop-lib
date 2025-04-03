import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  outDir: 'dist',
  cjsInterop: true,
  target: 'es2016',
  splitting: true,
})
