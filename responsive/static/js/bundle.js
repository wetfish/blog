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
    var height = $('.content').height();
    $('body').style({height: height + 'px'});
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

},{}],3:[function(require,module,exports){
require('./events/hamburger');
require('./events/header');

},{"./events/hamburger":1,"./events/header":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2hhbWJ1cmdlci5qcyIsInN0YXRpYy9qcy9ldmVudHMvaGVhZGVyLmpzIiwic3RhdGljL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICAkKCcuaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgaWYoJCgnLnNpZGViYXInKS5oYXNDbGFzcygnb3BlbicpKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKCcuc2lkZWJhcicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAkKCcuc2lkZWJhcicpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiZnVuY3Rpb24gcmVzaXplKClcbntcbiAgICB2YXIgaGVpZ2h0ID0gJCgnLmNvbnRlbnQnKS5oZWlnaHQoKTtcbiAgICAkKCdib2R5Jykuc3R5bGUoe2hlaWdodDogaGVpZ2h0ICsgJ3B4J30pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHJlc2l6ZSgpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihldmVudClcbiAgICB7XG4gICAgICAgIHZhciBzY3JvbGwgPSAkKHRoaXMpLnNjcm9sbCgpO1xuICAgICAgICAkKCcuYm9keScpLmVsWzBdLnNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XG4gICAgfSk7XG59KTtcbiIsInJlcXVpcmUoJy4vZXZlbnRzL2hhbWJ1cmdlcicpO1xucmVxdWlyZSgnLi9ldmVudHMvaGVhZGVyJyk7XG4iXX0=
