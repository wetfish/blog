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

},{}],3:[function(require,module,exports){
require('./events/hamburger');
require('./events/header');

/*
require('./events/clouds');
*/

},{"./events/hamburger":1,"./events/header":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2hhbWJ1cmdlci5qcyIsInN0YXRpYy9qcy9ldmVudHMvaGVhZGVyLmpzIiwic3RhdGljL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGlmKCQoJy5zaWRlYmFyJykuaGFzQ2xhc3MoJ29wZW4nKSlcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImZ1bmN0aW9uIHJlc2l6ZSgpXG57XG4gICAgdmFyIGhlYWRlciA9ICQoJ25hdi5oZWFkZXInKS5oZWlnaHQoJ291dGVyJyk7XG4gICAgdmFyIGNvbnRlbnQgPSAkKCdzZWN0aW9uLmNvbnRlbnQnKS5oZWlnaHQoKTtcbiAgICAkKCcuYmFja2dyb3VuZCcpLnN0eWxlKHtoZWlnaHQ6IGhlYWRlciArIGNvbnRlbnQgKyAncHgnfSk7XG59XG5cbnZhciB0aW1lb3V0ID0gZmFsc2U7XG52YXIgcG9zaXRpb24gPSAwO1xudmFyIG9mZnNldCA9IDA7XG52YXIgZGVsdGEgPSAwO1xuXG5mdW5jdGlvbiB1cGRhdGVUaW1lb3V0KHNjcm9sbCwgcmVzZXQpXG57XG4gICAgaWYocmVzZXQpXG4gICAge1xuICAgICAgICBkZWx0YSA9IDU7XG4gICAgICAgIHBvc2l0aW9uID0gc2Nyb2xsO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBkZWx0YSArPSBNYXRoLmFicyhwb3NpdGlvbiAtIHNjcm9sbCk7XG4gICAgICAgIHBvc2l0aW9uID0gc2Nyb2xsO1xuICAgIH1cblxuJCgnLmRlYnVnJykudGV4dChcIndhaXRpbmcgXCIgKyBkZWx0YSk7XG5cbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHNjcm9sbDtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbDtcblxuXG4kKCcuZGVidWcnKS50ZXh0KFwiY2xlYXJlZFwiKTtcblxuICAgICAgICB0aW1lb3V0ID0gZmFsc2U7XG4gICAgfSwgTWF0aC5taW4oNTAwLCBkZWx0YSkpO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHJlc2l6ZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLmNvbnRlbnQtd3JhcCcpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihldmVudClcbiAgICB7XG4gICAgICAgIGlmKHRpbWVvdXQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSB1cGRhdGVUaW1lb3V0KGV2ZW50LnRhcmdldC5zY3JvbGxUb3AsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSB1cGRhdGVUaW1lb3V0KGV2ZW50LnRhcmdldC5zY3JvbGxUb3AsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuY29udGVudC13cmFwJykub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihldmVudClcbiAgICB7XG4gICAgICAgIHZhciB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIG9mZnNldCA9IHRvdWNoLnBhZ2VZO1xuICAgIH0pO1xuXG4gICAgJCgnLmNvbnRlbnQtd3JhcCcpLm9uKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihldmVudClcbiAgICB7XG4gICAgICAgIHZhciB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF0gfHwgZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHZhciBkaWZmZXJlbmNlID0gb2Zmc2V0IC0gdG91Y2gucGFnZVk7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gdXBkYXRlVGltZW91dChwb3NpdGlvbiArIGRpZmZlcmVuY2UsIGZhbHNlKTtcbiAgICB9KTtcbn0pO1xuIiwicmVxdWlyZSgnLi9ldmVudHMvaGFtYnVyZ2VyJyk7XG5yZXF1aXJlKCcuL2V2ZW50cy9oZWFkZXInKTtcblxuLypcbnJlcXVpcmUoJy4vZXZlbnRzL2Nsb3VkcycpO1xuKi9cbiJdfQ==
