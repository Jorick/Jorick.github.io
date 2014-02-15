$(document).ready(function(){
    $( "#navbutton" ).click(function() {
        $( "#nav" ).slideToggle( "slow", function() {
            // Animation complete.
        });
    });
});