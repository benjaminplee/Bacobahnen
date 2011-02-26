function printTDIndex() {
	// parentNode is in level 1 DOM support
	// rowIndex and cellIndex are supported DOM HTML properties

	var col = this.cellIndex
	var row = this.parentNode.rowIndex 

	alert('TD @ (' + col + ',' + row + ')')
}

$('td').live('click', printTDIndex)