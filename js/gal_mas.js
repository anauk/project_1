$(document).ready(function () {
    jQuery('.item-massonry').hover(
        function () {
            $(this).find('.cover-item-gallery').fadeIn();
        },
        function () {
            $(this).find('.cover-item-gallery').fadeOut();
        }
    );

    let container = $('#gallery');
    container.imagesLoaded(function () {
       container.masonry({
           itemSelector: '.item-massonry',
           columnWidth: 63,
           gutter: 1,
           fitWidth: true,
           horizontalOrder: true
       });
    });
  /*  container.masonry({
           itemSelector: '.item-massonry',
           columnWidth: 63,
           gutter: 1,
           fitWidth: true,
           horizontalOrder: true
       });*/

    container.on('click', '.item-massonry', function () {
        $(this).toggleClass('grid-item--gigante');
        container.masonry();
    });
   
    $('#gallery-btn').on('click', function () {
        $('.item-massonry.hidden').css("display", "block");
        });
    
     $("#gallery-btn").on('dblclick', function (event) {
        $(this).hide();
    });
    $('body').on('click', function (event) {
            let id = $(event.target).attr('id');
            if (id !== '#gallery-btn') {
                $('#gallery-btn').show().css("display", "block");
            }
            });
    $(window).load(function(){
        setTimeout(function() {
            $('.load-wrapp').fadeOut('slow',function() {});
        }, 3000);
        });
    
});
