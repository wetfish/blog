$(document).ready(function()
{
    $('img.hamburger').addClass('hide');
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

    var burgerTime; // to keep track of setTimeouts.

    $(window).on('mousemove touchstart', function()
    {
        if(burgerTime)
        {
            clearTimeout(burgerTime);
        }

        burgerTime = setTimeout(function()
        {
            $('i.hamburger').addClass('hide');
            $('img.hamburger').removeClass('hide');
        }, 30000);

        $('img.hamburger').addClass('hide');
        $('i.hamburger').removeClass('hide');
    });
});
