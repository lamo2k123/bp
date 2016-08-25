const ExtractTextPlugin = require("extract-text-webpack-plugin");

const server = [{
    test    : /\.js$/,
    include : global.webpack.src,
    loader  : 'babel',
    query   : {
        cacheDirectory: global.webpack.development,
        plugins : [
            'transform-react-jsx',
            'transform-class-properties',
            'transform-es2015-modules-commonjs'
        ]
    }
}];

const config = {
    client : {
        development : [{
            test    : /\.pcss$/,
            loader  : ExtractTextPlugin.extract('style', 'css?sourceMap&localIdentName=[local]-[hash:base64:5]'),
            include : global.webpack.src
        }, {
            test    : /\.js$/,
            include : global.webpack.src,
            loader  : 'babel',
            query   : {
                sourceMaps : true,
                cacheDirectory: global.webpack.development,
                plugins : [
                    'transform-react-jsx',
                    'transform-class-properties',
                    'transform-es2015-modules-commonjs',
                    [
                        'react-transform',
                        {
                            transforms: [{
                                transform : 'react-transform-hmr',
                                imports: [
                                    'react'
                                ],
                                locals: [
                                    'module'
                                ]
                            }, {
                                transform: 'react-transform-catch-errors',
                                imports: [
                                    'react',
                                    'redbox-react'
                                ]
                            }]
                        }
                    ]
                ]
            }
        }],
        production  : [{
            test    : /\.js$/,
            include : global.webpack.src,
            loader  : 'babel',
            query   : {
                sourceMaps : true,
                cacheDirectory: global.webpack.development,
                plugins : [
                    'transform-react-jsx',
                    'transform-class-properties',
                    'transform-es2015-modules-commonjs'
                ]
            }
        }, {
            test    : /\.pcss$/,
            loader  : ExtractTextPlugin.extract('style', 'css?sourceMap&localIdentName=[hash:base64:8]'),
            include : global.webpack.src
        }]
    },
    server : {
        development : [
            ...server,
            {
                test    : /\.pcss$/,
                loader  : 'css/locals?localIdentName=[local]-[hash:base64:5]',
                include : global.webpack.src
            }
        ],
        production  : [
            ...server,
            {
                test    : /\.pcss$/,
                loader  : 'css/locals?localIdentName=[hash:base64:8]',
                include : global.webpack.src
            }
        ]
    }
};

module.exports = config[global.webpack.type][global.webpack.env];