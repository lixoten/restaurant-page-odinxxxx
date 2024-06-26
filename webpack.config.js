const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // devtool: "source-map",
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     port: 3000,
    //     open: true,
    // },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './src/index.html',
    //         filename: 'index.html',
    //         inject: 'body',
    //     }),
    // ],
};