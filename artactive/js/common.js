$(function(){
  
  // Mobile Menu
  
   var mainNav = $('.main-nav');

    $('.mobile-menu-btn').on('click', function(){
        mainNav.animate({
            left: '0px'
        }, 700);
    });

    $('.close-menu-btn').on('click', function(){
        mainNav.animate({
            left: '-200px'
        }, 700);
    });

// Services Slider

$('.services-slider').slick({
    nextArrow: '<span class="services-slider-prev">&larr;</span>',
    prevArrow: '<span class="services-slider-next">&rarr;</span>',
    arrows: true
});

// Reviews Slider

$('.reviews-slider').slick({
    nextArrow: '<span class="reviews-slider-prev">&larr;</span>',
    prevArrow: '<span class="reviews-slider-next">&rarr;</span>',
    arrows: true
});


// Scroll Nav

$('.main-nav a').on('click', function(e){
    e.preventDefault();
    var elem = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(elem).offset().top
    }, 700);
});

// Modal Form

var overlay = $('.overlay');
var modal = $('.modal');
var modalFormInput = $('.modal-form input:first-child');

$('.phone-btn').on('click', function(e){
    e.preventDefault();
   overlay.fadeIn(700);
   modalFormInput.focus();

   setTimeout(function(){
       modal.animate({
           top: '30px'
       }, 700);
   }, 700);
});

$('.modal-close-btn').on('click', function(){
    closeModal();
});

overlay.on('click', function(e){
    if (e.target == this) {
        closeModal();
    }
});

$(document).on('keydown', function(e){
    if (e.keyCode === 27) {
        closeModal();
  }
}); 

function closeModal() {
    modal.animate({
        top: '-100%'
    }, 700);     
    setTimeout(function(){
        overlay.fadeOut(700);
    }, 700);
}

// clear form inputs

$('input').on('focus', function(){
    $(this).val('');
});


}); // end ready func.