$(document).ready(function(){
    $( "#navbutton" ).click(function() {
        $( "#nav" ).slideToggle( "slow", function() {
            // Animation complete.
        });
    });
/*    $( "#nav" ).click(function() {
        $( "#nav" ).slideUp( "slow", function() {
            // Animation complete.
        });
    });*/
});
$(document).ready(function() {
    var stickyNavTop = $('.navigation').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
     
        if (scrollTop > stickyNavTop) { 
            $('.navigation').addClass('sticky');
        } 
        else {
            $('.navigation').removeClass('sticky'); 
        }
    };

    stickyNav();

    $(window).scroll(function() {
	   stickyNav();
    });
});