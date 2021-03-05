import resolve from "rollup-plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/bundle.js",
        format: "iife",
      },
      {
        file: "dist/bundle.min.js",
        format: "iife",
        plugins: [uglify()],
      },
    ],
    plugins: [
      resolve(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**", // only transpile our source code
        presets: [
          [
            "@babel/env",
            {
              modules: false,
              useBuiltIns: "usage",
              corejs: 3,
              targets: {
                browsers: ["> 1%", "not ie 11", "ios >= 10.4"],
              },
            },
          ],
        ],
      }),
      commonjs(),
    ],
  },
  {
    input: "src/index.js",
    output: [
      {
        file: "dist/bundle-ie8.js",
        format: "iife",
      },
      {
        file: "dist/bundle-ie8.min.js",
        format: "iife",
        plugins: [uglify()],
      },
    ],
    plugins: [
      resolve(),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**", // only transpile our source code
        presets: [
          [
            "@babel/env",
            {
              modules: false,
              useBuiltIns: "usage",
              corejs: 3,
              targets: "ie 8",
            },
          ],
        ],
      }),
      commonjs(),
    ],
  },
];
