module.exports = function(server)
{
    var helper = server.helper;
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
                sidebar: 'partials/sidebar',
                content: 'partials/content',
            },
            stars: helper.generateStars(40)
        };
        
        event.emit('render', req, res, options);
    });
}
