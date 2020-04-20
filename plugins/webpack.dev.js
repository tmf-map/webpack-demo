'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const smp = new SpeedMeasurePlugin()

module.exports = smp.wrap({
    entry: {
        index: './src/search/index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                      /*  options: {
                            esModule: true,
                        },*/
                    },
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        /*options: {
                            esModule: true,
                        },*/
                    },
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, `src/search/index.html`),
            filename: 'search.html',
            chunks: ['index'],
            // inject: true, // 打包后的脚本放到body标签后
            minify: {
                html5: true, // 根据HTML5的规范来解析输入
                collapseWhitespace: true, // 删除个节点之间的空白
                // preserveLineBreaks: false,
                minifyCSS: true,// 压缩style标签和style属性内的css
                minifyJS: true, // 压缩script标签内的js代码
                removeComments: false // 删除注释
            }
        }),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ]
});
