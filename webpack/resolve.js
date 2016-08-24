const { resolve } = require('path');

module.exports = {
    root : global.webpack.src,
    alias : {
        component   : resolve(global.webpack.src, 'components'),
        route       : resolve(global.webpack.src, 'routes'),
        core        : resolve(global.webpack.src, 'core')
    },
    modulesDirectories : [
        'node_modules'
    ],
    extensions : [
        '.js',
        '.pcss',
        '.json',
        ''
    ]
};