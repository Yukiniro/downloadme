import babel from 'rollup-plugin-babel'
import typescript from "rollup-plugin-typescript2"

export default {
  input: 'src/index.ts',
  output: [{
      file: 'dist/downloadme.esm.min.js',
      format: 'esm'
    },
    {
      file: 'dist/downloadme.cjs.min.js',
      format: 'cjs'
    },
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        }
      }
    }),
    babel({
      exclude: 'node_modules'
    }),
  ]
}