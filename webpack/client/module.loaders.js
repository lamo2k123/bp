const config = {
    common      : [],
    development : [{
        test    : /\.js$/,
        include : global.webpack.src,
        loader  : 'babel',
        query   : {
            sourceMaps : true,
            cacheDirectory: true,
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
    production : []
};

module.exports = [].concat(config.common, config[global.webpack.env]);