(function($) {
	
	$('.editable').live('focus', function() {
		$(this).addClass('block')
		this.designMode = 'on';
	}).live('blur', function() {
		if(!$(this).html().trim()) {
			$(this).removeClass('block')
		}
		
		this.designMode = 'off';
	})

	function gridBuilder(tableSelector, cols, rows) {
		return function() {
			var table = $(tableSelector)

			var gridText = ''

			for(var row = 0; row < rows; row++) {
				gridText += '<tr>'

				for(var col = 0; col < cols; col++) {
					gridText += '<td contenteditable="true" class="editable"></td>'
				}

				gridText += '</tr>'
			}

			table.append('<tbody>' + gridText + '</tbody')
		}
	}

	$(gridBuilder('#grid', 5, 5))

})(jQuery)
