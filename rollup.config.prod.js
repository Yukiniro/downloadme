import babel from 'rollup-plugin-babel'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/downloadme.min.js',
      format: 'esm'
    },
    {
      file: 'dist/downloadme.esm.min.js',
      format: 'esm'
    },
    {
      file: 'dist/downloadme.cjs.min.js',
      format: 'cjs'
    },
    {
      file: 'dist/downloadme.umd.min.js',
      format: 'umd',
      name: 'downloadme',
    },
  ],
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules'
    }),
    terser()
  ]
}