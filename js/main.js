function toggleBlock() {
	// parentNode is in level 1 DOM support
	// rowIndex and cellIndex are supported DOM HTML properties

	var col = this.cellIndex
	var row = this.parentNode.rowIndex 

	// alert('TD @ (' + col + ',' + row + ')')
	
	if(!blockIsAt(col, row)) {
		addBlockAt(col, row)
	}
	else {
		removeBlockAt(col, row)
	}
}

var grid = {}

function blockIsAt(col, row) {
	return grid[col.toString()] && grid[col][row]
}

function addBlockAt(col, row) {
	var text = prompt("What would you like the block to say?")
	
	if(text) {
		toggleBlockUI(col, row)
		insertTextIntoBlock(text, col, row)
		grid[col] = grid[col] || {}
		grid[col][row] = true;
	}
}

function removeBlockAt(col, row) {
	if(confirm("Delete this block?")) {
		grid[col][row] = undefined
		toggleBlockUI(col, row)
		insertTextIntoBlock('', col, row)
	}
}

function toggleBlockUI(col, row) {
	$('.grid tr:eq(' + row + ') td:eq(' + col + ')').toggleClass('block')
}

function insertTextIntoBlock(text, col, row) {
	$('.grid tr:eq(' + row + ') td:eq(' + col + ')').html(text)
}

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
$('.grid td').live('click', toggleBlock)