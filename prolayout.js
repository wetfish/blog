/**
 * Beware!
 * This code is messy and terrible!
 * I'll make a better version some day~
 */

var cloudHeight;
var windowWidth = ($(window).width() > 1200) ? $(window).width() : 1200;



var sky = {};

$(document).ready(function()
{
    do_stuff();
});

$('body').resize(function()
{
    do_stuff();
});

$(window).on('load', function()
{
    do_stuff();
});

function do_stuff()
{
    var atmosphere = $('#background').attr('altitude');
    $('body').css({'min-height': $(window).height() - 128});

    $('#sky').children().each(function()
    {	
        var ratio = (atmosphere - $(this).attr('altitude')) * ($('body').height() / atmosphere);
        var width = ($(this).attr('altitude') * windowWidth) / atmosphere + (windowWidth / 2);
        var adjustedWidth = windowWidth + width;
                
        $(this).css({'top': ratio,
                     'width': adjustedWidth,
                     'height': $('body').height() + 4000,
                     'border-radius': adjustedWidth,
                     'left': -(adjustedWidth / 3)});
    });
    
    var exosphere = $('#exosphere').offset();
    var thermosphere = $('#thermosphere').offset();
    var mesosphere = $('#mesosphere').offset();
    var troposphere = $('#troposphere').offset();
    var surface = $('#surface').offset();
    var core = $('#core').offset();
    
    cloudHeight = (troposphere.top - mesosphere.top);
    
    
    $('.star').each(function()
    {
        $(this).css({'top': -100 + (Math.ceil(Math.random() * thermosphere.top * 1.5)), 
                     'left': Math.ceil(Math.random() * windowWidth),
                     'rotate': Math.round(Math.ceil(Math.random() * 360) / 45) * 45 + 'deg'});
                     
        $(this).find('img').css({'height': Math.ceil(Math.random() * 45) + 5});
    });

    sky.offset = $('#stratosphere').offset();

    sky.center = {'top':		sky.offset.top + ($('#sky').height() / 2),
                  'left':	sky.offset.left + ($('#sky').width() / 2)};
                  

    $('#clouds').css({'top': sky.offset.top, 'left': -1900, 'width': $('#thermosphere').width() + 1500, 'height': $('#thermosphere').width() + 1500});

    $(window).load(function()
    {        
        $('.cloud').each(function()
        {
            var cloudModifier = 1;
        
            $(this).find('img').each(function()
            {
                if(cloudHeight / 3 > $(this).height() * 3) {
                    $(this).height($(this).height() * 2);
                    cloudModifier = 1.7;
                }
                else
                {				
                    if(cloudHeight / 2 < $(this).height())
                        $(this).height($(this).height() / 2);
                    else if(cloudHeight / 3 < $(this).height())
                        $(this).height($(this).height() / 3);
                }
            });
        
            var cloud = {};
            var phi = (1 + Math.sqrt(5)) / 2;
            var rotation = (360 / $(this).parent().children().length) * $(this).index();
            var jitter = Math.random() < 0.5 ? -1 : 1;	

            var center = ($('#clouds').width() / 2);
            var radius = ($('#clouds').width() / 2);


            cloud.offset = {	'bottom': center + (radius + (Math.ceil(Math.random() * $(this).find('img').height()) * cloudModifier * jitter)) * Math.cos(rotation * Math.PI / 180) - ($(this).height() / 2),
                            'left': center + (radius + (Math.ceil(Math.random() * $(this).find('img').height()) * cloudModifier * jitter)) * Math.sin(rotation * Math.PI / 180) - ($(this).width() / 2)};
                        
            $(this).css({'top': 'auto', 'bottom': cloud.offset.bottom, 'left': cloud.offset.left});
            $(this).css({'rotate': rotation+'deg'});
        });

    });
}
