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
});
