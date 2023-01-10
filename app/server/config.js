// Copy this file to config.js and change values accordingly

module.exports =
{
    port: 2304,

    // Path to static files
    static: __dirname + '/../static',

    // Path to views
    views: __dirname + '/views',

    news:
    [
        {
            url: 'you-missed-a-step',
            title: 'You missed a deployment step!',
            author: 'goos',
            date: 'January 3, 2023',
            content:
            [
                "You need to bind mount in config.js!",
                "Check your docker cmdline",
                "<3"
            ],

            tags: ['Ouch', 'My', 'Config']
        }
    ]
}
