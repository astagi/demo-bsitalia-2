// rollup.config.js

import { babel } from '@rollup/plugin-babel'
import scss from 'rollup-plugin-scss'
import uglify from '@lopatnov/rollup-plugin-uglify'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import injectProcessEnv from 'rollup-plugin-inject-process-env'


export default [
  {
    input: 'demo.entry.js',
    output: {
      file: 'dist/js/demo.bundle.min.js',
      format: 'iife',
      compact: true
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      scss({
        output: 'dist/css/demo.min.css',
        outputStyle: 'compressed',
        sourceMap: true,
      }),
      nodeResolve(),
      commonjs(),
      injectProcessEnv({
        NODE_ENV: 'production',
      }),
      uglify()
    ],
  }
]
