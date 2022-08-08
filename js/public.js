
$(function() {

	$('.nav-item').click(function(e) {
		e.preventDefault()

		let target = $(this).find('a').attr('href');
		// 先執行下潛動畫
		$(".submarine").removeClass('submarine_up submarine_down')
		$(".submarine").addClass('submarine_down')

		

		$('html, body').delay(3000).animate({
			scrollTop: $(target).offset().top
		}, function() {
			$('.submarine').delay(500).queue(function(){
				$(this).addClass('submarine_up').dequeue();
			});
		})
		
	})
});
