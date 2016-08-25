module.exports = {
    host        : '0.0.0.0',
    port        : 8080,
    contentBase : '/build/',
    proxy       : {
        '**' : 'http://he-lapp-43.tech-ses.com:3000'
    },
    hot                 : true,
    inline              : true,
    historyApiFallback  : true,
    compress            : true,
    lazy                : false,
    quiet               : false,
    noInfo              : false,
    stats               : {
        hash        : true,
        version     : true,
        timings     : true,
        assets      : true,
        chunks      : true,
        chunkModules: false,
        modules     : false,
        children    : true,
        cached      : true,
        reasons     : false,
        source      : true,
        errorDetails: true,
        chunkOrigins: true,
        colors      : true
    }
};