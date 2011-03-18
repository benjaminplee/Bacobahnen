$(function() {
	$('.grid td').keyup( function() {
		if(!$(this).text().trim()) {
			$(this).empty().blur()
		}
	})
})