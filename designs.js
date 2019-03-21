$(document).ready(function () {

  $('#sizePicker').submit(function makeGrid(table) {  // When size is submitted by the user, call makeGrid()
    var r = $('#inputHeight').val(); // Select size input
    var c = $('#inputWidth').val(); // Select size input
    for (var i = 1; i <= r; i++) {
      $('table').append("<tr></tr>");
      for (var j = 1;j <= c; j++) {
        $('tr:last').append("<td></td>");
        $('td').attr("class", 'cells') ;
      }
    }
    event.preventDefault();

    $("td").click(function addColor() {

      var color = $('#colorPicker').val();// Select color input

      $(this).css('backgroundColor' , color);

    });
  });
});
