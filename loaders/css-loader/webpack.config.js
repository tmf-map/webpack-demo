const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        split: "./src/search/index",
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
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [autoprefixer({browsers:["last 2 version", ">1%","IOS 7"]})]
                        }

                    }
                ],

             },
            {
                test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'less-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: () => [autoprefixer({})]
                            }
                        }
                         ]
            }
]
},
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, `src/search/index.html`),
            filename: 'index.html'
        })
    ]
};
