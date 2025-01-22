const enterButton = document.getElementById('enterButton');
const againButton = document.getElementById('againButton');
const output = document.getElementById('outputText');


// creating a random number between 1 and 100 to be guessed
let randomNumber = Math.floor(Math.random() * 100) + 1;

// setting a limit on how many attempts the user gets
let attempts = 7;



// function will check the user guess agaisnt the random number and give feedback
function checkGuess(){
    const input = document.getElementById('userInput').value;
    // const parsedInput = parseInt(input);
    if (input == randomNumber) {
        output.innerHTML = "You guessed right! The number is " + randomNumber;
        output.style.color = "green";
    }
    else if (isNaN(input)) {
        output.innerHTML = "Please enter a valid number!";
        output.style.color = "purple";
    }
    else if (input < 1 || input > 100) {
        output.innerHTML = "Please enter a number between 1 and 100!";
        output.style.color = "orange";
    }
    else if (input < randomNumber) {
        output.innerHTML = "Too low!";
        output.style.color = "red";
    }
    else {
        output.innerHTML = "Too high!";
        output.style.color = "red";
    }
};

enterButton.addEventListener("click", function() {
    checkGuess();
    attempts--;
    if (attempts === 0) {
        output.innerHTML = "You have run out of attempts! The number was " + randomNumber;
        output.style.color = "red";
        enterButton.disabled = true;
    } else {
        output.innerHTML += " You have " + attempts + " attempts left!";
    }
});

function refreshPage() {
    window.location.reload();
}

againButton.addEventListener("click", refreshPage);