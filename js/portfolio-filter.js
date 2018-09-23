$(document).ready(function () {
    $(".portfolio-menu-link").on('click', function (event) {
        event.preventDefault();
        $(this).addClass("active");
        $(this).parent().siblings().find("a.active").removeClass('active');
        
        let category = $(this).attr("data-info");
        
        $(".portfolio .portfolio-item:not(." + category + ")").addClass("hidden");
        $(".portfolio ." + category).each(function (index) {
            if (index === 12) {
                return false;
            }
            //console.log(index);
            $(this).removeClass('hidden');
        });
    });

    $("#portfolio-btn").on('click', function (event) {
        $(".load-wrapp").animate({
            display: 'block'
        }, 3000); //анимация загрузки для кнопки
        //let category = $(".porfolio-menu").find("a.active").attr("data-info");

        let categoryName = $(".portfolio-menu").find("a.active").attr("data-info");
        let category = null;
        if (categoryName == "all") {
            category = $(".portfolio .hidden");
        } else {
            category = $(".portfolio ." + categoryName + ".hidden");
        }
        console.log(categoryName);
        //console.log(category);
        category.each(function (index) {
            if (index === 12) {
                return false;
            }
            //console.log(index);
            $(this).removeClass('hidden');
        });
    });
    //show and hiden btn
    $("#portfolio-btn").on('click', function (event) {
        $(this).hide();
    });
    $('body').on('click', function (event) {
        let id = $(event.target).attr('id');
        if (id !== 'portfolio-btn') {
            $('#portfolio-btn').show().css("display", "block");
        }
    });
    /*$("#portfolio-btn").on('click', function () {
    });*/
});
