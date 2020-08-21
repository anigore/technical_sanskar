var config = {
    port: 8000,
    site: 'http://localhost/#/',
    
    mongo: {
    hostname: 'localhost',
    port: '27017',
    db: 'technical_sanskar'
    },

    secretKey: "*@|\||{ET*"
    };
    
    config.mongo.url = 'mongodb://' + config.mongo.hostname + ':' + config.mongo.port + '/' + config.mongo.db;
    
    module.exports = config;