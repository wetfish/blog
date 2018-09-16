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

    var time; // to keep track of setTimeouts.

    $(document).on('mousemove',function()
    {   
        clearTimeout(time);
            
        time=setTimeout(function()
        { 
            //i.hamburger is the fa-bar icon     
            $('i.hamburger').addClass('hide');
            $('img.hamburger').removeClass('hide'); 
        },30000);

        $('img.hamburger').addClass('hide');
        $('i.hamburger').removeClass('hide');
    });
});

