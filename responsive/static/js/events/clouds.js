function resize()
{
    // Determine atmosphere dimensions
    var atmosphere =
    {
        size: $('.atmosphere').size(),
        background: $('.atmosphere').style('background-size').split(' '),
        position: $('.atmosphere').style('background-position').split(' ')
    };

    atmosphere.width = atmosphere.size.width * (parseInt(atmosphere.background[0]) / 100);
    atmosphere.height = atmosphere.size.height * (parseInt(atmosphere.background[1]) / 100) - 5;
    
    $('.path, .cloud').style({height: atmosphere.height + 'px', width: atmosphere.width + 'px'});
}

$(document).ready(function()
{
    $('.path, .cloud').style({display: 'block'});
    resize();
    
    $(window).on('resize load', function()
    {
        resize();
    });
});
