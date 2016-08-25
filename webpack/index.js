const { resolve } = require('path');
const webpack = require('webpack');

const env = process.argv.indexOf('--production', 2) !== -1;
const type = process.argv.indexOf('--server', 2) !== -1;

global.webpack = {
    src         : resolve(__dirname, '..', 'src'),
    dir         : __dirname,
    production  : env,
    development : !env,
    client      : !type,
    server      : type,
    env         : env ? 'production' : 'development',
    type        : type ? 'server' : 'client'
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
    module          : {
        preLoaders  : require('./module.preLoaders'),
        loaders     : require('./module.loaders')
    },
    plugins     : require('./plugins'),
    postcss : require('./postcss')
};