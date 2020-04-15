const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        babel: "./src/babel/index",
    },
    output: {
        path: path.join(__dirname, 'dist'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            }
        ]
    }
};
