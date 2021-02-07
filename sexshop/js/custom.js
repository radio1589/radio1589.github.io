$(function(){
    
    let mobileMenu = $('.mobile-menu');
    let mobileMenuBtn = $('.show-menu__btn');
    let menuIsShow = false;

    mobileMenuBtn.on('click', function(e){

        if(!menuIsShow) {
            mobileMenu.animate({
                left: '0px'
            }, 500);

            menuIsShow = true;
        } else {
            mobileMenu.animate({
                left: '-2000px'
            }, 500);

          menuIsShow = false;  
        }
        
    });

    // New slider

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,

        slidesPerView: 1,
        spaceBetween: 30,
        autoHeight: true,
      
        // If we need pagination
        pagination: {
          el: '.new-slider__pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.new-slider__btn--next',
          prevEl: '.new-slider__btn--prev',
        },

        breakpoints: {
          1100: {
            slidesPerView: 4
          },

          700: {
            slidesPerView: 3
          },

          500: {
            slidesPerView: 2
          },

          400: {
            slidesPerView: 1
          }
        }
      
 
      }); // end new slider

      // the same height for swiper slider slides

      const slider = swiper;
      const wrapper = swiper.wrapperEl;

    [].forEach.call(slider.slides, function(slide) {
      slide.style.height = "";
    });

    setTimeout(() => {
        [].forEach.call(slider.slides, function(slide) {
          slide.style.height = wrapper.clientHeight + "px";
        });
    }, 300);

});