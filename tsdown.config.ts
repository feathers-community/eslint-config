import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts', 'src/prettier.ts'],
  format: ['esm'],
  dts: true,
  fixedExtension: false,
})
