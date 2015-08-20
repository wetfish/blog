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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2Nsb3Vkcy5qcyIsInN0YXRpYy9qcy9ldmVudHMvaGFtYnVyZ2VyLmpzIiwic3RhdGljL2pzL2V2ZW50cy9oZWFkZXIuanMiLCJzdGF0aWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIHJlc2l6ZSgpXG57XG4gICAgLy8gRGV0ZXJtaW5lIGF0bW9zcGhlcmUgZGltZW5zaW9uc1xuICAgIHZhciBhdG1vc3BoZXJlID1cbiAgICB7XG4gICAgICAgIHNpemU6ICQoJy5hdG1vc3BoZXJlJykuc2l6ZSgpLFxuICAgICAgICBiYWNrZ3JvdW5kOiAkKCcuYXRtb3NwaGVyZScpLnN0eWxlKCdiYWNrZ3JvdW5kLXNpemUnKS5zcGxpdCgnICcpLFxuICAgICAgICBwb3NpdGlvbjogJCgnLmF0bW9zcGhlcmUnKS5zdHlsZSgnYmFja2dyb3VuZC1wb3NpdGlvbicpLnNwbGl0KCcgJylcbiAgICB9O1xuXG4gICAgYXRtb3NwaGVyZS53aWR0aCA9IGF0bW9zcGhlcmUuc2l6ZS53aWR0aCAqIChwYXJzZUludChhdG1vc3BoZXJlLmJhY2tncm91bmRbMF0pIC8gMTAwKTtcbiAgICBhdG1vc3BoZXJlLmhlaWdodCA9IGF0bW9zcGhlcmUuc2l6ZS5oZWlnaHQgKiAocGFyc2VJbnQoYXRtb3NwaGVyZS5iYWNrZ3JvdW5kWzFdKSAvIDEwMCkgLSA1O1xuICAgIFxuICAgICQoJy5wYXRoLCAuY2xvdWQnKS5zdHlsZSh7aGVpZ2h0OiBhdG1vc3BoZXJlLmhlaWdodCArICdweCcsIHdpZHRoOiBhdG1vc3BoZXJlLndpZHRoICsgJ3B4J30pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCgnLnBhdGgsIC5jbG91ZCcpLnN0eWxlKHtkaXNwbGF5OiAnYmxvY2snfSk7XG4gICAgcmVzaXplKCk7XG4gICAgXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHJlc2l6ZSgpO1xuICAgIH0pO1xufSk7XG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGlmKCQoJy5zaWRlYmFyJykuaGFzQ2xhc3MoJ29wZW4nKSlcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsImZ1bmN0aW9uIHJlc2l6ZSgpXG57XG4gICAgdmFyIGhlaWdodCA9ICQoJy5jb250ZW50JykuaGVpZ2h0KCk7XG4gICAgJCgnYm9keSwgLnN0YXJzJykuc3R5bGUoe2hlaWdodDogaGVpZ2h0ICsgJ3B4J30pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHJlc2l6ZSgpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihldmVudClcbiAgICB7XG4gICAgICAgIHZhciBzY3JvbGwgPSAkKHRoaXMpLnNjcm9sbCgpO1xuICAgICAgICAkKCcuYm9keScpLmVsWzBdLnNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XG4gICAgfSk7XG59KTtcbiIsInJlcXVpcmUoJy4vZXZlbnRzL2hhbWJ1cmdlcicpO1xucmVxdWlyZSgnLi9ldmVudHMvaGVhZGVyJyk7XG5yZXF1aXJlKCcuL2V2ZW50cy9jbG91ZHMnKTtcbiJdfQ==
