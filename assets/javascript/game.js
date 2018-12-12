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



$("#blue").on("click", function(){
	playerScore = playerScore + crystalValue;
	$("div.score").html("Your score is: " + playerScore);

});

$("#orange").on("click", function(){
	playerScore = playerScore + crystalValue2;
	$("div.score").html("Your score is: " + playerScore);

});

$("#purple").on("click", function(){
	playerScore = playerScore + crystalValue3;
	$("div.score").html("Your score is: " + playerScore);

});

$("#green").on("click", function(){
	playerScore = playerScore + crystalValue4;
	$("div.score").html("Your score is: " + playerScore);

});

if(playerScore === targetNumber){
	alert("You win!");
	playerScore = 0;
	wins++;

}
if(playerScore > targetNumber){
	alert("You lost!");
	losses++;
}
