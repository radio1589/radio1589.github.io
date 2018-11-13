$(function(){

    // Navigation
    $('.sub-menu-link').on('click', function(e){
        e.preventDefault();
        $('.sub-menu').slideToggle(500);
    });

    $('.mobile-menu-btn').on('click', function(){
        $('.main-nav').animate({
            left: '0px'
        }, 700);
    });

    $('.close-menu-btn').on('click', function(){
        $('.main-nav').animate({
            left: '-1000px'
        }, 700);
    });

    // Main Slider

    $('.main-slider').slick({
        dots: true,
    });

    // Sets Slider
    $('.sets-slider').slick({
        dots: true,
        infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

}); // end ready func.


