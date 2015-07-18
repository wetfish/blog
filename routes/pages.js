var fs = require('fs');

module.exports = function(required)
{
    var app = required.app;
    var config = required.config;
    var event = required.event;
    var model = required.model;

    // Display the first 2 news posts
    app.get('/', function(req, res)
    {
        var news = config.news.slice(0, 2);
        var next = 0;

        if(config.news.length > 2)
        {
            next = 2;
        }
        
        event.emit('render', req, res,
        {
            view: 'index',
            news: news,
            next: next,
            page: 1,
            partials:
            {
                news: 'partials/news'
            }
        });
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
                news: 'partials/news'
            }
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
