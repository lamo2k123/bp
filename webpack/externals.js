const externals = require('webpack-node-externals');

const common = {
    server : [
        externals()
    ]
};

const config = {
    client : {
        development : null,
        production  : null
    },
    server : {
        development : common.server,
        production  : common.server
    }
};

module.exports = config[global.webpack.type][global.webpack.env];