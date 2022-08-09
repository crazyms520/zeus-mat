
$(function() {

	$('.nav-item').click(function(e) {
		e.preventDefault()

		let target = $(this).find('a').attr('href');
		let old = $('.side_nav').find('.active').children().attr('data-id');
		let now = $(this).children().attr('data-id');

		// 執行下潛動畫
		if( $('html').scrollTop() != $(target).offset().top) {
			// side nav active start
			$('.side_nav').find('.nav-item').removeClass('active');
			console.log(target);
			$('.side_nav').find('a[href="'+target+'"]').parent().addClass('active');
			// side nav active end

			// animation start
			$(".submarine").removeClass('submarine_up submarine_down submarine_in')
			if(old > now){
				$(".submarine").addClass('submarine_up')
			} else{
				$(".submarine").addClass('submarine_down')
			}
			// } else {
			// 	$(".submarine").addClass('submarine_down')
			// }
			// animation end
		
			$('html, body').delay(1000).animate({
				scrollTop: $(target).offset().top
			}, function() {
				$('.submarine').delay(500).queue(function(){
					$(this).addClass('submarine_in').dequeue();
				});
			})
		}
		
		
	})
});
