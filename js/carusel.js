$(document).ready(function () {
    $('.top-carusel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.carusel-hider'
    });
    $('.carusel-hider').slick({
       
        asNavFor: '.top-carusel',
       focusOnSelect: true,
        centerMode: false,
        slidesToShow: 3
    });
});

/* 
 slidesToShow: 4,
 slidesToScroll: 1,
        
        dots: true,
        
        focusOnSelect: true
  
      $('.top-carusel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: 'ease-in',
        asNavFor: '.carusel-hider'
    });


    $('.carusel-hider').slick({
        asNavFor: '.top-carusel',
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '40px',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
}
    ]

    });
});*/
