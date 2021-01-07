$(function(){
    
    // Mobile Menu
    var mobileMenuBtn = $('.mobile-menu-btn');
    var mobileMenu = $('.main-nav__list--mobile');
    var menuIsShowed = false;

    mobileMenuBtn.on('click', function(){

        if(!menuIsShowed) {
            mobileMenu.animate({
                left: '0px'
            });
            menuIsShowed = true;
        } else {
            mobileMenu.animate({
                left: '-2000px'
            });
            menuIsShowed = false;
        }
    });

// Specials slider
$(".specials-slider").owlCarousel({
    items: 1
});

// Delicious menu tabs

$(".tab_item").not(":first").hide();
$(".delicious-menu__wrapper .tab").click(function() {
	$(".tab_item").hide().eq($(this).index()).fadeIn()
});

});