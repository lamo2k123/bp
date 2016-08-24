const config = {
    common      : [],
    development : [{
        test    : /\.js$/,
        include : global.webpack.src,
        loader  : 'babel',
        query   : {
            cacheDirectory: true,
            plugins : [
                'transform-react-jsx',
                'transform-class-properties',
                'transform-es2015-modules-commonjs'
            ]
        }
    }],
    production : []
};

module.exports = [].concat(config.common, config[global.webpack.env]);