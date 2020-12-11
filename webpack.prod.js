const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'none',
    cache: true,
    watch: false,
    performance: {
        hints: false
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    }
});