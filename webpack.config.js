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
            // Use ts-loader instead of @babel/preset-typescript because it supports emitting declaration files.
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
        entry: "./source/shared/index.ts",
        output: {
            globalObject: "this",
            path: Path.resolve("build/output"),
            filename: "shared.js",
            library: { name: "Toolbox", type: "umd" }
        }
    },
    {
        mode,
        module: { rules },
        resolve,
        entry: "./source/client/index.ts",
        output: {
            globalObject: "this",
            path: Path.resolve("build/output"),
            filename: "client.js",
            library: { name: "Toolbox", type: "umd" }
        }
    },
    {
        mode,
        resolve,
        entry: "./source/server/index.ts",
        target: "node",
        output: {
            globalObject: "this",
            path: Path.resolve("build/output"),
            filename: "server.js",
            library: { name: "Toolbox", type: "umd" }
        },
        module: {
            rules: [
                {
                    loader: "ts-loader"
                }
            ]
        }
    }
];

module.exports = configurations;