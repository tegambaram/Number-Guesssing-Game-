let minNum = 1;
let maxNum = 6;
let attempts = 0;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

function checkGuess() {
    const input = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");

    let guess = Number(input.value);

    if (isNaN(guess)) {
        message.textContent = "Please enter a valid number!";
    } else if (guess < minNum || guess > maxNum) {
        message.textContent = "Number must be between 1 and 6!";
    } else {
        attempts++;
        attemptsDisplay.textContent = `Attempts: ${attempts}`;

        if (guess < answer) {
            message.textContent = "Your guess is too low!";
        } else if (guess > answer) {
            message.textContent = "Your guess is too high!";
        } else {
            message.textContent = `Correct! You got it in ${attempts} attempt(s). 🎉`;
            input.disabled = true;
        }
    }

    input.value = "";
}
