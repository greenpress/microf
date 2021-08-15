import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript';
import vue from 'rollup-plugin-vue';

export default defineConfig({
  sourceMap: true,
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  external: [ 'vue' ],
  plugins: [
    typescript(),
    vue({
      compileTemplate: true, // Explicitly convert template to render function
      defaultLang: { script: 'ts' },
    })
  ]
})
