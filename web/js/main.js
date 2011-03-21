$(function() {
	
	$('#board td').append("<div class='block' contentEditable='true'></div>")
	
	$('.block').keyup( function() {
		$(this).toggleClass('filled', !!$(this).text().trim())
	})
	
})