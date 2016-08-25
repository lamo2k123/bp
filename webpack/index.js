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

const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    plugins     : [
        new webpack.DefinePlugin({
            CLIENT      : global.webpack.client,
            SERVER      : global.webpack.server,
            PRODUCTION  : global.webpack.production,
            DEVELOPMENT : global.webpack.development,

            // @todo: ??
            TYPE        : JSON.stringify(global.webpack.type),
            ENV         : JSON.stringify(global.webpack.env)
        }),
        new ExtractTextPlugin('style.css', {
            allChunks : true,
            disable : global.webpack.server || global.webpack.development
        })
    ],
    postcss : require('./postcss')
};