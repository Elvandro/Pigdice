var player1 = "";
var player2 = "";

function diceRoll() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(name,total,diceScore,score) {
  this.name = name;
  this.total = 0;
  this.diceScore = 0;
  this.score = 0;
}


Player.prototype.rollAOne = function() {
  if (this.diceScore === 1) {
    this.score = 0;
    $('#rollP2').toggle();
    $('#rollP1').toggle();
  } else {
    this.score += this.diceScore;
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
  $('#rollP1').click(function(event) {
    event.preventDefault();
    player1.diceScore = diceRoll();
    $('#p1DiceThrow').empty()
    $('#roll1Total').empty();
    $('#p1DiceThrow').append("Dice roll: " + player1.diceScore);
    player1.rollAOne();
    $('#roll1Total').append("Current score is: " + player1.score);
  });
  $('#rollP2').click(function(event) {
    event.preventDefault();
    player2.diceScore = diceRoll();
    $('#p2DiceThrow').empty()
    $('#roll2Total').empty();
    $('#p2DiceThrow').append("Dice roll: " + player2.diceScore);
    player2.rollAOne();
    $('#roll2Total').append("Current score is: " + player2.score);
  });
  $("#hold").click(function(event) {
    event.preventDefault();
    if ($('#rollP1').is(':visible')) {
      player1.hold();
      $('#p1DiceThrow').empty();
      $('#p1FinalScore').empty();
      $('#p1FinalScore').append("Total Score for "+player1.name+" is: " + player1.total);
      $(".roll1Total").empty();
      $('#rollP2').toggle();
      $('#rollP1').toggle();
      player1.winner();
    } else {
      player2.hold();
      $('#p2DiceThrow').empty();
      $('#p2FinalScore').empty();
      $('#p2FinalScore').append("Total Score for "+player2.name+" is: " + player2.total);
      $(".roll1Total").empty();
      $('#rollP2').toggle();
      $('#rollP1').toggle();
      player2.winner();
    }
  });
});
$(document).ready(function() {
  $("#flipy").click(function() {
    $(".jumbotron").toggle();
  });
});
