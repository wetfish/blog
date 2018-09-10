(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
$(document).ready(function()
{
    $('img.hamburger').addClass('hide');
    $('.hamburger').on('click', function()
    {
        if($('.sidebar').hasClass('open'))
        {
            $('.sidebar').removeClass('open');
        }
        else
        {
            $('.sidebar').addClass('open');
        }
    });
    $(document).on('mousemove',function()
    {
        console.log('you moved your mouse');

        setTimeout(function()
        {   
            $('i.hamburger').addClass('hide');
            $('img.hamburger').removeClass('hide');    
        },30000);
        $('img.hamburger').addClass('hide');
        $('i.hamburger').removeClass('hide');
    });
});


},{}],3:[function(require,module,exports){
require('./events/background');
require('./events/hamburger');

},{"./events/background":1,"./events/hamburger":2}]},{},[3])
