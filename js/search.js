$(document).ready(function () {
    $('.navbar-search').click(function(event){
        event.preventDefault();
        $('.popup-search').css("display", "block");
    });
});