import babel from 'rollup-plugin-babel'
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/downloadme.js',
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