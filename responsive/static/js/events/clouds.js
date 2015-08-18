function resize()
{
    var height = Math.max($('body').height(), $(window).height('outer'));
    var width = Math.max($('body').width(), $(window).width('outer'));
    height -= 40;

    $('.clouds, .cloud').style({height: height + 'px', width: 'auto'});
    
    $('.cloud').each(function()
    {
        $(this).transform('translateY', height / 2 + 'px');
    });
}

$(document).ready(function()
{
    $('.cloud').style({display: 'block'});

    resize();
    
    $(window).on('resize load', function()
    {
        resize();
    });
});
