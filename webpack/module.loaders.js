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
        }]
    },
    server : {
        development : [
            ...server
        ],
        production  : [
            ...server
        ]
    }
};

module.exports = config[global.webpack.type][global.webpack.env];