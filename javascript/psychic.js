var compChoice = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
var win = 0;
var loss = 0;
var guessRem = 9;
var compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
var alreadyUsed = [""];


function start() {

    compGuess =compChoice[Math.floor(Math.random() * compChoice.length)];
    };

function reset() {

    guessRem = 9;
    compGuess =compChoice[Math.floor(Math.random * compChoice.length)];
    alreadyUsed = [""]; 
};

start();

document.onkeyup = function(event) {

    var userGuess =event.key;


    if (!/[a-zA-Z]/.test(userGuess)) {
        alert("Letters only!")
        return;

    };


    if (guessRem > 0 ) {
        
        if (userGuess === compGuess) {

            win++;

            document.getElementById("userwins").innerHTML = win;

            reset();
            alert("You Win You Win You Win");

        }
        else {
             if (alreadyUsed.indexOf(userGuess) === -1) {

                alreadyUsed.push(userGuess);

                document.getElementById("used").innerHTML = alreadyUsed;
                guessRem--;

                document.getElementById("guesses").innerHTML = guessRem;
             }
             else{
                 alert("Letter already chosen");

                 return;
             
             
             }
        }
    }
        else {

            loss++;

            document.getElementById("computerwins").innerHTML = loss;

            reset();
            alert("You Lost!");

        }

        
    };
