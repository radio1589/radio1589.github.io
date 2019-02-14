$(function(){

    new WOW().init();

    var mainNav = $('.main-nav');

    $('.main-nav-btn').on('click', function(){
        mainNav.slideDown(1000);
    });

    $('.close-nav-btn').on('click', function(){
        mainNav.slideUp(1000);
    });

    $('.reviews-slider').slick({
        dots: true,
        arrows: true,
    });

    // Overlay 

    $('.booking-btn').on('click', function(e){
        e.preventDefault();
        $('.overlay').fadeIn(1000);
    });

    $('.close-modal-btn').on('click', function(e){
        e.preventDefault();
        $('.overlay').fadeOut(1000);
    });
});