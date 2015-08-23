// Start the server
var config = require('./config');
var server = require('wetfish-server').createServer(config);

var clouds =
[
    {name: 'big-cloud-with-dust.png', width: 511, height: 235},
    {name: 'big-cloud.png', width: 467, height: 191},
    {name: 'big-little-cloud.png', width: 129, height: 92},
    {name: 'big-medium-cloud.png', width: 360, height: 203},
    {name: 'cloud-dust.png', width: 100, height: 77},
    {name: 'little-big-cloud.png', width: 348, height: 194},
    {name: 'little-cloud-dust.png', width: 44, height: 30},
    {name: 'little-cloud-with-dust.png', width: 161, height: 82},
    {name: 'little-cloud.png', width: 135, height: 75},
    {name: 'little-squished-cloud.png', width: 116, height: 87},
    {name: 'long-cloud-dust.png', width: 89, height: 48},
    {name: 'medium-cloud-dust.png', width: 53, height: 29},
    {name: 'medium-cloud-with-dust.png', width: 480, height: 271},
    {name: 'medium-cloud.png', width: 289, height: 168},
];

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
                top: server.helper.random(0, 30) + '%',
                left: server.helper.random(1, 99) + '%',
                rotate: (Math.floor(server.helper.random(1, 8)) * 45) + 'deg',
                width: server.helper.random(10, 75) + '%'
            };

            if(i > count / 2)
            {
                star.class += ' desktop';
            }
            
            output.push(star);
        }

        return output;
    },

    generateClouds: function()
    {
        var output = [];

        for(var i = 0, l = clouds.length; i < l; i++)
        {
            var cloud =
            {
                index: i,
                name: clouds[i].name,
                height: clouds[i].height,
                width: clouds[i].width,
                top: Math.floor(server.helper.random(0, 500)),
                left: 0,
                duration: server.helper.random(50, 500),
                begin: server.helper.random(-500, -50)
            };
            
            output.push(cloud);
        }

        return output;
    }
}

// Add some routes
require('./routes/pages')(server);

server.app.use(function(req, res)
{
    res.redirect('https://wiki.wetfish.net' + req.url);
});
