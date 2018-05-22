$(function(){
	// prevent links
	$('.pink-btn').on('click', function(e){
		e.preventDefault();
	});


	// mobile menu
	var mainNav = $('.main-nav');

	$('.mobile-menu-btn').on('click', function(){
		mainNav.toggleClass('showFromTop');
	});

	$('.close-btn').on('click', function(){
		if(mainNav.hasClass('showFromTop')) {
			mainNav.removeClass('showFromTop');
		}
	});

	// construct-step1-slider
	$( '#construct-slider' ).sliderPro({
		width: 1100,
		autoHeight: true,
		arrows: true,
		buttons: false,
		autoplay: false,
	});

	$( '#reviews-slider' ).sliderPro({
		width: 850,
		autoHeight: true,
		arrows: true,
		buttons: false,
		autoplay: false,
	});
}); // end window onload