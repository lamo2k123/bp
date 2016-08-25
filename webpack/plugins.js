const ExtractTextPlugin = require("extract-text-webpack-plugin");

const common = [
    new webpack.DefinePlugin({
        CLIENT      : global.webpack.client,
        SERVER      : global.webpack.server,
        PRODUCTION  : global.webpack.production,
        DEVELOPMENT : global.webpack.development,

        'process.env.NODE_ENV' : JSON.stringify(global.webpack.env),

        // @todo: ??
        TYPE        : JSON.stringify(global.webpack.type),
        ENV         : JSON.stringify(global.webpack.env)
    }),
    new ExtractTextPlugin('style.css', {
        allChunks : true,
        disable : global.webpack.server || global.webpack.development
    })
];

const config = {
    client : {
        development : [
            ...common
        ],
        production  : [
            ...common
        ]
    },
    server : {
        development : [
            ...common
        ],
        production  : [
            ...common
        ]
    }
};

module.exports = config[global.webpack.type][global.webpack.env];