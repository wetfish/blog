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
    $(document).on('mousemove',function()
    {
        console.log('you moved your mouse');

        setTimeout(function()
        {   
            $('i.hamburger').addClass('hide');
            $('img.hamburger').removeClass('hide');    
        },30000);
        $('img.hamburger').addClass('hide');
        $('i.hamburger').removeClass('hide');
    });
});

