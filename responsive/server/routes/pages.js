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
            news: news,
            next: next,
            page: 1,
            partials:
            {
                sidebar: 'partials/sidebar',
                news: 'partials/news',
            },
            stars: helper.generateStars(40),
            clouds: helper.generateClouds()
        };
        
        event.emit('render', req, res, options);
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
            news: news,
            next: next,
            prev: prev,
            page: page,
            partials:
            {
                sidebar: 'partials/sidebar',
                news: 'partials/news'
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
                event.emit('render', req, res, {view: req.params.page});
            }
            else
            {
                next();
            }
        });
    });
}
