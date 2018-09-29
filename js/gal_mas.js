$(document).ready(function () {
    jQuery('.item-massonry').hover(
        function () {
            $(this).find('.cover-item-gallery').css('display', 'flex');
        },
        function () {
            $(this).find('.cover-item-gallery').css('display', 'none');
        }
    );

    let container = $('#gallery');
    container.imagesLoaded(function () {
        container.masonry({
            itemSelector: '.item-massonry',
            columnWidth: 7,
            gutter: 1,
            stagger: 30,
            fitWidth: true,
            singleMode: false
        });
    });

    container.on('click', '.item-massonry', function () {
        $(this).toggleClass('grid-item--gigante');
        container.masonry();
    });
    //show and hiden btn
    $("#gallery-btn").on('click', function (event) {
        $(this).hide();
    });
    $('body').on('click', function (event) {
        let id = $(event.target).attr('id');
        if (id !== 'gallery-btn') {
            $('#gallery-btn').show().css("display", "block");
        }
    });
    /* $(window).load(function(){
         setTimeout(function() {
             $('.load-wrapp').fadeOut('slow',function() {});
         }, 3000);
         });*/
    $("#gallery-btn").on('click', function () {
        $(".item-massonry.hidden").each(function () {
            $(this).removeClass('hidden');
            container.masonry();
        });
        if ($(".item-massonry.hidden").length == 0) {
            $("#gallery-btn").addClass('hidden');             
        }
    });
});
