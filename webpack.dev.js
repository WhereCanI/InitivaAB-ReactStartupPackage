const common = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'none',
    cache: false,
    watch: true,
    performance: {
        hints: 'warning'
    }
});