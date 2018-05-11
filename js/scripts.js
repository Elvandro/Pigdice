$(document).ready(function() {
  $("#names form").submit(function(event) {
    var player1Name = $("input#player1Name").val();
    var player2Name = $("input#player2Name").val();
    $(".player1Name").text(player1Name);
    $(".player2Name").text(player2Name);
    event.preventDefault();
  })
});
