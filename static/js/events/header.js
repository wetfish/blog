function resize()
{
    var header = $('nav.header').height('outer');
    var content = $('section.content').height();
    $('.background').style({height: header + content + 'px'});

    console.log(header, content);
}

$(document).ready(function()
{
    $(window).on('resize load', function()
    {
        resize();
    });

    $('.content-wrap').on('scroll', function(event)
    {
        var scroll = $(this).scroll();

        console.log('hi!!', scroll);

//       $('body').el[0].scrollTop = scroll.top;

        document.body.scrollTop = scroll.top;
        document.documentElement.scrollTop = scroll.top; 
    });
/*
    $(window).on('scroll', function(event)
    {
        var scroll = $(this).scroll();
        $('.body').el[0].scrollTop = scroll.top;
    });
    */
});
