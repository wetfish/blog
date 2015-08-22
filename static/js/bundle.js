(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
require('./events/hamburger');
require('./events/header');

/*
require('./events/clouds');
*/

},{"./events/hamburger":1,"./events/header":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2hhbWJ1cmdlci5qcyIsInN0YXRpYy9qcy9ldmVudHMvaGVhZGVyLmpzIiwic3RhdGljL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGlmKCQoJy5zaWRlYmFyJykuaGFzQ2xhc3MoJ29wZW4nKSlcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImZ1bmN0aW9uIHJlc2l6ZSgpXG57XG4gICAgdmFyIGhlYWRlciA9ICQoJ25hdi5oZWFkZXInKS5oZWlnaHQoJ291dGVyJyk7XG4gICAgdmFyIGNvbnRlbnQgPSAkKCdzZWN0aW9uLmNvbnRlbnQnKS5oZWlnaHQoKTtcbiAgICAkKCcuYmFja2dyb3VuZCcpLnN0eWxlKHtoZWlnaHQ6IGhlYWRlciArIGNvbnRlbnQgKyAncHgnfSk7XG5cbiAgICBjb25zb2xlLmxvZyhoZWFkZXIsIGNvbnRlbnQpO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHJlc2l6ZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmNvbnRlbnQtd3JhcCcpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihldmVudClcbiAgICB7XG4gICAgICAgIHZhciBzY3JvbGwgPSAkKHRoaXMpLnNjcm9sbCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdoaSEhJywgc2Nyb2xsKTtcblxuLy8gICAgICAgJCgnYm9keScpLmVsWzBdLnNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBzY3JvbGwudG9wO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsLnRvcDsgXG4gICAgfSk7XG4vKlxuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oZXZlbnQpXG4gICAge1xuICAgICAgICB2YXIgc2Nyb2xsID0gJCh0aGlzKS5zY3JvbGwoKTtcbiAgICAgICAgJCgnLmJvZHknKS5lbFswXS5zY3JvbGxUb3AgPSBzY3JvbGwudG9wO1xuICAgIH0pO1xuICAgICovXG59KTtcbiIsInJlcXVpcmUoJy4vZXZlbnRzL2hhbWJ1cmdlcicpO1xucmVxdWlyZSgnLi9ldmVudHMvaGVhZGVyJyk7XG5cbi8qXG5yZXF1aXJlKCcuL2V2ZW50cy9jbG91ZHMnKTtcbiovXG4iXX0=
