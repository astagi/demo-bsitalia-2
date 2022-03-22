// rollup.config.js

import { babel } from '@rollup/plugin-babel'
import scss from 'rollup-plugin-scss'
import uglify from '@lopatnov/rollup-plugin-uglify'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'


export default [
  {
    input: 'demo.entry.js',
    output: {
      file: 'dist/js/demo.bundle.min.js',
      compact: true,
      format: 'iife',
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
      nodeResolve({
        // use "jsnext:main" if possible
        // see https://github.com/rollup/rollup/wiki/jsnext:main
        jsnext: true,
        main: true,
      }),
      commonjs(),
      uglify(),
    ],
  }
]
