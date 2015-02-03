$(document).ready(function()
{
    var template = false;

    $.get('templates/news.tmpl', function(response)
    {
        // Save the template for later
        template = Hogan.compile(response);
        loadNews();
    }, 'html')

    var news =
    [
        {
            title: 'SlapStats!',
            author: 'rachel',
            date: 'February 1, 2015',
            content:
            [
                "<img src='img/slapgraph.png'>",
                "Checkout the newest wetfish project, <a href='https://slapstats.wetfish.net/' target='_blank'>slapstats</a>!",
                "It's got graphs and all sorts of buttons."
            ],
            
            tags: ['Graphs', 'Statistics', 'Projects', 'C3.js']
        }
    ];

    function loadNews()
    {
        $('section.news').html('');
        
        $.each(news, function(index, article)
        {
            var rendered = template.render(article);
            $('section.news').prepend(rendered);
        });
    }
});
