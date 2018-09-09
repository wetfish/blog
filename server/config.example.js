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
            url: 'example-news-post',
            title: 'An example news post',
            author: 'rachel',
            date: 'April 30, 2015',
            content:
            [
                "An array of text + HTML!",
                "<3"
            ],

            tags: ['Cool', 'Example', 'Bro']
        }

    ]
}
