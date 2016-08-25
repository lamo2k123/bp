const { resolve } = require('path');

const common = {
    path        : resolve(global.webpack.dir, '..', 'build'),
    publicPath  : '/build/'
};

const client = Object.assign({}, common, {
    filename : 'client.js'
});

const server = Object.assign({}, common, {
    filename        : 'server.js',
    libraryTarget   : 'commonjs'
});

const config = {
    client : {
        development : Object.assign({}, client, {
            pathinfo: true
        }),
        production  : client
    },
    server : {
        development : server,
        production  : server
    }
};

module.exports = config[global.webpack.type][global.webpack.env];