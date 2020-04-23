'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }= require('clean-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/dist/",
        filename: '[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        // options: {
                        //     outputPath: 'dist/img'
                        // }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'search.html',
            chunks: ['index'],
        //     inject: true,
        //     minify: {
        //         html5: true,
        //         collapseWhitespace: true,
        //         preserveLineBreaks: false,
        //         minifyCSS: true,
        //         minifyJS: true,
        //         removeComments: false
        //     }
        }),
    ],
    devServer: {
       contentBase: './dist',
       // hot: true,
        //publicPath: '/dist/'
    }
};

