module.exports = function(server)
{
    var app = server.app;
    var config = server.config;
    var event = server.event;
    var model = server.model;

    app.get('/', function(req, res)
    {
        var options =
        {
            view: 'index',
            partials:
            {
                background: 'partials/background',
            }
        };
        
        event.emit('render', req, res, options);
    });
}
