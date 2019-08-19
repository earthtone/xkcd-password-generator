import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
export default {
  input: 'index.js',
  plugins: [json(), resolve({
    mainFields: ['module', 'main']
  }), commonjs()],
  output: [
    { file: 'dist/index.esm.js', format: 'esm', name: 'xkcd-password' },
    { file: 'dist/index.umd.js', format: 'umd', name: 'xkcd-password' },
    { file: 'dist/index.unpkg.js', format: 'iife', name: 'XkcdPassword' },
    { file: 'bin/lib.js', format: 'cjs' }
  ]
}
