var redis = require('redis');
var mysql = require('mysql');

var model =
{
    // Database connection variables
    redis: false,
    mysql: false,
    config: false,

    // Function to connect to our databases
    connect: function(config)
    {
        model.config = config;
        model.redis = redis.createClient(6304);

        /*
        model.mysql = mysql.createConnection(
        {
            host     : 'localhost',
            user     : config.mysql.username,
            password : config.mysql.password,
            database : config.mysql.database,
            timezone : 'utc' 
        });

        model.mysql.connect();
        */
    }
}

module.exports = model;
