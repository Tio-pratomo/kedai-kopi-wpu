const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: 'src/js/script.js',
    devtool: false,
    module: {
        rules: [{ test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
        }),
    ],
};
