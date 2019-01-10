const path = require("path");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./lib/main.ts",
    output: {
        path: path.resolve(__dirname, 'www', 'dist'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};