import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/{cli,index,requester}.ts'],
  format: ['esm'],
  clean: true,
  dts: true,
  target: 'node16',
})
