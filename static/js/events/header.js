function resize()
{
    var header = $('nav.header').height('outer');
    var content = $('section.content').height();
    $('.background').style({height: header + content + 'px'});
}

var timeout = false;
var position = 0;
var offset = 0;
var delta = 0;

function updateTimeout(scroll, reset)
{
    if(reset)
    {
        delta = 5;
        position = scroll;
    }
    else
    {
        delta += Math.abs(position - scroll);
        position = scroll;
    }

$('.debug').text("waiting " + delta);

    return setTimeout(function()
    {
        document.body.scrollTop = scroll;
        document.documentElement.scrollTop = scroll;


$('.debug').text("cleared");

        timeout = false;
    }, Math.min(500, delta));
}

$(document).ready(function()
{
    $(window).on('resize load', function()
    {
        resize();
    });

    $('.content-wrap').on('scroll', function(event)
    {
        if(timeout)
        {
            clearTimeout(timeout);
            timeout = updateTimeout(event.target.scrollTop, false);
        }
        else
        {
            timeout = updateTimeout(event.target.scrollTop, true);
        }
    });

    $('.content-wrap').on('touchstart', function(event)
    {
        var touch = event.touches[0] || event.changedTouches[0];
        offset = touch.pageY;
    });

    $('.content-wrap').on('touchmove', function(event)
    {
        var touch = event.touches[0] || event.changedTouches[0];
        var difference = offset - touch.pageY;

        clearTimeout(timeout);
        timeout = updateTimeout(position + difference, false);
    });
});
