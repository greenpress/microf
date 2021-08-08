import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  sourceMap: true,
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [ typescript() ]
})
