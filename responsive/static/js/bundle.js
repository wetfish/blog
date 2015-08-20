(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

        var difference = Math.min(0.75, ($('body').height() / $(window).height()) / 4);

        $(this).attr('width', cloud.width * difference);
        $(this).attr('height', cloud.height * difference);
    });
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

},{}],2:[function(require,module,exports){
$(document).ready(function()
{
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
});

},{}],3:[function(require,module,exports){
function resize()
{
    var height = $('.content').height();
    $('body, .stars').style({height: height + 'px'});
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

},{}],4:[function(require,module,exports){
require('./events/hamburger');
require('./events/header');
require('./events/clouds');

},{"./events/clouds":1,"./events/hamburger":2,"./events/header":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2Nsb3Vkcy5qcyIsInN0YXRpYy9qcy9ldmVudHMvaGFtYnVyZ2VyLmpzIiwic3RhdGljL2pzL2V2ZW50cy9oZWFkZXIuanMiLCJzdGF0aWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiByZXNpemUoKVxue1xuICAgIC8vIERldGVybWluZSBhdG1vc3BoZXJlIGRpbWVuc2lvbnNcbiAgICB2YXIgYXRtb3NwaGVyZSA9XG4gICAge1xuICAgICAgICBzaXplOiAkKCcuYXRtb3NwaGVyZScpLnNpemUoKSxcbiAgICAgICAgYmFja2dyb3VuZDogJCgnLmF0bW9zcGhlcmUnKS5zdHlsZSgnYmFja2dyb3VuZC1zaXplJykuc3BsaXQoJyAnKSxcbiAgICAgICAgcG9zaXRpb246ICQoJy5hdG1vc3BoZXJlJykuc3R5bGUoJ2JhY2tncm91bmQtcG9zaXRpb24nKS5zcGxpdCgnICcpXG4gICAgfTtcblxuICAgIGF0bW9zcGhlcmUud2lkdGggPSBhdG1vc3BoZXJlLnNpemUud2lkdGggKiAocGFyc2VJbnQoYXRtb3NwaGVyZS5iYWNrZ3JvdW5kWzBdKSAvIDEwMCk7XG4gICAgYXRtb3NwaGVyZS5oZWlnaHQgPSBhdG1vc3BoZXJlLnNpemUuaGVpZ2h0ICogKHBhcnNlSW50KGF0bW9zcGhlcmUuYmFja2dyb3VuZFsxXSkgLyAxMDApIC0gNTtcbiAgICBcbiAgICAkKCcucGF0aCwgLmNsb3VkJykuc3R5bGUoe2hlaWdodDogYXRtb3NwaGVyZS5oZWlnaHQgKyAncHgnLCB3aWR0aDogYXRtb3NwaGVyZS53aWR0aCArICdweCd9KTtcblxuICAgIC8vIFNjYWxlIGNsb3VkcyBiYXNlZCBvbiBhdG1vc3BoZXJlIHNpemVcbiAgICAkKCcuY2xvdWQgaW1hZ2UnKS5lYWNoKGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHZhciBjbG91ZCA9XG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLmJhc2VWYWwudmFsdWUsXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LmJhc2VWYWwudmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGlmKCQodGhpcykuZGF0YSgnd2lkdGgnKSAmJiAkKHRoaXMpLmRhdGEoJ2hlaWdodCcpKVxuICAgICAgICB7XG4gICAgICAgICAgICBjbG91ZC53aWR0aCA9ICQodGhpcykuZGF0YSgnd2lkdGgnKTtcbiAgICAgICAgICAgIGNsb3VkLmhlaWdodCA9ICQodGhpcykuZGF0YSgnaGVpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ3dpZHRoJywgY2xvdWQud2lkdGgpO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdoZWlnaHQnLCBjbG91ZC5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLm1pbigwLjc1LCAoJCgnYm9keScpLmhlaWdodCgpIC8gJCh3aW5kb3cpLmhlaWdodCgpKSAvIDQpO1xuXG4gICAgICAgICQodGhpcykuYXR0cignd2lkdGgnLCBjbG91ZC53aWR0aCAqIGRpZmZlcmVuY2UpO1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ2hlaWdodCcsIGNsb3VkLmhlaWdodCAqIGRpZmZlcmVuY2UpO1xuICAgIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCgnLnBhdGgsIC5jbG91ZCcpLnN0eWxlKHtkaXNwbGF5OiAnYmxvY2snfSk7XG4gICAgcmVzaXplKCk7XG4gICAgXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHJlc2l6ZSgpO1xuICAgIH0pO1xufSk7XG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGlmKCQoJy5zaWRlYmFyJykuaGFzQ2xhc3MoJ29wZW4nKSlcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImZ1bmN0aW9uIHJlc2l6ZSgpXG57XG4gICAgdmFyIGhlaWdodCA9ICQoJy5jb250ZW50JykuaGVpZ2h0KCk7XG4gICAgJCgnYm9keSwgLnN0YXJzJykuc3R5bGUoe2hlaWdodDogaGVpZ2h0ICsgJ3B4J30pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHJlc2l6ZSgpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihldmVudClcbiAgICB7XG4gICAgICAgIHZhciBzY3JvbGwgPSAkKHRoaXMpLnNjcm9sbCgpO1xuICAgICAgICAkKCcuYm9keScpLmVsWzBdLnNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XG4gICAgfSk7XG59KTtcbiIsInJlcXVpcmUoJy4vZXZlbnRzL2hhbWJ1cmdlcicpO1xucmVxdWlyZSgnLi9ldmVudHMvaGVhZGVyJyk7XG5yZXF1aXJlKCcuL2V2ZW50cy9jbG91ZHMnKTtcbiJdfQ==
