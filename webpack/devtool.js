const config = {
    client : {
        development : 'eval',
        production  : 'source-map'
    },
    server : {
        development : null,
        production  : null
    }
};

module.exports = config[global.webpack.type][global.webpack.env];