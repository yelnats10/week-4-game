$( document ).ready(function() {
    console.log( "ready!" );
});

var randomMin = 19;
var randomMax = 120;

//To generate a random number between 19-120
var randomNumber = Math.floor(Math.random()*(randomMax - randomMin + 1) + randomMin);

var hiddenMin =  1;
var hiddenMax =  12;

//To generate a random number between 1-12
var	hiddenNumber = Math.floor(Math.random()*(hiddenMax - hiddenMin + 1) + hiddenMin);

//To reset the game after win.lose
function gameReset(){
	randomNumber = Math.floor(Math.random()*(randomMax - randomMin + 1) + randomMin);
	hiddenNumber = Math.floor(Math.random()*(hiddenMax - hiddenMin + 1) + hiddenMin);
	$("#number-to-guess").text(randomNumber);
	console.log(randomNumber);
	console.log(hiddenNumber);
};

$("#number-to-guess").text(randomNumber);

