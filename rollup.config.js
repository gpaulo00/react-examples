
import babel from "rollup-plugin-babel"

export default {
  entry: "src/index.js",
  format: "iife",
  dest: "build/bundle.js",
  external: ["react", "react-dom"],
  plugins: [
    babel({
      exclude: "node_modules/**"
    })
  ]
}
