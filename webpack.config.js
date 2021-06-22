const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
const { ESBuildMinifyPlugin } = require('esbuild-loader')


module.exports = {
    mode: 'development',
    entry: "./ui/main.ts",
    output: {
        path: path.join(__dirname, "public", "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            {
                test: /\.ts$/,
                loader: 'esbuild-loader',
                options: {
                    loader: 'tsx',
                    target: 'es2015'
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'ui'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json'],
    },
    optimization: {
        minimizer: [
            new ESBuildMinifyPlugin({
                target: 'es2015'  // Syntax to compile to (see options below for possible values)
            })
        ]
    },
}