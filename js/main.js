(function($) {
	
	$.fn.replace = function(eventType, newHandler) {
		this.unbind(eventType).bind(eventType, newHandler)
	}
	
	function addBlock() {
		var text = prompt("What would you like the block to say?")

		if(text) {
			$(this).toggleClass('block').html(text).replace('click', removeBlock)
		}

		return false;
	}

	function removeBlock() {
		$(this).toggleClass('block').html('').replace('click', addBlock)

		return false;
	}

	function replace() {

	}

	$('.grid td').live('click', addBlock)

	function gridBuilder(tableSelector, cols, rows) {
		return function() {
			var table = $(tableSelector)

			var gridText = ''

			for(var row = 0; row < rows; row++) {
				gridText += '<tr>'

				for(var col = 0; col < cols; col++) {
					gridText += '<td></td>'
				}

				gridText += '</tr>'
			}

			table.append('<tbody>' + gridText + '</tbody')
		}
	}

	$(gridBuilder('#grid', 5, 5))

})(jQuery)
