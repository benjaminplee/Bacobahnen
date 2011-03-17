(function($) {
	
	$('.grid td').live('keyup', function() {
		if(!$(this).text().trim()) {
			$(this).html('')
		}
	})

})(jQuery)
