$(document).ready(function () {  
    $("body").on('click', '.service-menu-link', function () {
        $(this).addClass("active");
        $(this).parent().siblings().find("a.active").removeClass("active");
    });
});