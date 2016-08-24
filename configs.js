module.exports = {
    "server" : {
        "protocol"  : "http", // or https
        "port"      : 3000,
        "hostname"  : "0.0.0.0",
        "backlog"   : 511,
        "options"   : {
            "key" : "ssl/key.pem",
            "cert": "ssl/cert.pem",
            // or
            "pfx" : "ssl/server.pfx"
        }
    }
};