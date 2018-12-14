let targetNumber = Math.floor(Math.random()* 120) + 19;
let crystalValue = Math.floor(Math.random() * 12) + 1;
let crystalValue2 = Math.floor(Math.random() * 12) + 1;
let crystalValue3 = Math.floor(Math.random() * 12) + 1;
let crystalValue4 = Math.floor(Math.random() * 12) + 1;
let wins = 0;
let losses = 0;
let playerScore = 0;


$("div.targetNumber").html(targetNumber);
$("div.wins").html("Wins: " + wins);
$("div.losses").html("Losses " + losses);

function newGame(){
	playerScore = 0;
	targetNumber = Math.floor(Math.random() * 120) + 19;
	crystalValue = Math.floor(Math.random() * 12) + 1;
	crystalValue2 = Math.floor(Math.random() * 12) + 1;
	crystalValue3 = Math.floor(Math.random() * 12) + 1;
	crystalValue4 = Math.floor(Math.random() * 12) + 1;
	$("div.targetNumber").html(targetNumber);
	$("div.wins").html("Wins: " + wins);
	$("div.losses").html("Losses " + losses);
}


$("#blue").on("click", function(){
	playerScore = playerScore + crystalValue;
	$("div.score").html("Your score is: " + playerScore);
	if(playerScore === targetNumber){
		alert("You win!");
		alert("Click on any crystal to reset your score");
		playerScore = 0;
		wins++;
		newGame();
	}
	if(playerScore > targetNumber){
		alert("You lost!");
		alert("Click on any crystal to reset your score");
		losses++;
		newGame();
	}


});

$("#orange").on("click", function(){
	playerScore = playerScore + crystalValue2;
	$("div.score").html("Your score is: " + playerScore);
	if(playerScore === targetNumber){
		alert("You win!");
		alert("Click on any crystal to reset your score");
		playerScore = 0;
		wins++;
		newGame();
	}
	if(playerScore > targetNumber){
		alert("You lost!");
		alert("Click on any crystal to reset your score");
		losses++;
		newGame();
	}


});

$("#purple").on("click", function(){
	playerScore = playerScore + crystalValue3;
	$("div.score").html("Your score is: " + playerScore);
	if(playerScore === targetNumber){
		alert("You win!");
		alert("Click on any crystal to reset your score");
		playerScore = 0;
		wins++;
		newGame();
	}
	if(playerScore > targetNumber){
		alert("You lost!");
		alert("Click on any crystal to reset your score");
		losses++;
		newGame();
	}


});

$("#green").on("click", function(){
	playerScore = playerScore + crystalValue4;
	$("div.score").html("Your score is: " + playerScore);
	if(playerScore === targetNumber){
		alert("You win!");
		alert("Click on any crystal to reset your score");
		playerScore = 0;
		wins++;
		newGame();
	}
	if(playerScore > targetNumber){
		alert("You lost!");
		alert("Click on any crystal to reset your score");
		losses++;
		newGame();
	}


});
