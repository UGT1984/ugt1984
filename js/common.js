
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


	// Open menu
	$("#menu_icon").on("click",function(){
		var $icon = $(this);
		var $shutter = $(".menu_shutter");
		var $menu = $(".menu_shutter .menu");
		var $background = $(".bg_shutter");
		var $menuLink = $(".menu_link");

		var screenWidth = screen.width;
		var screenHeight = screen.height;

		$background.css("top", -screenHeight-screenWidth);

		// Open
		var menuOpen = function(){
			$shutter.show();
			var menuHeight = $menu.height();
			$shutter.width(screenWidth).height(screenHeight);
			setTimeout(function(){
				$menu.css({
						"marginTop": -menuHeight/2,
						"opacity": 1,
						"transform": "translateX(0)"
					});
	    },200);
			$background.css("top", -screenWidth/2).height(screenHeight + screenWidth);
			$icon.attr("status", "open");

			// no scroll
			$(window).on("touchmove.noScroll", function(event){
				event.preventDefault();
			})
		};

		// Close
		var menuClose = function(){
			$menu.css({
					"opacity": 0,
					"transform": "translateX(30px)"
			});
			// $background.css("top", -screenHeight-screenWidth);
			$icon.attr("status", "close");
			$shutter.on("transitionend",function(){ if($icon.attr("status") == "close")$shutter.hide();});

			// remove no scroll
			$(window).off(".noScroll");
		};

		if($icon.attr("status") == "close") {
			menuOpen();
		} else {
			menuClose();
		}

		$menuLink.on("click", menuClose);

	});

});
