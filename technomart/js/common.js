$(function(){

	// Search Form

	$('.search-btn').on('click', function(){

		var searchInput = $('.search-input');

		searchInput.css('background', '#fff');
		searchInput.css('color', '#000');
		searchInput.val('');
		searchInput.focus();
		searchInput.attr('placeholder', 'Что ищем?');
		$('.search-form').css('background', '#fff');
		$(this).css('color', 'red');
	});

	// bookmark hover

	$('.book-mark a').on('mouseover', function(){
		$('.icon-bookmark').animate({
			opacity: 1
		}, 500);
	});

	$('.book-mark a').on('mouseleave', function(){
		$('.icon-bookmark').animate({
			opacity: .5
		}, 500);
	});

	// shoping-cart hover

	$('.shoping-cart a').on('mouseover', function(){
		$('.icon-shopping-cart').animate({
			opacity: 1
		}, 500);
	});

	$('.shoping-cart a').on('mouseleave', function(){
		$('.icon-shopping-cart').animate({
			opacity: .5
		}, 500);
	});

	$('.login-btn-wrap').on('mouseover', function(){
		$('.login-btn-wrap a').css('color', '#ee3643');
		$('.icon-sign-in').css('color', '#ee3643');
	});

	$('.login-btn-wrap').on('mouseleave', function(){
		$('.login-btn-wrap a').css('color', '#000');
		$('.icon-sign-in').css('color', '#000');
	});

// Show Mobile Menu

$('.mobile-menu-btn').on('click', function(){
	$('.main-nav').toggleClass('showFromLeft');
	console.log($('.main-nav'));
});

// simple slider
var slides = $('.simple-slider .slide');
			var prevBtn = $('.simple-slider-btns .prev-btn');
			var nextBtn = $('.simple-slider-btns .next-btn');
			var slideCount = 0;

			nextBtn.on('click', function(){
				slides.eq(slideCount).removeClass('simple-slider-active');

				slideCount++;

				if (slideCount > slides.length -1) {
					slideCount = 0;
				}

				slides.eq(slideCount).addClass('simple-slider-active');
			}); // end next slide

			prevBtn.on('click', function(){
				slides.eq(slideCount).removeClass('simple-slider-active');

				slideCount--;

				if (slideCount < 0) {
					slideCount = slides.length -1;
				}

				slides.eq(slideCount).addClass('simple-slider-active');
			}); // end prev slide

// Services Tabs

var servicesItems = $('.services-item');
var servicesTabs = $('.services-tabs li');


$('#first-tab-link').on('click', function(){
	for (var i = 0; i < servicesItems.length; i++) {
		if (servicesItems.eq(i).hasClass('services-active')) {
			servicesItems.eq(i).removeClass('services-active');
		}
	}

	for (var j = 0; j < servicesTabs.length; j++) {
		servicesTabs.eq(j).removeClass('services-active-tab');
	}

	$(this).addClass('services-active-tab');
	$('#first-tab').addClass('services-active');
});

$('#second-tab-link').on('click', function(){
	for (var i = 0; i < servicesItems.length; i++) {
		if (servicesItems.eq(i).hasClass('services-active')) {
			servicesItems.eq(i).removeClass('services-active');
		}
	}

	for (var j = 0; j < servicesTabs.length; j++) {
		servicesTabs.eq(j).removeClass('services-active-tab');
	}

	$(this).addClass('services-active-tab');
	$('#second-tab').addClass('services-active');
});

$('#third-tab-link').on('click', function(){
	for (var i = 0; i < servicesItems.length; i++) {
		if (servicesItems.eq(i).hasClass('services-active')) {
			servicesItems.eq(i).removeClass('services-active');
		}
	}

	for (var j = 0; j < servicesTabs.length; j++) {
		servicesTabs.eq(j).removeClass('services-active-tab');
	}

	$(this).addClass('services-active-tab');
	$('#third-tab').addClass('services-active');
});

}); // end ready