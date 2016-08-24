const common = {
    client : './client',
    server : './server'
};

const config = {
    client : {
        development : common.client,
        production  : common.client
    },
    server : {
        development : common.server,
        production  : common.server
    }
};

module.exports = config[global.webpack.type][global.webpack.env];