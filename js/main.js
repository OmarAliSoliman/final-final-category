$(function(){
      //Adjust Floating point
  $(window).scroll(function(){
    if($(this).scrollTop() > 100)
    {
        $(".floting").fadeIn();
    }
    else
    {
        $(".floting").fadeOut();
    }
});

$(".floting").click(function(){
    $("body, html").animate({
        scrollTop: 0
    }, 1000);
});
});