const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        split: "./src/split/index"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name]_bundle.js",
        chunkFilename: "[name]_chunk.js"
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 每次打包后，清理上次的dist目录
        new HtmlWebpackPlugin({
            template: path.join(__dirname, `src/split/index.html`),
            filename: 'split.html',
            chunks: ['split']
        })
    ],
    stats: 'errors-only'
};
