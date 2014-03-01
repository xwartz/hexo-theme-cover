(function ($) {
	var arr_menu = $('#main-nav').find('a');
	var pattern0 = /\./g,
	    pattern1 = /archives/g,
	    pattern2 = /demos/g,
	    pattern3 = /flickr/g;
	
	if(pattern1.test(location.href)){
		arr_menu.removeClass('active');
		arr_menu.eq(1).addClass('active');
	}else if(pattern2.test(location.href)){
		arr_menu.removeClass('active');
		arr_menu.eq(2).addClass('active');
	}else if(pattern3.test(location.href)){
		arr_menu.removeClass('active');
		arr_menu.eq(3).addClass('active');
	}else if(pattern0.test(location.href)){
		arr_menu.removeClass('active');
		arr_menu.eq(0).addClass('active');
	}else{
		arr_menu.removeClass('active');
	}

})(jQuery);