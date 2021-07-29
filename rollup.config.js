import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/downloadme.js',
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