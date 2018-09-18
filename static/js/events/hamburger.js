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

    var dtime; // to keep track of setTimeouts.

    $(document).on('mousemove',function()
    {   
        clearTimeout(dtime);
            
        time=setTimeout(function()
        { 
            //i.hamburger is the fa-bar icon  
            $('i.hamburger').addClass('hide');
            $('img.hamburger').removeClass('hide'); 
        },30000);

        $('img.hamburger').addClass('hide');
        $('i.hamburger').removeClass('hide');
    });

    var mtime;
    //for mobile users
    document.addEventListener('touchstart', function onFirstTouch(){
        
        clearTimeout(mtime);
        document.USER_IS_TOUCHING = true;

        mtime=setTimeout(function(){
            $('i.hamburger').addClass('hide');
            $('img.hamburger').removeClass('hide'); 
        },30000);

        $('img.hamburger').addClass('hide');
        $('i.hamburger').removeClass('hide');
    });
});

