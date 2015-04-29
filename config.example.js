// Copy this file to config.js and change values accordingly

module.exports =
{
    session:
    {
        secret: 'secret data for generating session IDs'
    },

    news:
    [
        {
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
