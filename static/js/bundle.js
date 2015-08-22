(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function resize()
{
    // Pause cloud animations on mobile
    if($('.is-mobile').style('display') == 'block')
    {
        $('.path, .cloud').style({display: 'none'});

        $('svg').each(function()
        {
            this.pauseAnimations();
        });

        return;
    }
    else
    {
        $('.path, .cloud').style({display: 'block'});

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
    var header = $('nav.header').height('outer');
    var content = $('section.content').height();
    $('body, .stars').style({height: header + content + 'px'});
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2Nsb3Vkcy5qcyIsInN0YXRpYy9qcy9ldmVudHMvaGFtYnVyZ2VyLmpzIiwic3RhdGljL2pzL2V2ZW50cy9oZWFkZXIuanMiLCJzdGF0aWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIHJlc2l6ZSgpXG57XG4gICAgLy8gUGF1c2UgY2xvdWQgYW5pbWF0aW9ucyBvbiBtb2JpbGVcbiAgICBpZigkKCcuaXMtbW9iaWxlJykuc3R5bGUoJ2Rpc3BsYXknKSA9PSAnYmxvY2snKVxuICAgIHtcbiAgICAgICAgJCgnLnBhdGgsIC5jbG91ZCcpLnN0eWxlKHtkaXNwbGF5OiAnbm9uZSd9KTtcblxuICAgICAgICAkKCdzdmcnKS5lYWNoKGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wYXVzZUFuaW1hdGlvbnMoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAkKCcucGF0aCwgLmNsb3VkJykuc3R5bGUoe2Rpc3BsYXk6ICdibG9jayd9KTtcblxuICAgICAgICAkKCdzdmcnKS5lYWNoKGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy51bnBhdXNlQW5pbWF0aW9ucygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBEZXRlcm1pbmUgYXRtb3NwaGVyZSBkaW1lbnNpb25zXG4gICAgdmFyIGF0bW9zcGhlcmUgPVxuICAgIHtcbiAgICAgICAgc2l6ZTogJCgnLmF0bW9zcGhlcmUnKS5zaXplKCksXG4gICAgICAgIGJhY2tncm91bmQ6ICQoJy5hdG1vc3BoZXJlJykuc3R5bGUoJ2JhY2tncm91bmQtc2l6ZScpLnNwbGl0KCcgJyksXG4gICAgICAgIHBvc2l0aW9uOiAkKCcuYXRtb3NwaGVyZScpLnN0eWxlKCdiYWNrZ3JvdW5kLXBvc2l0aW9uJykuc3BsaXQoJyAnKVxuICAgIH07XG5cbiAgICBhdG1vc3BoZXJlLndpZHRoID0gYXRtb3NwaGVyZS5zaXplLndpZHRoICogKHBhcnNlSW50KGF0bW9zcGhlcmUuYmFja2dyb3VuZFswXSkgLyAxMDApO1xuICAgIGF0bW9zcGhlcmUuaGVpZ2h0ID0gYXRtb3NwaGVyZS5zaXplLmhlaWdodCAqIChwYXJzZUludChhdG1vc3BoZXJlLmJhY2tncm91bmRbMV0pIC8gMTAwKSAtIDU7XG4gICAgXG4gICAgJCgnLnBhdGgsIC5jbG91ZCcpLnN0eWxlKHtoZWlnaHQ6IGF0bW9zcGhlcmUuaGVpZ2h0ICsgJ3B4Jywgd2lkdGg6IGF0bW9zcGhlcmUud2lkdGggKyAncHgnfSk7XG5cbiAgICAvLyBTY2FsZSBjbG91ZHMgYmFzZWQgb24gYXRtb3NwaGVyZSBzaXplXG4gICAgJCgnLmNsb3VkIGltYWdlJykuZWFjaChmdW5jdGlvbigpXG4gICAge1xuICAgICAgICB2YXIgY2xvdWQgPVxuICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aC5iYXNlVmFsLnZhbHVlLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodC5iYXNlVmFsLnZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBpZigkKHRoaXMpLmRhdGEoJ3dpZHRoJykgJiYgJCh0aGlzKS5kYXRhKCdoZWlnaHQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2xvdWQud2lkdGggPSAkKHRoaXMpLmRhdGEoJ3dpZHRoJyk7XG4gICAgICAgICAgICBjbG91ZC5oZWlnaHQgPSAkKHRoaXMpLmRhdGEoJ2hlaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCd3aWR0aCcsIGNsb3VkLndpZHRoKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSgnaGVpZ2h0JywgY2xvdWQuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaWZmZXJlbmNlID0gTWF0aC5taW4oMC43NSwgKCQoJ2JvZHknKS5oZWlnaHQoKSAvICQod2luZG93KS5oZWlnaHQoKSkgLyA0KTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoJ3dpZHRoJywgY2xvdWQud2lkdGggKiBkaWZmZXJlbmNlKTtcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdoZWlnaHQnLCBjbG91ZC5oZWlnaHQgKiBkaWZmZXJlbmNlKTtcbiAgICB9KTtcbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgIHJlc2l6ZSgpO1xuICAgICAgICBcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZSBsb2FkJywgZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgcmVzaXplKCk7XG4gICAgfSk7XG59KTtcbiIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICAkKCcuaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgaWYoJCgnLnNpZGViYXInKS5oYXNDbGFzcygnb3BlbicpKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKCcuc2lkZWJhcicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAkKCcuc2lkZWJhcicpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiZnVuY3Rpb24gcmVzaXplKClcbntcbiAgICB2YXIgaGVhZGVyID0gJCgnbmF2LmhlYWRlcicpLmhlaWdodCgnb3V0ZXInKTtcbiAgICB2YXIgY29udGVudCA9ICQoJ3NlY3Rpb24uY29udGVudCcpLmhlaWdodCgpO1xuICAgICQoJ2JvZHksIC5zdGFycycpLnN0eWxlKHtoZWlnaHQ6IGhlYWRlciArIGNvbnRlbnQgKyAncHgnfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZSBsb2FkJywgZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgcmVzaXplKCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGV2ZW50KVxuICAgIHtcbiAgICAgICAgdmFyIHNjcm9sbCA9ICQodGhpcykuc2Nyb2xsKCk7XG4gICAgICAgICQoJy5ib2R5JykuZWxbMF0uc2Nyb2xsVG9wID0gc2Nyb2xsLnRvcDtcbiAgICB9KTtcbn0pO1xuIiwicmVxdWlyZSgnLi9ldmVudHMvaGFtYnVyZ2VyJyk7XG5yZXF1aXJlKCcuL2V2ZW50cy9oZWFkZXInKTtcbnJlcXVpcmUoJy4vZXZlbnRzL2Nsb3VkcycpO1xuIl19
