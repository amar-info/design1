$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $("#top-back").fadeIn(100);
        } else {
            $("#top-back").fadeOut(100);
        }
    });
    $("#top-back").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});

$(document).ready(function(){
	$('#nav').localScroll(1000);
	$('#Home').parallax("50%", 0.1);
	$('#About').parallax("50%", 0.1);
	$('#Support').parallax("50%", 0.1);
});

$(document).ready(function(){
	
	$(window).scroll(function(){
        var homePosition = jQuery("div#Home").css("background-position");
		var aboutPosition = jQuery("#About").css("background-position");
		var supportPosition = jQuery("#Support").css("background-position");
		if(homePosition == "50% 0px"){
			jQuery('#nav li a').removeClass('active_menu');
			jQuery('#nav li:nth-child(1) a').addClass('active_menu');	
		}
		if(aboutPosition == "50% 0px"){
			jQuery('#nav li a').removeClass('active_menu');
			jQuery('#nav li:nth-child(2) a').addClass('active_menu');	
		}
		if(supportPosition == "50% 0px"){
			jQuery('#nav li a').removeClass('active_menu');
			jQuery('#nav li:nth-child(3) a').addClass('active_menu');	
		}
    });
	
	jQuery('.logo a').click(function(){
	   	jQuery('#nav li a').removeClass('active_menu');
		jQuery('#nav li:first a').addClass('active_menu');
		$("html, body").animate({
            scrollTop: 0
        }, 300);
        return false;
	});
});

$(document).ready(function() {
	jQuery('#nav li:first a').addClass('active_menu');
    jQuery('#nav li a').click(function(){
	   	jQuery('#nav li a').removeClass('active_menu');
		jQuery(this).addClass('active_menu');
	});
});
