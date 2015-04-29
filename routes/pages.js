var fs = require('fs');

module.exports = function(required)
{
    var app = required.app;
    var event = required.event;
    var model = required.model;

    app.get('/', function(req, res)
    {
        event.emit('render', req, res, {view: 'index'});
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
                res.status(404);
                res.end('404 - Page Not Found');
            }
        });
    });

}
