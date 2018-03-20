$(function(){

	var body = $('body');
	// Show/Hide sub-menu
	var subMenu = $('.sub-menu');

	$('.catalog-link').on('mouseover', function(){
		subMenu.show();
	});

	body.on('click', function(event){
		if (event.target !== subMenu) {
			subMenu.hide();
		}
	});

	// Show search form 
	var searchForm = $('.search-form');
	var searchBtn = $('.search-btn');

	searchBtn.on('click', function(event){
		event.preventDefault();
		searchForm.fadeIn();
		$('.search-form input').focus();
	});

	$(document).mouseup(function(event){
		if (!searchForm.is(event.target)
			&& searchForm.has(event.target).length === 0) {
			searchForm.fadeOut();
		}
	}); //close search form

// Show Login Form

var loginBtn = $('.login-btn');
var loginForm = $('.login-form');

loginBtn.on('click', function(event){
	event.preventDefault();

	loginForm.fadeIn();
	$('.login-form input:first-child').focus();
});

$(document).mouseup(function(event){
		if (!loginForm.is(event.target)
			&& loginForm.has(event.target).length === 0) {
			loginForm.fadeOut();
		}
	}); //close Login form

// Show Mobile Menu

$('.mobile-menu-btn').on('click', function(){
	$('.mobile-nav-menu').toggleClass('showFromLeft');
});

$('.close-mobile-menu-btn').on('click', function(){
	$('.mobile-nav-menu').removeClass('showFromLeft');
});

// Slider

var slides = $('.slide');
var sliderCount = 0;

$('#slider-next-btn').on('click', function(e){
	e.preventDefault();
	
	slides[sliderCount].classList.remove('active-slide');
		sliderCount++;
		
		if (sliderCount >= slides.length) {
			sliderCount = 0;
		}
				
	slides[sliderCount].classList.add('active-slide');

	var currentSlide = slides[sliderCount];

	if (currentSlide.classList.contains('slide-1')) {
		$('.container').css({
			background: '#849d8f',
			'transition': '1s'
		});
	}

	if (currentSlide.classList.contains('slide-2')) {
		$('.container').css({
			background: '#8a97a7',
			'transition': '1s'
		});
	}

	if (currentSlide.classList.contains('slide-3')) {
		$('.container').css({
			background: '#9d8b84',
			'transition': '1s'
		});
	}


});

$('#slider-prev-btn').on('click', function(e){
	e.preventDefault();
	
	slides[sliderCount].classList.remove('active-slide');
		sliderCount--;
		
		if(sliderCount < 0){
       sliderCount = slides.length - 1;
     }
				
	slides[sliderCount].classList.add('active-slide');

	var currentSlide = slides[sliderCount];

	if (currentSlide.classList.contains('slide-1')) {
		$('.container').css({
			background: '#849d8f',
			'transition': '1s'
		});
	}

	if (currentSlide.classList.contains('slide-2')) {
		$('.container').css({
			background: '#8a97a7',
			'transition': '1s'
		});
	}

	if (currentSlide.classList.contains('slide-3')) {
		$('.container').css({
			background: '#9d8b84',
			'transition': '1s'
		});
	}
});


	
}); // end ready