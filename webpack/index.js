const { resolve } = require('path');
const webpack = require('webpack');

global.webpack = {
    src : resolve(__dirname, '..', 'src'),
    dir : __dirname,
    env : process.argv.indexOf('-p', 2) !== -1 ? 'production' : 'development',
    type: process.argv.indexOf('-s', 2) !== -1 ? 'server' : 'client'
};

module.exports = {
    context         : global.webpack.src,
    entry           : require('./entry'),
    devtool         : require('./devtool'),
    target          : require('./target'),
    externals       : require('./externals'),
    output          : require('./output'),
    resolve         : require('./resolve'),
    resolveLoader   : require('./resolveLoader'),
    devServer       : require('./devServer'),
    module      : {
        loaders : require(`./${global.webpack.type}/module.loaders`)
    },
    plugins     : [
        new webpack.DefinePlugin({
            TYPE    : JSON.stringify(global.webpack.type),
            ENV     : JSON.stringify(global.webpack.env)
        })
    ]
};