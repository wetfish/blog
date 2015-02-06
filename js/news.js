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
            title: 'Community projects on Trello',
            author: 'rachel',
            date: 'February 5, 2015',
            content:
            [
                "<a href='https://trello.com/wetfish'><img src='img/wetfish-trello.jpg'></a>",
                "Ever wondered what's going on behind the scenes?",
                "<a href='https://trello.com/wetfish'>Trello</a> is the project management tool we use to track development on wetfish and handle requests. \
                 This week I did a bunch of reorganizing to simplify our smaller boards and showcase our most active projects.",
                "Being an open source community means we encourage everyone to participate. :D<br>Have an idea of your own? Write about it in <a href='https://trello.com/b/7uGh07wh/incubator'>the incubator</a>!",
                "<i class='small'>Tip: Get access by sending your Trello username to rachel on <a href='https://wetfish.net/irc'>IRC</a></i>"
            ],

            tags: ['Community', 'Project Management', 'News', 'Trello']
        },
    
        {
            title: 'SlapStats!',
            author: 'rachel',
            date: 'February 1, 2015',
            content:
            [
                "<a href='https://slapstats.wetfish.net/'><img src='img/slapgraph.png'></a>",
                "Checkout the newest wetfish project, <a href='https://slapstats.wetfish.net/'>slapstats</a>!",
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
            $('section.news').append(rendered);
        });
    }
});
