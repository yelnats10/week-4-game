$(document).ready(function() {
    console.log("ready!");
});

var randomMin = 19;
var randomMax = 120;

//To generate a random number between 19-120
var randomNumber = Math.floor(Math.random() * (randomMax - randomMin + 1) + randomMin);

var hiddenMin = 1;
var hiddenMax = 12;

var counter = 0

//starts your win and loses at 0
var wins = 0;
var loses = 0;

//To generate a random number between 1-12
function randomHid() {
    var hiddenNumber = Math.floor(Math.random() * (hiddenMax - hiddenMin + 1) + hiddenMin);
    return hiddenNumber;
};
//*******************issue with gamereset****************
//To reset the game after win.lose
function gameReset() {
    //hiddenNumber = Math.floor(Math.random()*(hiddenMax - hiddenMin + 1) + hiddenMin); $("#number-to-guess").text(randomNumber);
    hidNum = [];
    counter = 0;
    randomNumber = Math.floor(Math.random() * (randomMax - randomMin + 1) + randomMin);
    for (var i = 0; i < fourCrystals.length; i++) {
        hidNum.push(randomHid());
    };
    console.log(randomNumber);
    console.log(hidNum);
    //hidNumPlace();
    for (var i = 0; i < fourCrystals.length; i++) {
        $(".crystal-image").attr("value", hidNum[i]);
    };
    



    $("#number-to-guess").text(randomNumber);
    $("#your-number").text(counter);
};
//sends initial number to the div
$("#number-to-guess").text(randomNumber);
$("#win").text(wins);
$("#lose").text(loses);

//an array of numbers between 1-12 that will be used for the value of the crytals
var hidNum = [];

//An array of the 4 crystals to be used
var fourCrystals = ["assets/images/Crystal-1.png", "assets/images/Crystal-2.png",
    "assets/images/Crystal-3.png", "assets/images/Crystal-4.png"
];

//To send a random number between 1-12 to the array hidNum 4 times
for (var i = 0; i < fourCrystals.length; i++) {
    hidNum.push(randomHid());
}

//function to place the hidden number value to each crystal
function hidNumPlace() {
    for (var i = 0; i < fourCrystals.length; i++) {
        var image = $("<img>");
        image.addClass("crystal-image");
        image.attr("src", fourCrystals[i]);
        image.attr("value", hidNum[i]);
        $("#crystals").append(image);
    }
}

hidNumPlace();

//function to check to see if you won or lost
function didYouWin(){

    if (counter > randomNumber){
        loses++;
        $("#lose").text(loses);
        console.log("you lose");
        gameReset();

    } else if ( counter === randomNumber) {
        wins++;
        $("#win").text(wins);
        console.log("you win");
        gameReset();
    }
    


};

//controls what happens when you click an image
$(".crystal-image").on("click", function() {
    var data = ($(this).attr("value"));
    data = parseInt(data);
    counter += data;
    //replaces your number
    $("#your-number").text(counter);
    didYouWin();    

})