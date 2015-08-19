function resize()
{
    var height = Math.max($('body').height(), $(window).height('outer'));
    var width = Math.max($('body').width(), $(window).width('outer'));
    height -= 40;

    // Determine atmosphere size
    var atmosphere =
    {
        background: $('.atmosphere').style('background-size').split(' ')};
    }
    
    console.log(atmosphere);

    $('.path').height();

    $('.clouds, .cloud').style({height: height + 'px', width: '100%'});
    
    $('.cloud').each(function()
    {
        $(this).transform('translateY', height / 2.5 + 'px');
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
