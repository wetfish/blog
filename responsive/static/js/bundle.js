(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function resize()
{
    var height = Math.max($('body').height(), $(window).height('outer'));
    var width = Math.max($('body').width(), $(window).width('outer'));
    height -= 40;

    // Determine atmosphere size
    var atmosphere =
    {
        background: $('.atmosphere').style('background-size').split(' ')};

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2Nsb3Vkcy5qcyIsInN0YXRpYy9qcy9ldmVudHMvaGFtYnVyZ2VyLmpzIiwic3RhdGljL2pzL2V2ZW50cy9oZWFkZXIuanMiLCJzdGF0aWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiByZXNpemUoKVxue1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1heCgkKCdib2R5JykuaGVpZ2h0KCksICQod2luZG93KS5oZWlnaHQoJ291dGVyJykpO1xuICAgIHZhciB3aWR0aCA9IE1hdGgubWF4KCQoJ2JvZHknKS53aWR0aCgpLCAkKHdpbmRvdykud2lkdGgoJ291dGVyJykpO1xuICAgIGhlaWdodCAtPSA0MDtcblxuICAgIC8vIERldGVybWluZSBhdG1vc3BoZXJlIHNpemVcbiAgICB2YXIgYXRtb3NwaGVyZSA9XG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkKCcuYXRtb3NwaGVyZScpLnN0eWxlKCdiYWNrZ3JvdW5kLXNpemUnKS5zcGxpdCgnICcpfTtcblxuICAgIGNvbnNvbGUubG9nKGF0bW9zcGhlcmUpO1xuXG4gICAgJCgnLnBhdGgnKS5oZWlnaHQoKTtcblxuICAgICQoJy5jbG91ZHMsIC5jbG91ZCcpLnN0eWxlKHtoZWlnaHQ6IGhlaWdodCArICdweCcsIHdpZHRoOiAnMTAwJSd9KTtcbiAgICBcbiAgICAkKCcuY2xvdWQnKS5lYWNoKGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgICQodGhpcykudHJhbnNmb3JtKCd0cmFuc2xhdGVZJywgaGVpZ2h0IC8gMi41ICsgJ3B4Jyk7XG4gICAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICAkKCcuY2xvdWQnKS5zdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJ30pO1xuXG4gICAgcmVzaXplKCk7XG4gICAgXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHJlc2l6ZSgpO1xuICAgIH0pO1xufSk7XG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGlmKCQoJy5zaWRlYmFyJykuaGFzQ2xhc3MoJ29wZW4nKSlcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImZ1bmN0aW9uIHJlc2l6ZSgpXG57XG4gICAgdmFyIGhlaWdodCA9ICQoJy5jb250ZW50JykuaGVpZ2h0KCk7XG4gICAgJCgnYm9keSwgLnN0YXJzJykuc3R5bGUoe2hlaWdodDogaGVpZ2h0ICsgJ3B4J30pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHJlc2l6ZSgpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihldmVudClcbiAgICB7XG4gICAgICAgIHZhciBzY3JvbGwgPSAkKHRoaXMpLnNjcm9sbCgpO1xuICAgICAgICAkKCcuYm9keScpLmVsWzBdLnNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XG4gICAgfSk7XG59KTtcbiIsInJlcXVpcmUoJy4vZXZlbnRzL2hhbWJ1cmdlcicpO1xucmVxdWlyZSgnLi9ldmVudHMvaGVhZGVyJyk7XG5yZXF1aXJlKCcuL2V2ZW50cy9jbG91ZHMnKTtcbiJdfQ==
