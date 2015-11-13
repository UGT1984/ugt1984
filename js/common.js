
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
	$(".work_container")
		.mouseenter(function(){
			$(this).find(".view_project").addClass("view_on");
		})
		.mouseleave(function(){
			$(this).find(".view_project").removeClass("view_on");
		});

	$(".menu_icon").on("click",function(){
		$(".menu_shutter").toggle().height(window.outerHeight).width(window.outerWidth);

		var menuHeight = $(".menu_shutter .menu").height();
		$(".menu_shutter .menu").css("marginTop", -menuHeight/2 + "px");
		$(".menu_shutter a").on("click", function(){
			$(".menu_shutter").hide();
		})
	})

});
