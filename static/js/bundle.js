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
require('./events/background');
require('./events/hamburger');

},{"./events/background":1,"./events/hamburger":2}]},{},[3]);
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2JhY2tncm91bmQuanMiLCJzdGF0aWMvanMvZXZlbnRzL2hhbWJ1cmdlci5qcyIsInN0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIHJlc2l6ZSgpXG57XG4gICAgdmFyIG1vYmlsZUhlaWdodCA9ICQoJ3NlY3Rpb24uaGVhZGVyJykuaGVpZ2h0KCdvdXRlcicpICsgJCgnc2VjdGlvbi5jb250ZW50JykuaGVpZ2h0KCdvdXRlcicpO1xuICAgIHZhciBkZXNrdG9wSGVpZ2h0ID0gJCgnYm9keScpLmhlaWdodCgnb3V0ZXInKTtcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgobW9iaWxlSGVpZ2h0LCBkZXNrdG9wSGVpZ2h0KTtcblxuICAgICQoJy5zdGFycywgLmF0bW9zcGhlcmUsIC5jbG91ZHMnKS5zdHlsZSh7J2hlaWdodCc6IGhlaWdodCArICdweCd9KTtcbn1cblxuZnVuY3Rpb24gY2xvdWRzKClcbntcbiAgICAkKCcucGF0aCwgLmNsb3VkJykuc3R5bGUoe2Rpc3BsYXk6ICdibG9jayd9KTtcblxuICAgIC8vIFBhdXNlIGNsb3VkIGFuaW1hdGlvbnMgb24gbW9iaWxlXG4gICAgaWYoJCgnLmlzLW1vYmlsZScpLnN0eWxlKCdkaXNwbGF5JykgPT0gJ2Jsb2NrJylcbiAgICB7XG4gICAgICAgICQoJ3N2ZycpLmVhY2goZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlQW5pbWF0aW9ucygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgJCgnc3ZnJykuZWFjaChmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudW5wYXVzZUFuaW1hdGlvbnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIGF0bW9zcGhlcmUgZGltZW5zaW9uc1xuICAgIHZhciBhdG1vc3BoZXJlID1cbiAgICB7XG4gICAgICAgIHNpemU6ICQoJy5hdG1vc3BoZXJlJykuc2l6ZSgpLFxuICAgICAgICBiYWNrZ3JvdW5kOiAkKCcuYXRtb3NwaGVyZScpLnN0eWxlKCdiYWNrZ3JvdW5kLXNpemUnKS5zcGxpdCgnICcpLFxuICAgICAgICBwb3NpdGlvbjogJCgnLmF0bW9zcGhlcmUnKS5zdHlsZSgnYmFja2dyb3VuZC1wb3NpdGlvbicpLnNwbGl0KCcgJylcbiAgICB9O1xuXG4gICAgYXRtb3NwaGVyZS53aWR0aCA9IGF0bW9zcGhlcmUuc2l6ZS53aWR0aCAqIChwYXJzZUludChhdG1vc3BoZXJlLmJhY2tncm91bmRbMF0pIC8gMTAwKTtcbiAgICBhdG1vc3BoZXJlLmhlaWdodCA9IGF0bW9zcGhlcmUuc2l6ZS5oZWlnaHQgKiAocGFyc2VJbnQoYXRtb3NwaGVyZS5iYWNrZ3JvdW5kWzFdKSAvIDEwMCk7XG4gICAgXG4gICAgJCgnLnBhdGgsIC5jbG91ZCcpLnN0eWxlKHtoZWlnaHQ6IGF0bW9zcGhlcmUuaGVpZ2h0ICsgJ3B4Jywgd2lkdGg6IGF0bW9zcGhlcmUud2lkdGggKyAncHgnfSk7XG5cbiAgICAvLyBTY2FsZSBjbG91ZHMgYmFzZWQgb24gYXRtb3NwaGVyZSBzaXplXG4gICAgJCgnLmNsb3VkIGltYWdlJykuZWFjaChmdW5jdGlvbigpXG4gICAge1xuICAgICAgICB2YXIgY2xvdWQgPVxuICAgICAgICB7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aC5iYXNlVmFsLnZhbHVlLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodC5iYXNlVmFsLnZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBpZigkKHRoaXMpLmRhdGEoJ3dpZHRoJykgJiYgJCh0aGlzKS5kYXRhKCdoZWlnaHQnKSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2xvdWQud2lkdGggPSAkKHRoaXMpLmRhdGEoJ3dpZHRoJyk7XG4gICAgICAgICAgICBjbG91ZC5oZWlnaHQgPSAkKHRoaXMpLmRhdGEoJ2hlaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCd3aWR0aCcsIGNsb3VkLndpZHRoKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSgnaGVpZ2h0JywgY2xvdWQuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaWZmZXJlbmNlID0gTWF0aC5taW4oMC43NSwgKCQoJy5hdG1vc3BoZXJlJykuaGVpZ2h0KCkgLyAkKHdpbmRvdykuaGVpZ2h0KCkpIC8gNCk7XG5cbiAgICAgICAgJCh0aGlzKS5hdHRyKCd3aWR0aCcsIGNsb3VkLndpZHRoICogZGlmZmVyZW5jZSk7XG4gICAgICAgICQodGhpcykuYXR0cignaGVpZ2h0JywgY2xvdWQuaGVpZ2h0ICogZGlmZmVyZW5jZSk7XG4gICAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZSBsb2FkJywgZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgcmVzaXplKCk7XG4gICAgICAgIGNsb3VkcygpO1xuICAgIH0pO1xuICAgIFxuICAgICQoJ3NlY3Rpb24uYm9keScpLm9uKCdzY3JvbGwgdG91Y2htb3ZlJywgZnVuY3Rpb24oZXZlbnQpXG4gICAge1xuICAgICAgICB2YXIgc2Nyb2xsID0gJCgnc2VjdGlvbi5ib2R5Jykuc2Nyb2xsKCk7XG4gICAgICAgICQoJy5iYWNrZ3JvdW5kJykuZWxbMF0uc2Nyb2xsVG9wID0gc2Nyb2xsLnRvcDtcbiAgICB9KTtcblxuICAgIHJlc2l6ZSgpO1xuICAgIGNsb3VkcygpO1xufSk7XG4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGlmKCQoJy5zaWRlYmFyJykuaGFzQ2xhc3MoJ29wZW4nKSlcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnNpZGViYXInKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsInJlcXVpcmUoJy4vZXZlbnRzL2JhY2tncm91bmQnKTtcbnJlcXVpcmUoJy4vZXZlbnRzL2hhbWJ1cmdlcicpO1xuIl19
