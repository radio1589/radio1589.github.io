$(function () {


    // Main Banner

    let bannerSlider = new Swiper('.banner-slider', {
        slidesPerView: 1,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        breakpoints: {
            920: {
                slidesPerView: 1,
                navigation: false
            }
        }
    });

    // Search tabs

    $('.search-tabs__wrapper').each(function () {
        let ths = $(this);
        ths.find('.search-tabs__content-item').not(':first').hide();
        ths.find('.search-tabs__item').click(function () {
            ths.find('.search-tabs__item').removeClass('search-tabs__active').eq($(this).index())
                .addClass('search-tabs__active');
            ths.find('.search-tabs__content-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('search-tabs__active');
    });

    // add to favorits

    $('.product-card__heart').on('click', function (e) {
        e.preventDefault();
        $($(this).children()).toggleClass('heart-svg');
    });


    // product slider

    let productSlider = new Swiper('.product-slider', {
        slidesPerView: 1,

        navigation: {
            nextEl: '.product-slider__btn-right',
            prevEl: '.product-slider__btn-left',
        },

        breakpoints: {
            920: {
                slidesPerView: 4
            },

            720: {
                slidesPerView: 3
            },

            520: {
                slidesPerView: 2
            }
        }
    });


    // Product Slider Tabs

    $('.product-slider-tabs').each(function () {
        let ths = $(this);
        ths.find('.tab-item').not(':first').hide();
        ths.find('.tab').click(function () {
            ths.find('.tab').removeClass('product-slider-active-tab').eq($(this).index())
                .addClass('product-slider-active-tab');
            ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('product-slider-active-tab');
    });

    const slider = productSlider;
    const wrapper = productSlider.wrapperEl;

    /* [].forEach.call(slider.slides, function (slide) {
        slide.style.height = "";
    });

    setTimeout(() => {
        [].forEach.call(slider.slides, function (slide) {
            slide.style.height = wrapper.clientHeight + "px";
        });
    }, 300); */

    // grid/line btns

    let gridBtn = $('.grid-btn');
    let lineBtn = $('.line-btn');

    gridBtn.on('click', function (e) {
        if (lineBtn.hasClass('opacity-1')) {
            lineBtn.removeClass('opacity-1');
        }

        if (!$(this).hasClass('opacity-1')) {
            $(this).addClass('opacity-1');
        }
    });

    lineBtn.on('click', function (e) {
        if (gridBtn.hasClass('opacity-1')) {
            gridBtn.removeClass('opacity-1');
        }

        if (!$(this).hasClass('opacity-1')) {
            $(this).addClass('opacity-1');
        }
    });

    // Tabs filter
    $('.tabs-filter').each(function () {
        let ths = $(this);
        ths.find('.tab-item').not(':first').hide();
        ths.find('.tab').click(function () {
            ths.find('.tab').removeClass('tabs-filter__active').eq($(this).index())
                .addClass('tabs-filter__active');
            ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('tabs-filter__active');
    });

    // form styler

    $('.catalog-filters__top-select').styler();
    $('.filter-styler').styler();

    // Price range

    var $range = $(".price-range");

    $range.ionRangeSlider({
        min: 50000,
        max: 500000,
        from: 50000,
        skin: 'round',
        type: 'double',
        hide_from_to: true

    });

// open/close filter item

$('.filter-form__list-item__caption').on('click', function(){
    
    if($(this).hasClass('filter-opened')) {
        $(this).removeClass('filter-opened');
        $(this).addClass('filter-closed');

        $(this).parent().children().not($(this)).slideUp();

    } else if($(this).hasClass('filter-closed')) {
        $(this).removeClass('filter-closed');
        $(this).addClass('filter-opened');

        $(this).parent().children().not($(this)).slideDown();
    }
});

// Star rating

$("#rateYo").rateYo({
    starWidth: '25px',
    ratedFill: '#1C62CD',
    normalFill: '#C4C4C4'
  });


// Single cart tabs

$('.single-cart-tabs').each(function () {
    let ths = $(this);
    ths.find('.tab-item').not(':first').hide();
    ths.find('.tab').click(function () {
        ths.find('.tab').removeClass('tabs-filter__active').eq($(this).index())
            .addClass('tabs-filter__active');
        ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('tabs-filter__active');
});

// Buy options tabs

$('.buy-options__tabs').each(function () {
    let ths = $(this);
    ths.find('.tab-item').not(':first').hide();
    ths.find('.tab').click(function () {
        ths.find('.tab').removeClass('tabs-filter__active').eq($(this).index())
            .addClass('tabs-filter__active');
        ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('tabs-filter__active');
});

// Main Nav Scrollbar

function owlInitialize() {
    if ($(window).width() < 480) {
       $('.main-nav__swipe').owlCarousel({
           nav: false,
           dots: false,
           loop: true,
       });
    }else{
       $('.main-nav__swipe').owlCarousel('destroy');
    }

 }
 
 $(document).ready(function(e) {
    owlInitialize();
 });
 
 $(window).resize(function() {
    owlInitialize();
 });

 // Mobile Menu

 let mobileMenu = $('.mobile-menu');
 let overlay = $('<div class="overlay"></div>');

 $('.mobile-menu__btn').on('click', function(e){
    e.preventDefault();
    
    $('body').append(overlay);
    overlay.show();
    overlay.animate({
        opacity: '.7'
    }, 400, function(){
        mobileMenu.animate({
            left: '0px'
        }, 500);
    });
 });

 $('.mobile-menu__btn--close').on('click', function(e){
    e.preventDefault();

    mobileMenu.animate({
        left: '-2000px'
    }, 500, function(){
        overlay.animate({
            opacity: 0
        }, 400, function(){
            overlay.remove();
        });
    });
 });

 // Show/Hide filters

 $('.show-filters-btn').on('click', function(e){
    e.preventDefault();

    $('.aside-filters').slideToggle(500);
 });

 // Stacktable

 $('.buy-options__table').cardtable();

}); // end ready func