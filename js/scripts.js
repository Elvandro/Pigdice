var player1 = "";
var player2 = "";

function Player(name) {
  this.name = name;
  this.total = 0;
  this.diceFace = 0;
  this.score = 0;
}

function diceThrow() {
  return Math.floor(6 * Math.random()) + 1;
}

Player.prototype.rollAOne = function() {
  if (this.diceFace === 1) {
    this.score = 0;
    $('#rollDie2').toggle();
    $('#rollDie1').toggle();
  } else {
    this.score += this.diceFace;
  }
}

Player.prototype.hold = function() {
  this.total += this.score;
  this.score = 0;
}

Player.prototype.winner = function() {
  if (this.total >= 100) {
    alert("Congratulations " + this.name + " You have won!!");
  }
}
$(document).ready(function() {
  $('form#rollDice').submit(function(event) {
    event.preventDefault();
    var p1 = $('input#player1').val()
    var p2 = $('input#player2').val()

    player1 = new Player(p1);
    player2 = new Player(p2);

    console.log("Player 1 is: " + player1.name + " And Player 2 is: " + player2.name);
  });
  $('#rollDie1').click(function(event) {
    event.preventDefault();
    player1.diceFace = diceThrow();
    $('#player1Score').empty()
    $('#roll1Total').empty();
    $('#player1Score').append("You rolled a: " + player1.diceFace);
    player1.rollAOne();
    $('#roll1Total').append("Current total is: " + player1.score);
  });
  $('#rollDie2').click(function(event) {
    event.preventDefault();
    player2.diceFace = diceThrow();
    $('#player2Score').empty()
    $('#roll2Total').empty();
    $('#player2Score').append("You rolled a: " + player2.diceFace);
    player2.rollAOne();
    $('#roll2Total').append("Current total is: " + player2.score);
  });
  $("#hold").click(function(event) {
    event.preventDefault();
    if ($('#rollDie1').is(':visible')) {
      player1.hold();
      $('#player1Score').empty();
      $('#player1Final').empty();
      $('#player1Final').append("Score for "+player1.name+" is: " + player1.total);
      $(".roll1Total").empty();
      $('#rollDie2').toggle();
      $('#rollDie1').toggle();
      player1.winner();
    } else {
      player2.hold();
      $('#player2Score').empty();
      $('#player2Final').empty();
      $('#player2Final').append("Score for "+player2.name+" is: " + player2.total);
      $(".roll1Total").empty();
      $('#rollDie2').toggle();
      $('#rollDie1').toggle();
      player2.winner();
    }
  });
});
