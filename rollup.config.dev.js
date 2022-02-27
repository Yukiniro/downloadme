import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
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
    babel({
      exclude: 'node_modules'
    })
  ]
}