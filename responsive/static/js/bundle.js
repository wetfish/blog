(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function resize()
{
    var height = Math.max($('body').height(), $(window).height('outer'));
    var width = Math.max($('body').width(), $(window).width('outer'));
    height -= 40;

    $('.clouds, .cloud').style({height: height + 'px', width: 'auto'});
    
    $('.cloud').each(function()
    {
        $(this).transform('translateY', height / 2 + 'px');
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2Nsb3Vkcy5qcyIsInN0YXRpYy9qcy9ldmVudHMvaGFtYnVyZ2VyLmpzIiwic3RhdGljL2pzL2V2ZW50cy9oZWFkZXIuanMiLCJzdGF0aWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiByZXNpemUoKVxue1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1heCgkKCdib2R5JykuaGVpZ2h0KCksICQod2luZG93KS5oZWlnaHQoJ291dGVyJykpO1xuICAgIHZhciB3aWR0aCA9IE1hdGgubWF4KCQoJ2JvZHknKS53aWR0aCgpLCAkKHdpbmRvdykud2lkdGgoJ291dGVyJykpO1xuICAgIGhlaWdodCAtPSA0MDtcblxuICAgICQoJy5jbG91ZHMsIC5jbG91ZCcpLnN0eWxlKHtoZWlnaHQ6IGhlaWdodCArICdweCcsIHdpZHRoOiAnYXV0byd9KTtcbiAgICBcbiAgICAkKCcuY2xvdWQnKS5lYWNoKGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgICQodGhpcykudHJhbnNmb3JtKCd0cmFuc2xhdGVZJywgaGVpZ2h0IC8gMiArICdweCcpO1xuICAgIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCgnLmNsb3VkJykuc3R5bGUoe2Rpc3BsYXk6ICdibG9jayd9KTtcblxuICAgIHJlc2l6ZSgpO1xuICAgIFxuICAgICQod2luZG93KS5vbigncmVzaXplIGxvYWQnLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICByZXNpemUoKTtcbiAgICB9KTtcbn0pO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBpZigkKCcuc2lkZWJhcicpLmhhc0NsYXNzKCdvcGVuJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJmdW5jdGlvbiByZXNpemUoKVxue1xuICAgIHZhciBoZWlnaHQgPSAkKCcuY29udGVudCcpLmhlaWdodCgpO1xuICAgICQoJ2JvZHksIC5zdGFycycpLnN0eWxlKHtoZWlnaHQ6IGhlaWdodCArICdweCd9KTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQod2luZG93KS5vbigncmVzaXplIGxvYWQnLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICByZXNpemUoKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oZXZlbnQpXG4gICAge1xuICAgICAgICB2YXIgc2Nyb2xsID0gJCh0aGlzKS5zY3JvbGwoKTtcbiAgICAgICAgJCgnLmJvZHknKS5lbFswXS5zY3JvbGxUb3AgPSBzY3JvbGwudG9wO1xuICAgIH0pO1xufSk7XG4iLCJyZXF1aXJlKCcuL2V2ZW50cy9oYW1idXJnZXInKTtcbnJlcXVpcmUoJy4vZXZlbnRzL2hlYWRlcicpO1xucmVxdWlyZSgnLi9ldmVudHMvY2xvdWRzJyk7XG4iXX0=
