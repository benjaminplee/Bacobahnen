$(function() {
  var grid_size = {x: 170, y: 95}; // article width + 2 * margin (need to make this not known to js)

	$(".draggable").draggable({
    grid: [grid_size.x, grid_size.y],
    stack: ".draggable"
  });

  // just for examples
  $("article").each(function(i) {
    $(this).css({"left": i * grid_size.x});
  });
})
