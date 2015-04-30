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
        
        event.emit('render', req, res,
        {
            view: 'index',
            news: news,
            partials:
            {
                news: 'partials/news'
            }
        });
    });

    // Display the home, except paginated
    app.get('/page/:index', function(req, res)
    {
        var index = parseInt(req.params.index);
        index--;
        
        var news = config.news.slice(index * 2, index * 2 + 2);
        
        event.emit('render', req, res,
        {
            view: 'index',
            news: news,
            partials:
            {
                news: 'partials/news'
            }
        });
    });

    app.get('/:page', function(req, res)
    {
        fs.exists(__dirname + '/../views/' + req.params.page + '.hjs', function(exists)
        {
            if(exists)
            {
                event.emit('render', req, res, {view: req.params.page});
            }
            else
            {
                res.redirect('http://wiki.wetfish.net/' + req.params.page);
            }
        });
    });

}
