
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import replace from "rollup-plugin-replace"
import babel from "rollup-plugin-babel"

export default {
  entry : "src/index.js",
  format : "iife",
  dest : "build/bundle.js",
  sourceMap: true,
  plugins : [
    resolve({
      jsnext: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    babel({exclude: "node_modules/**"}),
    replace({
      'process.env.NODE_ENV': JSON.stringify("production")
    })
  ]
}
