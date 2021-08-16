import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript';
import vue from 'rollup-plugin-vue';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  external: [ 'vue' ],
  plugins: [ typescript(), vue() ]
})
