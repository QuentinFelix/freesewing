import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import json from "rollup-plugin-json";
import minify from "rollup-plugin-babel-minify";
//import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { name, version, description, author, license } from "./package.json";

export default {
  input: "src/index.js",
  output: {
    sourcemap: true
  },
  plugins: [
    //peerDepsExternal(),
    resolve({ browser: true }),
    json()
    //babel({
    //  exclude: "node_modules/**",
    //  plugins: ["@babel/plugin-proposal-object-rest-spread"]
    //})
    //minify({
    //  comments: false,
    //  sourceMap: true,
    //  banner: `/**\n * ${name} | v${version}\n * ${description}\n * (c) ${new Date().getFullYear()} ${author}\n * @license ${license}\n */`
    //})
  ]
};
