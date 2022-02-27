import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
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
    babel({
      exclude: 'node_modules'
    }),
    terser()
  ]
}