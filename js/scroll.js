$(function() {
	$(window).scroll(function() {
		
		if($(window).scrollTop() == $('#section-1').offset().top) {
			$('.side_nav').find('.nav-item').removeClass('active');
			$('.side_nav').find('a[href="#section-1"]').parent().addClass('active');
			if($('#section-1').find('.ice-icon-item').length == 0) {
				setIcon('1');	
			}
		}

		if($(window).scrollTop() >= $('#section-2').offset().top && $(window).scrollTop() < ($('#section-2').offset().top + $('#section-2').height())) {
			$('.side_nav').find('.nav-item').removeClass('active');
			$('.side_nav').find('a[href="#section-2"]').parent().addClass('active');	
			if($('#section-2').find('.ice-icon-item').length == 0) {
				setIcon('2');	
			}
		}

		if($(window).scrollTop() == $('#section-3').offset().top) {
			$('.side_nav').find('.nav-item').removeClass('active');
			$('.side_nav').find('a[href="#section-3"]').parent().addClass('active');
			if($('#section-3').find('.ice-icon-item').length == 0) {
				setIcon('3');	
			}
		}
	})
});
