$(function(){

	new WOW().init();

	$('.reviews-slider').slick({
		width: 600,
		autoplay: true
	});

	// Show Modal

	var overlay = $('.overlay');
	var modal = $('.modal');
	var telInput = $('#tel-input');

	$('.show-modal-btn').on('click', function(e){
		e.preventDefault();

		overlay.show();
		modal.addClass('animated bounceInDown');
		telInput.focus();
	});

	$('.close-modal-btn').on('click', function(e){
		e.preventDefault();

		modal.removeClass('bounceInDown');
		overlay.fadeOut(400, function(){
			overlay.hide();
		});
		
	});

	overlay.on('click', function(e){
		e.preventDefault();

		if (e.target == this) {
			modal.removeClass('bounceInDown');
			overlay.fadeOut(400, function(){
			overlay.hide();
		});
		}
	});

	$(document).on('keydown', function(e){
		e.preventDefault();

		if (e.keyCode == 27) {
			modal.removeClass('bounceInDown');
			overlay.fadeOut(400, function(){
			overlay.hide();
		});
		}
	});
});