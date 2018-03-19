var userNumber = 0;
$("#usernumber").text(userNumber);

var wins = 0;
$("#wins").text(wins);

var losses = 0
$("#losses").text(losses);

// make target number random between 19 and 120
var targetNumber = Math.floor((Math.random() * 101)+19);
$("#targetNumber").text(targetNumber);
console.log(targetNumber)

var blue = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);
var red = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);


$("#blue").on("click", function() {
    userNumber = userNumber + blue
    $("#userNumber").text(userNumber);
    change();

    if (userNumber === targetNumber) {
        win();
    }
    
    else if (userNumber > targetNumber) {
        lose();
    }

});

$("#green").on("click", function() {
    userNumber = userNumber + green
    $("#userNumber").text(userNumber);
    change();

    if (userNumber === targetNumber) {
        win();
    }
    
    else if (userNumber > targetNumber) {
        lose();
    }

});

$("#red").on("click", function() {
    userNumber = userNumber + red
    $("#userNumber").text(userNumber);
    change();

    if (userNumber === targetNumber) {
        win();
    }
    
    else if (userNumber > targetNumber) {
        lose();
    }

});

$("#yellow").on("click", function() {
    userNumber = userNumber + yellow
    $("#userNumber").text(userNumber);
    change();

    if (userNumber === targetNumber) {
        win();
    }
    
    else if (userNumber > targetNumber) {
        lose ();
    }

});

function change(){
    var blue = Math.floor((Math.random() * 12) + 1);
    var green = Math.floor((Math.random() * 12) + 1);
    var red = Math.floor((Math.random() * 12) + 1);
    var yellow = Math.floor((Math.random() * 12) + 1);
    }

function win() {
    wins++;
    $("#wins").text(wins);
    reset()
}

function lose () {
    losses++;
    $("#losses").text(losses);
    reset();
}
    console.log(wins)
    console.log(losses)

function reset() {
    targetNumber = Math.floor((Math.random() * 101)+19);
    $("#targetNumber").text(targetNumber)
    var blue = Math.floor((Math.random() * 12) + 1);
    var green = Math.floor((Math.random() * 12) + 1);
    var red = Math.floor((Math.random() * 12) + 1);
    var yellow = Math.floor((Math.random() * 12) + 1);
    userNumber = 0
    $("#userNumber").text(userNumber)
}