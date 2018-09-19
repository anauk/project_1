$(document).ready(function () {  
    $("body").on('click', '.navbar-menu-link', function () {
        $(this).addClass("active");
        $(this).parent().siblings().find("a.active").removeClass('active');
    });
});