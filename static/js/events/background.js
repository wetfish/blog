function resize()
{
    var mobileHeight = $('section.header').height('outer') + $('section.content').height('outer');
    var desktopHeight = $('body').height('outer');
    var height = Math.max(mobileHeight, desktopHeight);

    $('.stars, .atmosphere, .clouds').style({'height': height + 'px'});
}

function clouds()
{
    $('.path, .cloud').style({display: 'block'});

    // Pause cloud animations on mobile
    if($('.is-mobile').style('display') == 'block')
    {
        $('svg').each(function()
        {
            this.pauseAnimations();
        });
    }
    else
    {
        $('svg').each(function()
        {
            this.unpauseAnimations();
        });
    }

    // Determine atmosphere dimensions
    var atmosphere =
    {
        size: $('.atmosphere').size(),
        background: $('.atmosphere').style('background-size').split(' '),
        position: $('.atmosphere').style('background-position').split(' ')
    };

    atmosphere.width = atmosphere.size.width * (parseInt(atmosphere.background[0]) / 100);
    atmosphere.height = atmosphere.size.height * (parseInt(atmosphere.background[1]) / 100);
    
    $('.path, .cloud').style({height: atmosphere.height + 'px', width: atmosphere.width + 'px'});

    // Scale clouds based on atmosphere size
    $('.cloud image').each(function()
    {
        var cloud =
        {
            width: this.width.baseVal.value,
            height: this.height.baseVal.value
        };
        
        if($(this).data('width') && $(this).data('height'))
        {
            cloud.width = $(this).data('width');
            cloud.height = $(this).data('height');
        }
        else
        {
            $(this).data('width', cloud.width);
            $(this).data('height', cloud.height);
        }

        var difference = Math.min(0.75, ($('.atmosphere').height() / $(window).height()) / 4);

        $(this).attr('width', cloud.width * difference);
        $(this).attr('height', cloud.height * difference);
    });
}

$(document).ready(function()
{
    $(window).on('resize load', function()
    {
        resize();
        clouds();
    });
    
    $('section.body').on('scroll touchmove', function(event)
    {
        var scroll = $('section.body').scroll();
        $('.background').el[0].scrollTop = scroll.top;
    });

    resize();
    clouds();
});
