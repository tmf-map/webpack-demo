const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        split: "./src/split/index",
        detail: "./src/split/detail"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name]_bundle.js",
        chunkFilename: "[name].chunk.js"
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
        new HtmlWebpackPlugin({
            template: path.join(__dirname, `src/split/index.html`),
            filename: 'index.html',
            chunks: ['vendors', 'resource', 'detail']
        })
    ],
    // optimization: {
    //     splitChunks: {
    //         minSize: 0,
    //         cacheGroups: {
    //             vendor: {
    //                 test: /(react|react-dom)/,
    //                 name: 'vendors',
    //                 chunks: 'all',
    //             },
    //             commons: {
    //                 chunks: 'all',
    //                 minChunks: 2
    //             }
    //         }
    //     }
    // }
};
