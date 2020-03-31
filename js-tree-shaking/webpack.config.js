const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name]_bundle.js",
     },
    mode: 'production',
    optimization: {
        usedExports: true
    }
    // module: {
    //     rules: [
    //         {
    //             test: /.js$/,
    //             use: 'babel-loader'
    //         }
    //     ]
    // },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: path.join(__dirname, `src/index.html`),
    //         filename: 'index.html',
    //         chunks: ['index']
    //     })
    // ],
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
