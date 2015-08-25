(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        var mobileHeight = $('section.header').height('outer') + $('section.content').height('outer');
        var desktopHeight = $('body').height('outer');
        var height = Math.max(mobileHeight, desktopHeight);

console.log(mobileHeight, desktopHeight);
        
        $('.stars, .atmosphere, .clouds').style({'height': height + 'px'});

        clouds();
    });
    
    $('section.body').on('scroll touchmove', function(event)
    {
        var scroll = $('section.body').scroll();
        $('.background').el[0].scrollTop = scroll.top;
    });

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

},{"./events/background":1,"./events/hamburger":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2JhY2tncm91bmQuanMiLCJzdGF0aWMvanMvZXZlbnRzL2hhbWJ1cmdlci5qcyIsInN0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIGNsb3VkcygpXG57XG4gICAgJCgnLnBhdGgsIC5jbG91ZCcpLnN0eWxlKHtkaXNwbGF5OiAnYmxvY2snfSk7XG5cbiAgICAvLyBQYXVzZSBjbG91ZCBhbmltYXRpb25zIG9uIG1vYmlsZVxuICAgIGlmKCQoJy5pcy1tb2JpbGUnKS5zdHlsZSgnZGlzcGxheScpID09ICdibG9jaycpXG4gICAge1xuICAgICAgICAkKCdzdmcnKS5lYWNoKGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wYXVzZUFuaW1hdGlvbnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgICQoJ3N2ZycpLmVhY2goZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVucGF1c2VBbmltYXRpb25zKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERldGVybWluZSBhdG1vc3BoZXJlIGRpbWVuc2lvbnNcbiAgICB2YXIgYXRtb3NwaGVyZSA9XG4gICAge1xuICAgICAgICBzaXplOiAkKCcuYXRtb3NwaGVyZScpLnNpemUoKSxcbiAgICAgICAgYmFja2dyb3VuZDogJCgnLmF0bW9zcGhlcmUnKS5zdHlsZSgnYmFja2dyb3VuZC1zaXplJykuc3BsaXQoJyAnKSxcbiAgICAgICAgcG9zaXRpb246ICQoJy5hdG1vc3BoZXJlJykuc3R5bGUoJ2JhY2tncm91bmQtcG9zaXRpb24nKS5zcGxpdCgnICcpXG4gICAgfTtcblxuICAgIGF0bW9zcGhlcmUud2lkdGggPSBhdG1vc3BoZXJlLnNpemUud2lkdGggKiAocGFyc2VJbnQoYXRtb3NwaGVyZS5iYWNrZ3JvdW5kWzBdKSAvIDEwMCk7XG4gICAgYXRtb3NwaGVyZS5oZWlnaHQgPSBhdG1vc3BoZXJlLnNpemUuaGVpZ2h0ICogKHBhcnNlSW50KGF0bW9zcGhlcmUuYmFja2dyb3VuZFsxXSkgLyAxMDApO1xuICAgIFxuICAgICQoJy5wYXRoLCAuY2xvdWQnKS5zdHlsZSh7aGVpZ2h0OiBhdG1vc3BoZXJlLmhlaWdodCArICdweCcsIHdpZHRoOiBhdG1vc3BoZXJlLndpZHRoICsgJ3B4J30pO1xuXG4gICAgLy8gU2NhbGUgY2xvdWRzIGJhc2VkIG9uIGF0bW9zcGhlcmUgc2l6ZVxuICAgICQoJy5jbG91ZCBpbWFnZScpLmVhY2goZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgdmFyIGNsb3VkID1cbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGguYmFzZVZhbC52YWx1ZSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQuYmFzZVZhbC52YWx1ZVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgaWYoJCh0aGlzKS5kYXRhKCd3aWR0aCcpICYmICQodGhpcykuZGF0YSgnaGVpZ2h0JykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsb3VkLndpZHRoID0gJCh0aGlzKS5kYXRhKCd3aWR0aCcpO1xuICAgICAgICAgICAgY2xvdWQuaGVpZ2h0ID0gJCh0aGlzKS5kYXRhKCdoZWlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSgnd2lkdGgnLCBjbG91ZC53aWR0aCk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ2hlaWdodCcsIGNsb3VkLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IE1hdGgubWluKDAuNzUsICgkKCcuYXRtb3NwaGVyZScpLmhlaWdodCgpIC8gJCh3aW5kb3cpLmhlaWdodCgpKSAvIDQpO1xuXG4gICAgICAgICQodGhpcykuYXR0cignd2lkdGgnLCBjbG91ZC53aWR0aCAqIGRpZmZlcmVuY2UpO1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ2hlaWdodCcsIGNsb3VkLmhlaWdodCAqIGRpZmZlcmVuY2UpO1xuICAgIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUgbG9hZCcsIGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHZhciBtb2JpbGVIZWlnaHQgPSAkKCdzZWN0aW9uLmhlYWRlcicpLmhlaWdodCgnb3V0ZXInKSArICQoJ3NlY3Rpb24uY29udGVudCcpLmhlaWdodCgnb3V0ZXInKTtcbiAgICAgICAgdmFyIGRlc2t0b3BIZWlnaHQgPSAkKCdib2R5JykuaGVpZ2h0KCdvdXRlcicpO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5tYXgobW9iaWxlSGVpZ2h0LCBkZXNrdG9wSGVpZ2h0KTtcblxuY29uc29sZS5sb2cobW9iaWxlSGVpZ2h0LCBkZXNrdG9wSGVpZ2h0KTtcbiAgICAgICAgXG4gICAgICAgICQoJy5zdGFycywgLmF0bW9zcGhlcmUsIC5jbG91ZHMnKS5zdHlsZSh7J2hlaWdodCc6IGhlaWdodCArICdweCd9KTtcblxuICAgICAgICBjbG91ZHMoKTtcbiAgICB9KTtcbiAgICBcbiAgICAkKCdzZWN0aW9uLmJvZHknKS5vbignc2Nyb2xsIHRvdWNobW92ZScsIGZ1bmN0aW9uKGV2ZW50KVxuICAgIHtcbiAgICAgICAgdmFyIHNjcm9sbCA9ICQoJ3NlY3Rpb24uYm9keScpLnNjcm9sbCgpO1xuICAgICAgICAkKCcuYmFja2dyb3VuZCcpLmVsWzBdLnNjcm9sbFRvcCA9IHNjcm9sbC50b3A7XG4gICAgfSk7XG5cbiAgICBjbG91ZHMoKTtcbn0pO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBpZigkKCcuc2lkZWJhcicpLmhhc0NsYXNzKCdvcGVuJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJyZXF1aXJlKCcuL2V2ZW50cy9iYWNrZ3JvdW5kJyk7XG5yZXF1aXJlKCcuL2V2ZW50cy9oYW1idXJnZXInKTtcbiJdfQ==
