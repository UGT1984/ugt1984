
/* ===================================================================
Javascript information
 file name  :  common.js
 task info :  Basic styles used in every pages
=================================================================== */


var scrollToSection = function(name){
	var offset = $(name).offset();
	$('html, body').animate({
		scrollTop: offset.top - $('header').height()
	});
}



$(document).ready(function(){

	// Static
	var visualHeight = $(".main_copy").outerHeight(),
		headerHeight = $("header").outerHeight();

	// Page Top
	$("#pagetop").on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		});
	});

	// Scroll to anchor
	$(".menu li a")
		.on("click", function(event){
			// [TODO] Rethink about menu UX
			// event.preventDefault();
			// var dest = $(this).attr('href');
			// scrollToSection(dest);
		})
		.mouseover(function(){
			$(this).addClass("menu_on");
		})
		.mouseout(function(){
			$(this).removeClass("menu_on");
		});

});
