const webpack = require("webpack");
const Path = require("path");

const mode = "development";

/** @type {webpack.RuleSetRule[]} */
const rules = [
    {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    compact: false
                }
            },
            "ts-loader"
        ]
    }
];

/** @type {webpack.ResolveOptions} */
const resolve = {
    extensions: ["", ".ts", ".js"],
    modules: [Path.resolve("node_modules")]
};

/** @type {webpack.Configuration[]} */
const configurations = [
    {
        mode,
        module: { rules },
        resolve,
        entry: "./source/index.ts",
        output: {
            path: Path.resolve("build"),
            filename: "index.js",
            library: { name: "SharedToolbox", type: "umd" }
        }
    },
    {
        mode,
        module: { rules },
        resolve,
        entry: "./source/client/index.ts",
        output: {
            path: Path.resolve("build/client"),
            filename: "index.js",
            library: { name: "ClientToolbox", type: "umd" }
        }
    },
    {
        mode,
        module: { rules },
        resolve,
        entry: "./source/server/index.ts",
        output: {
            path: Path.resolve("build/server"),
            filename: "index.js",
            library: { name: "ServerToolbox", type: "umd" }
        }
    }
];

module.exports = configurations;