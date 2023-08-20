$(document).ready(function(){

    $("#submitButton").hover(
        function() {
          $("#submitButton").css('background-color', 'rgb(0, 191, 51)');
        },
        function() {
            $("#submitButton").css('background-color', 'green');
        }
    );

});