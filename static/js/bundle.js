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

    var burgerTime; // to keep track of setTimeouts.

    $(window).on('mousemove touchstart', function()
    {
        if(burgerTime)
        {
            clearTimeout(burgerTime);
        }

        burgerTime = setTimeout(function()
        {
            $('i.hamburger').addClass('hide');
            $('img.hamburger').removeClass('hide');
        }, 30000);

        $('img.hamburger').addClass('hide');
        $('i.hamburger').removeClass('hide');
    });
});

},{}],3:[function(require,module,exports){
require('./events/background');
require('./events/hamburger');

},{"./events/background":1,"./events/hamburger":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2JhY2tncm91bmQuanMiLCJzdGF0aWMvanMvZXZlbnRzL2hhbWJ1cmdlci5qcyIsInN0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gcmVzaXplKClcbntcbiAgICB2YXIgbW9iaWxlSGVpZ2h0ID0gJCgnc2VjdGlvbi5oZWFkZXInKS5oZWlnaHQoJ291dGVyJykgKyAkKCdzZWN0aW9uLmNvbnRlbnQnKS5oZWlnaHQoJ291dGVyJyk7XG4gICAgdmFyIGRlc2t0b3BIZWlnaHQgPSAkKCdib2R5JykuaGVpZ2h0KCdvdXRlcicpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1heChtb2JpbGVIZWlnaHQsIGRlc2t0b3BIZWlnaHQpO1xuXG4gICAgJCgnLnN0YXJzLCAuYXRtb3NwaGVyZSwgLmNsb3VkcycpLnN0eWxlKHsnaGVpZ2h0JzogaGVpZ2h0ICsgJ3B4J30pO1xufVxuXG5mdW5jdGlvbiBjbG91ZHMoKVxue1xuICAgICQoJy5wYXRoLCAuY2xvdWQnKS5zdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJ30pO1xuXG4gICAgLy8gUGF1c2UgY2xvdWQgYW5pbWF0aW9ucyBvbiBtb2JpbGVcbiAgICBpZigkKCcuaXMtbW9iaWxlJykuc3R5bGUoJ2Rpc3BsYXknKSA9PSAnYmxvY2snKVxuICAgIHtcbiAgICAgICAgJCgnc3ZnJykuZWFjaChmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2VBbmltYXRpb25zKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAkKCdzdmcnKS5lYWNoKGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy51bnBhdXNlQW5pbWF0aW9ucygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgYXRtb3NwaGVyZSBkaW1lbnNpb25zXG4gICAgdmFyIGF0bW9zcGhlcmUgPVxuICAgIHtcbiAgICAgICAgc2l6ZTogJCgnLmF0bW9zcGhlcmUnKS5zaXplKCksXG4gICAgICAgIGJhY2tncm91bmQ6ICQoJy5hdG1vc3BoZXJlJykuc3R5bGUoJ2JhY2tncm91bmQtc2l6ZScpLnNwbGl0KCcgJyksXG4gICAgICAgIHBvc2l0aW9uOiAkKCcuYXRtb3NwaGVyZScpLnN0eWxlKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJykuc3BsaXQoJyAnKVxuICAgIH07XG5cbiAgICBhdG1vc3BoZXJlLndpZHRoID0gYXRtb3NwaGVyZS5zaXplLndpZHRoICogKHBhcnNlSW50KGF0bW9zcGhlcmUuYmFja2dyb3VuZFswXSkgLyAxMDApO1xuICAgIGF0bW9zcGhlcmUuaGVpZ2h0ID0gYXRtb3NwaGVyZS5zaXplLmhlaWdodCAqIChwYXJzZUludChhdG1vc3BoZXJlLmJhY2tncm91bmRbMV0pIC8gMTAwKTtcblxuICAgICQoJy5wYXRoLCAuY2xvdWQnKS5zdHlsZSh7aGVpZ2h0OiBhdG1vc3BoZXJlLmhlaWdodCArICdweCcsIHdpZHRoOiBhdG1vc3BoZXJlLndpZHRoICsgJ3B4J30pO1xuXG4gICAgLy8gU2NhbGUgY2xvdWRzIGJhc2VkIG9uIGF0bW9zcGhlcmUgc2l6ZVxuICAgICQoJy5jbG91ZCBpbWFnZScpLmVhY2goZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgdmFyIGNsb3VkID1cbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGguYmFzZVZhbC52YWx1ZSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQuYmFzZVZhbC52YWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKCQodGhpcykuZGF0YSgnd2lkdGgnKSAmJiAkKHRoaXMpLmRhdGEoJ2hlaWdodCcpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjbG91ZC53aWR0aCA9ICQodGhpcykuZGF0YSgnd2lkdGgnKTtcbiAgICAgICAgICAgIGNsb3VkLmhlaWdodCA9ICQodGhpcykuZGF0YSgnaGVpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ3dpZHRoJywgY2xvdWQud2lkdGgpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdoZWlnaHQnLCBjbG91ZC5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLm1pbigwLjc1LCAoJCgnLmF0bW9zcGhlcmUnKS5oZWlnaHQoKSAvICQod2luZG93KS5oZWlnaHQoKSkgLyA0KTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoJ3dpZHRoJywgY2xvdWQud2lkdGggKiBkaWZmZXJlbmNlKTtcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdoZWlnaHQnLCBjbG91ZC5oZWlnaHQgKiBkaWZmZXJlbmNlKTtcbiAgICB9KTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQod2luZG93KS5vbigncmVzaXplIGxvYWQnLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICByZXNpemUoKTtcbiAgICAgICAgY2xvdWRzKCk7XG4gICAgfSk7XG5cbiAgICAkKCdzZWN0aW9uLmJvZHknKS5vbignc2Nyb2xsIHRvdWNobW92ZScsIGZ1bmN0aW9uKGV2ZW50KVxuICAgIHtcbiAgICAgICAgdmFyIHNjcm9sbCA9ICQoJ3NlY3Rpb24uYm9keScpLnNjcm9sbCgpO1xuICAgICAgICAkKCcuYmFja2dyb3VuZCcpLmVsWzBdLnNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XG4gICAgfSk7XG5cbiAgICByZXNpemUoKTtcbiAgICBjbG91ZHMoKTtcbn0pO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQoJ2ltZy5oYW1idXJnZXInKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBpZigkKCcuc2lkZWJhcicpLmhhc0NsYXNzKCdvcGVuJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGJ1cmdlclRpbWU7IC8vIHRvIGtlZXAgdHJhY2sgb2Ygc2V0VGltZW91dHMuXG5cbiAgICAkKHdpbmRvdykub24oJ21vdXNlbW92ZSB0b3VjaHN0YXJ0JywgZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgaWYoYnVyZ2VyVGltZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGJ1cmdlclRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnVyZ2VyVGltZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKCdpLmhhbWJ1cmdlcicpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICAkKCdpbWcuaGFtYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICAgfSwgMzAwMDApO1xuXG4gICAgICAgICQoJ2ltZy5oYW1idXJnZXInKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgICAkKCdpLmhhbWJ1cmdlcicpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgfSk7XG59KTtcbiIsInJlcXVpcmUoJy4vZXZlbnRzL2JhY2tncm91bmQnKTtcbnJlcXVpcmUoJy4vZXZlbnRzL2hhbWJ1cmdlcicpO1xuIl19
