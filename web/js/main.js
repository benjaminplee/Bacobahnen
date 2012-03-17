$(function() {
  var grid_size = 170; // article width + 2 * margin (need to make this not known to js)

	$(".draggable").draggable({
    grid: [grid_size, grid_size],
    stack: ".draggable"
  });

  // just for examples
  $("article").each(function(i) {
    $(this).css({"left": i * grid_size});
  });
})
