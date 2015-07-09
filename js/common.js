
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
			event.preventDefault();
			var dest = $(this).attr('href');
			scrollToSection(dest);
		})
		.mouseover(function(){
			$(this).addClass("menu_on");
		})
		.mouseout(function(){
			$(this).removeClass("menu_on");
		});

	// Scale img when mouseover
	$(".diamond img").mouseover(function(){
		$(this).animate({
		    width: '280px',
    		height: '280px',
    		marginTop: '-60px',
    		marginLeft: '-60px',
		}, 80);
	});
	$(".diamond img").mouseout(function(){
		$(this).animate({
		    width: '226px',
    		height: '226px',
    		marginTop: '-33px',
    		marginLeft: '-33px',
		}, 80);
	});

	// social icon hover animation
	$(".social li").mouseover(function(){
		var platform = $(this).attr("class");
		$("path",this).attr('class', platform + '_on');
	});
	$(".social li").mouseout(function(){
		var platform = $(this).attr("class");
		$("path",this).attr('class', '');
	});

	// simple parallax effect
	$(window).on('scroll', function(){
		var scrTop = $(window).scrollTop();


		$('.main_visual').css({
			top: '-' + scrTop / 6 + 'px'
		});

		// header changing effect
		if(scrTop > (visualHeight - headerHeight)) {
			$('header').css({

			})
		}
	})


});
