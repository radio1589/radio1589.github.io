$(function(){

    // wow js
    new WOW().init();

    // Jumbotron slider
    let jBtnPrev = $('.jumbotron-slider__btn--prev');
    let jBtnNext = $('.jumbotron-slider__btn--next');
    let jSlides  = $('.jumbotron-slide');
    let jSlideIndex = 0;

    jBtnNext.on('click', function(e){
        e.preventDefault();

        jSlides.eq(jSlideIndex).removeClass('jumbotron-slide--active');
        jSlideIndex++;

        if (jSlideIndex > jSlides.length -1) {
            jSlideIndex = 0;
        }

        jSlides.eq(jSlideIndex).addClass('jumbotron-slide--active');
    });

    jBtnPrev.on('click', function(e){
        e.preventDefault();

        jSlides.eq(jSlideIndex).removeClass('jumbotron-slide--active');
        jSlideIndex--;

        if (jSlideIndex < 0) {
            jSlideIndex = jSlides.length -1;
        }
        
        jSlides.eq(jSlideIndex).addClass('jumbotron-slide--active');
    });

    setInterval(function(){
        jSlides.eq(jSlideIndex).removeClass('jumbotron-slide--active');
        jSlideIndex++;

        if (jSlideIndex > jSlides.length -1) {
            jSlideIndex = 0;
        }

        jSlides.eq(jSlideIndex).addClass('jumbotron-slide--active');
    }, 8000);

    // Animate intro items

    var target_block = $(".intro__item p"); // Ищем блок 
	var blockStatus = true;
		
		$(window).scroll(function() {
		
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			
			if(scrollEvent && blockStatus) {
			
				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
				
				$('.intro__item span').each(function(){
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 5000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
				
			}
			
        });
    
    // Services Tabs

    $('.services__tab-item').not(":first").hide();

    $('.services__tab').on('click', function(){
        $('.services__tab').removeClass('services__tab-active').eq($(this).index()).addClass('services__tab-active');
        $('.services__tab-item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('services__tab-active');

    // Styling Form

    $('.calculator__form-select').selectric();

    let calcRange1 = document.querySelector('.bar-1');
    let calcRange2 = document.querySelector('.bar-2');
    let calcRange3 = document.querySelector('.bar-3');

    noUiSlider.create(calcRange1, {
        start: [0],
        step: 1,
        tooltips: true,
        connect: [true, false],
        range: {
            'min': 0,
            'max': 50
        }
    });

    noUiSlider.create(calcRange2, {
        start: [0],
        step: 1,
        tooltips: true,
        connect: [true, false],
        range: {
            'min': 0,
            'max': 31
        }
    });

    noUiSlider.create(calcRange3, {
        start: [0],
        step: 1,
        tooltips: true,
        connect: [true, false],
        range: {
            'min': 0,
            'max': 24
        }
    });

// Proccess calculator 

let personalSelect = $('.calculator__form-select');

let optionPrice = 1000;
let agentCommission = 10;
let ndsCommission = 18;

let agency = 0;
let nds = 0;
let totalPrice = 0;

let totalBlock = $('.calculator__form-total-left__col strong');
let totalSpan = $('.js-calc-total');
let agencySpan = $('.js-calc-agency');
let ndsSpan = $('.js-calc-nds');

totalBlock.html(`${totalPrice} руб.`);
totalSpan.html('0 руб.');
agencySpan.html('0 руб.');
ndsSpan.html('0 руб.');

personalSelect.on('change', function(){
    if ($(this).val() == 'promouters') {
        optionPrice = 1000;
        calcTotalAmount();
        totalBlock.html(`${totalPrice} руб.`);
        totalSpan.html(`${totalPrice} руб.`);
    } else if ($(this).val() == 'models') {
        optionPrice = 1200;
        calcTotalAmount();
    } else if ($(this).val() == 'stands') {
        optionPrice = 700;
        calcTotalAmount();
    } else if ($(this).val() == 'consults') {
        optionPrice = 860;
        calcTotalAmount();
    } else {
        optionPrice = 800;
        calcTotalAmount();
    }
});

    

calcRange1.noUiSlider.on('update', function(values){
    calcTotalAmount();
});

calcRange2.noUiSlider.on('update', function(values){
    calcTotalAmount();
});

calcRange3.noUiSlider.on('update', function(values){
    calcTotalAmount();
});

function calcTotalAmount() {
    let personalQuant = calcRange1.noUiSlider.get() * optionPrice;
    let workingDays   = calcRange2.noUiSlider.get() * 40;
    let workingHours  = calcRange3.noUiSlider.get() * 8;
    let totalAmount = 0;

    totalAmount = personalQuant + workingDays + workingHours;
    agency = totalAmount * agentCommission / 100;
    nds = totalAmount * ndsCommission / 100;

    totalPrice = totalAmount + agency + nds;
    totalPrice = totalPrice.toFixed();

    totalPrice = +totalPrice;
    totalPrice = totalPrice.toLocaleString();

    

    totalAmount = +totalAmount;
    totalAmount = totalAmount.toLocaleString();

    agency = +agency.toFixed();
    agency = agency.toLocaleString();

    nds = +nds.toFixed();
    nds = nds.toLocaleString();

    

    totalBlock.html(`${totalPrice} руб.`);
    totalSpan.html(`${totalAmount} руб.`);
    agencySpan.html(`${agency} руб.`);
    ndsSpan.html(`${nds} руб.`);
}

// Works Slider

var workSlider = $('.works-slider');
  workSlider.owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots: false,
    items: 2,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: false,
            autoplay: true
        },
        700:{
            items:2,
            nav:false,
            autoplay: false
        }
    }
  });
  
  // Custom Button
  $('.work-slider__btn--next').click(function() {
    workSlider.trigger('next.owl.carousel');
    return false;
  });
  $('.work-slider__btn--prev').click(function() {
    workSlider.trigger('prev.owl.carousel');
    return false;
  });

  // Chartist

  let data = {
      labels: ['июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь'],
      series: [
        [1, 6, 5, 8, 7, 6]
      ]
  };

  new Chartist.Line('.ct-chart', data);

  // Models Slider

var modelsSlider = $('.models-slider');
modelsSlider.owlCarousel({
  loop:true,
  margin: 30,
  nav:false,
  dots: false,
  items: 1,
  responsive:{
      0:{
          items:1,
          nav:false,
          dots: false,
          autoplay: true
      },
      500:{
          items:2,
          nav:false,
          autoplay: false
      },
      700:{
        items:3,
        nav:false,
        autoplay: false
    }
  }
});

// Custom Button
$('.models-slider__btn--next').click(function() {
  modelsSlider.trigger('next.owl.carousel');
  return false;
});
$('.models-slider__btn--prev').click(function() {
  modelsSlider.trigger('prev.owl.carousel');
  return false;
});

  // Partners Slider

  var partnersSlider = $('.partners-slider');
  partnersSlider.owlCarousel({
    loop:true,
    margin: 30,
    nav:false,
    dots: false,
    items: 1,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots: false,
            autoplay: true
        },
        500:{
            items:2,
            nav:false,
            autoplay: false
        },
        700:{
          items:3,
          nav:false,
          autoplay: false
      }
    }
  });
  
  // Custom Button
  $('.partners-slider__btn--next').click(function() {
    partnersSlider.trigger('next.owl.carousel');
    return false;
  });
  $('.partners-slider__btn--prev').click(function() {
    partnersSlider.trigger('prev.owl.carousel');
    return false;
  });
	
});
