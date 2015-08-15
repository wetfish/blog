// Start the server
var config = require('./config');
var server = require('wetfish-server').createServer(config);

// Helper functions
server.helper =
{
    random: function(min, max)
    {
        return (Math.random() * (max - min)) + min;
    },
    
    generateStars: function(count)
    {
        var output = [];
        
        for(var i = 0; i < count; i++)
        {
            var star =
            {
                class: 'star',
                top: server.helper.random(0, 25) + 'em',
                left: server.helper.random(1, 99) + '%',
                rotate: (server.helper.random(1, 8) * 45) + 'deg',
                width: server.helper.random(10, 75) + '%'
            };

            if(i > count / 2)
            {
                star.class += ' desktop';
            }
            
            output.push(star);
        }

        return output;
    }
}

// Add some routes
require('./routes/pages')(server);
