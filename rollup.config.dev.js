import babel from 'rollup-plugin-babel'
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/downloadme.js',
      format: 'esm'
    },
    {
      file: 'dist/downloadme.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/downloadme.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/downloadme.umd.js',
      format: 'umd',
      name: 'downloadme',
    },
  ],
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules'
    }),
  ]
}