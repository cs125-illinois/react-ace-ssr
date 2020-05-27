import typescript from "rollup-plugin-typescript2"
import copy from "rollup-plugin-copy"

export default {
  input: "./src/index.tsx",
  output: {
    format: "cjs",
    file: "./dist/index.cjs.js",
    sourcemap: true,
    strict: false,
  },
  plugins: [
    typescript({
      tsconfigDefaults: {
        include: ["./src/**/*"],
        compilerOptions: { declaration: true },
      },
    }),
  ],
  external: ["react", "prop-types"],
}
