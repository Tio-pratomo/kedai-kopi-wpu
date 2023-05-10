const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    watch: true,
    plugins: [new MiniCssExtractPlugin()],
});
