var fs = require('fs');

module.exports = function(required)
{
    var app = required.app;
    var config = required.config;
    var event = required.event;
    var model = required.model;

    app.get('/', function(req, res)
    {
        event.emit('render', req, res,
        {
            view: 'index',
            news: config.news,
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
