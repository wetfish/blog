var fs = require('fs');

module.exports = function(server)
{
    var helper = server.helper;
    var app = server.app;
    var config = server.config;
    var event = server.event;
    var model = server.model;

    app.get('/', function(req, res)
    {
        var news = config.news.slice(0, 2);
        var next = 0;

        if(config.news.length > 2)
        {
            next = 2;
        }
        
        var options =
        {
            view: 'index',
            year: new Date().getFullYear(),
            news: news,
            next: next,
            page: 1,
            partials:
            {
                sidebar: 'partials/sidebar',
                news: 'partials/news',
                footer: 'partials/footer',
            },
            stars: helper.generateStars(40),
            clouds: helper.generateClouds(),
            meta: "Wetfish is a Free Culture community founded in 2005 that advocates personal privacy and organizational transparency."
        };
        
        event.emit('render', req, res, options);
    });

    //match requested url with the news data url
    function findPost(url){
       var formatted = url.replace('/post/','');
        
        for (var i = 0; i < config.news.length; i++) {
           
            if (formatted==config.news[i]['url']) {
                console.log('found it!!!');
                return config.news[i];
            }
            

        }
    }

    


    
    //display the current post when title is clicked
    app.get('/post/:url',function(req, res){
       var post= req.url;
       const page = parseFloat(req.params.index);
       news=findPost(post);

       event.emit('render', req, res,
       {
            view: 'posts',
            year: new Date().getFullYear(),
            news: news,
          
            partials:{
                sidebar:'partials/sidebar',
                news: 'partials/news',
                 footer: 'partials/footer'
            },
            stars: helper.generateStars(40),
            clouds: helper.generateClouds()
       }

        );
      
    });

    // Display the home, except paginated
    app.get('/page/:index', function(req, res)
    {
        // Floats are more fun than ints ^_~
        var page = parseFloat(req.params.index);
        var index = page - 1;
        
        var news = config.news.slice(index * 2, index * 2 + 2);
        var prev = Math.round(page - 1);
        var next = 0;
        

        if(config.news.length > index * 2 + 2)
        {
            next = Math.floor(page + 1);
        }
        
        event.emit('render', req, res,
        {
            view: 'index',
            year: new Date().getFullYear(),
            news: news,
            next: next,
            prev: prev,
            page: page,
            partials:
            {
                sidebar: 'partials/sidebar',
                news: 'partials/news',
                footer: 'partials/footer',
            },
            stars: helper.generateStars(40),
            clouds: helper.generateClouds()
        });
    });

    app.get('/:page', function(req, res, next)
    {
        fs.exists(__dirname + '/../views/' + req.params.page + '.hjs', function(exists)
        {
            if(exists)
            {
                event.emit('render', req, res,
                {
                    view: req.params.page,
                    partials:
                    {
                        sidebar: 'partials/sidebar',
                    },
                    stars: helper.generateStars(40),
                    clouds: helper.generateClouds()
                });
            }
            else
            {
                next();
            }
        });
    });
}
