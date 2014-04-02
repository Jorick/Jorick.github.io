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
    });
});*/