let max = parseInt(prompt('Enter your maximum number'));
while (!max) {
    max = parseInt(prompt("The value you typed isn't valid. Enter a valid number."));
}
const target_num = Math.floor(Math.random() * max) + 1;

let guess = (prompt("Enter your guess. Type 'q' to quit."));
let attempts = 1;

while (parseInt(guess) !== target_num) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > target_num) {
        guess = parseInt(prompt("Too high! Enter a new guess."));
        attempts += 1;
    } else if(guess < target_num){
        guess = parseInt(prompt("Too low! Enter a new guess."));
        attempts += 1;
    } else {
        guess = prompt("Invalid guess. Enter a number or 'q' to quit.");
    }
}
if (guess === 'q') {
    console.log("OK, Quitter...");
}
console.log(`Congrats! It took you ${attempts} guesses.`)