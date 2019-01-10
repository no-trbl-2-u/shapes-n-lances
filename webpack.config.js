const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {version} = require("./package");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./lib/main.ts",
    output: {
        path: path.resolve(__dirname, 'www', 'dist'),
        filename: "app.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: `shapes + lances | ${version}`,
            template: 'www/main.html'
        })
    ]
};