function resize()
{
    var header = $('nav.header').height('outer');
    var content = $('section.content').height();
    $('body, .stars').style({height: header + content + 'px'});
}

$(document).ready(function()
{
    $(window).on('resize load', function()
    {
        resize();
    });

    $(window).on('scroll', function(event)
    {
        var scroll = $(this).scroll();
        $('.body').el[0].scrollTop = scroll.top;
    });
});
