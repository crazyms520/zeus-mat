
$(function() {
	
	// check img is complete loading
	function imageLoaded() {
		counter--; 

		if( counter === 0 ) {
			$('html').removeClass('no_scroll');
			$('.loading_page').hide();
		}
	}

	let images = $('img');
    let counter = images.length;

	images.each(function() {
        if( this.complete ) {
            imageLoaded.call( this );
        } else {
            $(this).one('load', imageLoaded);
        }
    });

	// check which block it is in when resetting start
	
	let active;
	if($(window).scrollTop() >= $('#section-1').offset().top && $(window).scrollTop() < ($('#section-1').offset().top + $('#section-1').height())) {
		active = '1'
	} else if ($(window).scrollTop() >= $('#section-2').offset().top && $(window).scrollTop() < ($('#section-2').offset().top + $('#section-2').height())) {
		active = '2'	
	} else if ($(window).scrollTop() >= $('#section-3').offset().top && $(window).scrollTop() < ($('#section-3').offset().top + $('#section-3').height())) {
		active = '3'
	} 
	setIcon(active);

	// check which block it is in when resetting end

	$('.nav-item').click(function(e) {
		e.preventDefault()

		let target = $(this).find('a').attr('href');
		let old = $('.side_nav').find('.active').children().attr('data-id');
		let now = $(this).children().attr('data-id');

			// 執行(下潛)動畫
		if( $('html').scrollTop() != $(target).offset().top) {
			$('.ice-icon-items').empty();
			// side nav active start
			// side nav active end
			
			// animation start
			$(".submarine").removeClass('submarine_up submarine_down submarine_in')
			if(old > now){
				$(".submarine").addClass('submarine_up')
			} else{
				$(".submarine").addClass('submarine_down')
			}
			// animation end
		
			$('html, body').delay(1000).animate({
				scrollTop: $(target).offset().top
			}, function() {
				$('.submarine').delay(500).queue(function(){
					console.log('public');
					setIcon(now);
					$(this).addClass('submarine_in').dequeue();
				});
			})
		}
	})

	$('.mobile-nav').click(function(e) {
		e.preventDefault()
		
		let now = $(this).attr('data-id');
		let target = $('#section-' + now);
		let direction = $(this).attr('data-direction');
		// 執行(下潛)動畫
		$('.ice-icon-items').empty();
			
		// animation start
		console.log(direction);
		$(".submarine").removeClass('submarine_up submarine_down submarine_in')
			if(direction === 'up'){
				$(".submarine").addClass('submarine_up')
			} else{
				$(".submarine").addClass('submarine_down')
			}
		// animation end
		
		$('html, body').delay(1000).animate({
			scrollTop: $(target).offset().top
		}, function() {
			$('.submarine').delay(500).queue(function(){
				setIcon(now);
				$(this).addClass('submarine_in').dequeue();
			});
		})
		
	})	
	
	$(window).on('scroll', function() {
			
		if($(window).scrollTop() >= $('#section-1').height()) {
			$('.submarine').css({"bottom": "50%"});
		} else {
			$('.submarine').css({"bottom": "10vh"});	
		}
	})
});
