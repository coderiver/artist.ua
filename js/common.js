$(document).ready(function() {

//about accordeon
function accordeon() {
	var el = $('.js-about-accos');
	var btn = el.find('button');
	var row = el.find('.about__row');
	row.hide();
	el.first().find('.about__row').show();
	el.first().find('button').addClass('is-active');
	btn.click(function() {
		if (!$(this).hasClass('is-active')) {
			row.slideUp();
			btn.removeClass('is-active');
			$(this).next().slideDown();
			$(this).addClass('is-active');
		};
	});
};
accordeon();

// select list
$(".select-list").hide();
$(".select").click(function(){
	if ($(this).hasClass("is-active")) {
		$(this).removeClass("is-active");
		$(this).find('.select-list').hide();
	}
	else{
		$(this).addClass("is-active");
		$(this).find('.select-list').show();
	}
});
$(".select-list li").click(function(){
	var select = $(this).text();
	$(this).parent().parent().find('span').text(select);
	
	var data = $(this).attr("data-id");
	$(this).parent().parent().find('input').val(data);
});

// spoiler
$(".js-spoiler-text").hide();	
$(".js-spoiler").click(function(){
	if ($(this).hasClass("is-open")){
		$(this).removeClass("is-open");
		$(this).find('.js-spoiler-text').slideUp();
	}
	else{
		$(this).addClass("is-open");
		$(this).find('.js-spoiler-text').slideDown();
	}
});

// info hint
$(".info i").click(function(){
	$(this).parent().toggleClass('is-open');
});


});