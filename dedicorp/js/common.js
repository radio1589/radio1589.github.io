$(function() {

	$('.selectric').selectric();

	var ru = $("li:contains('RU')");
	var en = $("li:contains('EN')");

	$("li:contains('RU')").html('RU <img class="flag" src="img/@1x/icon-ru.jpg" alt="">')
	.addClass('hide-after');
	$("span:contains('RU')").html('RU <img class="flag-span" src="img/@1x/icon-ru.jpg" alt="">');

	$("li:contains('EN')").html('EN <img class="flag" src="img/@1x/icon-en.jpg" alt="">')
	.addClass('hide-after');
	$("span:contains('RU')").html('RU <img class="flag-span" src="img/@1x/icon-ru.jpg" alt="">');

	ru.on('click', function(){
		$("span:contains('RU')").html('RU <img class="flag-span" src="img/@1x/icon-ru.jpg" alt="">');
	});

	en.on('click', function(){
		$("span:contains('EN')").html('EN <img class="flag-span" src="img/@1x/icon-en.jpg" alt="">');
	});

	// Clients Slider

	$(".clients__slider").owlCarousel({
		items: 1,
		nav: true,
		navText : [" "," "],
		dots: true
		//autoWidth:true
	});

	// Tabs

$('.tabs__title li').not('.active').click(function(){
    //номер таба
    var index = $(this).index();
    //соответствующая закладка
    var content = $('.tabs__content-item').eq(index);
    //таб сделать активным, остальные неактивными
    $(this).addClass('active').siblings().removeClass('active');
    //открыть нужную вкладку, закрыть остальные
    $('.tabs__content-item').css('display', 'none').eq(index).css('display', 'block');
});

	$('.tabs__title li:first').addClass('active');
	$('.tabs__content li:first').css('display', 'block');

// Accordeon

$('.accordeon__title').on('click', function(){
	var next = $(this).next();

	next.slideToggle(400);
	$('.accordeon__content').not(next).slideUp(400);
});


// Partners Slider

$(".partners__slider").owlCarousel({
	items: 6,
	loop: true,
	nav: true,
	navText : [" "," "],
	dots: true,
	responsive: {
		0 : {
			items: 1
		},

		420 : {
			items: 2
		},

		576 : {
			items: 3
		},

		768 : {
			items: 4
		},

		995 : {
			items: 6
		}
	}
});

// Mobile Menu

var mobileMenuBtn = $('.close-mobile-menu-btn');
var mobileMenu = $('.main-nav__mobile');
var menuIsOpen = false;

mobileMenuBtn.on('click', function() {

	if(!menuIsOpen) {
		mobileMenu.animate({left: '0px'}, 500);
		menuIsOpen = true;
	} else {
		mobileMenu.animate({left: '-2000px'}, 500);
		menuIsOpen = false;
	}
});

});
