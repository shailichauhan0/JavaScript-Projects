const max = prompt("Enter The Max Number");

const random= Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number");

while (true) {
    if (guess === "quit") {
        console.log("User quit");
        break;
    }
    if (guess == random) 
    {
        console.log("You are right! Congrats!! No. was", random);
        break;
    } 
    else if (guess < random) 
    {
        guess = prompt("Hint: Your guess was too small. Please try again");
    } 
    else
    {
        guess = prompt("Hint: Your guess was too large. Please try again");
    }
}
