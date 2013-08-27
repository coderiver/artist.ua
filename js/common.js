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
	$(".select-list").show();
});
$(".select-list li").on("click",function(){
	var select = $(this).text();
	$(this).parent().parent().find('span').text(select);
	$(".select-list").hide();
});



});