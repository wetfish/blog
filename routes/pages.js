module.exports = function(required)
{
    var app = required.app;
    var event = required.event;
    var model = required.model;

    app.get('/', function(req, res)
    {
        event.emit('render', req, res, {view: 'index'});
    });
}
