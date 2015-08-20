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
    var height = $('section.content').height();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzdGF0aWMvanMvZXZlbnRzL2Nsb3Vkcy5qcyIsInN0YXRpYy9qcy9ldmVudHMvaGFtYnVyZ2VyLmpzIiwic3RhdGljL2pzL2V2ZW50cy9oZWFkZXIuanMiLCJzdGF0aWMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIHJlc2l6ZSgpXG57XG4gICAgLy8gRGV0ZXJtaW5lIGF0bW9zcGhlcmUgZGltZW5zaW9uc1xuICAgIHZhciBhdG1vc3BoZXJlID1cbiAgICB7XG4gICAgICAgIHNpemU6ICQoJy5hdG1vc3BoZXJlJykuc2l6ZSgpLFxuICAgICAgICBiYWNrZ3JvdW5kOiAkKCcuYXRtb3NwaGVyZScpLnN0eWxlKCdiYWNrZ3JvdW5kLXNpemUnKS5zcGxpdCgnICcpLFxuICAgICAgICBwb3NpdGlvbjogJCgnLmF0bW9zcGhlcmUnKS5zdHlsZSgnYmFja2dyb3VuZC1wb3NpdGlvbicpLnNwbGl0KCcgJylcbiAgICB9O1xuXG4gICAgYXRtb3NwaGVyZS53aWR0aCA9IGF0bW9zcGhlcmUuc2l6ZS53aWR0aCAqIChwYXJzZUludChhdG1vc3BoZXJlLmJhY2tncm91bmRbMF0pIC8gMTAwKTtcbiAgICBhdG1vc3BoZXJlLmhlaWdodCA9IGF0bW9zcGhlcmUuc2l6ZS5oZWlnaHQgKiAocGFyc2VJbnQoYXRtb3NwaGVyZS5iYWNrZ3JvdW5kWzFdKSAvIDEwMCkgLSA1O1xuICAgIFxuICAgICQoJy5wYXRoLCAuY2xvdWQnKS5zdHlsZSh7aGVpZ2h0OiBhdG1vc3BoZXJlLmhlaWdodCArICdweCcsIHdpZHRoOiBhdG1vc3BoZXJlLndpZHRoICsgJ3B4J30pO1xuXG4gICAgLy8gU2NhbGUgY2xvdWRzIGJhc2VkIG9uIGF0bW9zcGhlcmUgc2l6ZVxuICAgICQoJy5jbG91ZCBpbWFnZScpLmVhY2goZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgdmFyIGNsb3VkID1cbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGguYmFzZVZhbC52YWx1ZSxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQuYmFzZVZhbC52YWx1ZVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgaWYoJCh0aGlzKS5kYXRhKCd3aWR0aCcpICYmICQodGhpcykuZGF0YSgnaGVpZ2h0JykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsb3VkLndpZHRoID0gJCh0aGlzKS5kYXRhKCd3aWR0aCcpO1xuICAgICAgICAgICAgY2xvdWQuaGVpZ2h0ID0gJCh0aGlzKS5kYXRhKCdoZWlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgICQodGhpcykuZGF0YSgnd2lkdGgnLCBjbG91ZC53aWR0aCk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ2hlaWdodCcsIGNsb3VkLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IE1hdGgubWluKDAuNzUsICgkKCdib2R5JykuaGVpZ2h0KCkgLyAkKHdpbmRvdykuaGVpZ2h0KCkpIC8gNCk7XG5cbiAgICAgICAgJCh0aGlzKS5hdHRyKCd3aWR0aCcsIGNsb3VkLndpZHRoICogZGlmZmVyZW5jZSk7XG4gICAgICAgICQodGhpcykuYXR0cignaGVpZ2h0JywgY2xvdWQuaGVpZ2h0ICogZGlmZmVyZW5jZSk7XG4gICAgfSk7XG5cbiAgICAvLyBQYXVzZSBjbG91ZCBhbmltYXRpb25zIG9uIG1vYmlsZVxuICAgIGlmKCQoJy5pcy1tb2JpbGUnKS5zdHlsZSgnZGlzcGxheScpID09ICdibG9jaycpXG4gICAge1xuICAgICAgICAkKCdzdmcnKS5lYWNoKGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5wYXVzZUFuaW1hdGlvbnMoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgICQoJ3N2ZycpLmVhY2goZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnVucGF1c2VBbmltYXRpb25zKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQoJy5wYXRoLCAuY2xvdWQnKS5zdHlsZSh7ZGlzcGxheTogJ2Jsb2NrJ30pO1xuICAgIHJlc2l6ZSgpO1xuICAgIFxuICAgICQod2luZG93KS5vbigncmVzaXplIGxvYWQnLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICByZXNpemUoKTtcbiAgICB9KTtcbn0pO1xuIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBpZigkKCcuc2lkZWJhcicpLmhhc0NsYXNzKCdvcGVuJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyJykuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJmdW5jdGlvbiByZXNpemUoKVxue1xuICAgIHZhciBoZWlnaHQgPSAkKCdzZWN0aW9uLmNvbnRlbnQnKS5oZWlnaHQoKTtcbiAgICAkKCdib2R5LCAuc3RhcnMnKS5zdHlsZSh7aGVpZ2h0OiBoZWlnaHQgKyAncHgnfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZSBsb2FkJywgZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgcmVzaXplKCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGV2ZW50KVxuICAgIHtcbiAgICAgICAgdmFyIHNjcm9sbCA9ICQodGhpcykuc2Nyb2xsKCk7XG4gICAgICAgICQoJy5ib2R5JykuZWxbMF0uc2Nyb2xsVG9wID0gc2Nyb2xsLnRvcDtcbiAgICB9KTtcbn0pO1xuIiwicmVxdWlyZSgnLi9ldmVudHMvaGFtYnVyZ2VyJyk7XG5yZXF1aXJlKCcuL2V2ZW50cy9oZWFkZXInKTtcbnJlcXVpcmUoJy4vZXZlbnRzL2Nsb3VkcycpO1xuIl19
