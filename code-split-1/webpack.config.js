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
            chunks: ['split'],
            // inject: true, // 打包后的脚本放到body标签后
            minify: {
                html5: true, // 根据HTML5的规范来解析输入
                collapseWhitespace: true, // 删除个节点之间的空白
                // preserveLineBreaks: false,
                minifyCSS: true,// 压缩style标签和style属性内的css
                minifyJS: true, // 压缩script标签内的js代码
                removeComments: false // 删除注释
            }
        })
    ],
    // stats: 'errors-only'
};
