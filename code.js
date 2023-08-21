// Assignment 2.1: The Building Blocks for Javascript - Functions
// Sarah M. Repository Link: https://github.com/Tzzziii/CSC102.2
// I'm gonna pick either rock, paper, or scissors
const choices = ["rock", "paper", "scissors"];

// The computer's choice is based off of RNG
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// This figures out if you won or lost or it's a tie
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie! Boring...";
    } else if (
        // These are the IF/THENs. If you choose rock & computer chooses scissors then.. etc so forth.
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}. Congratulations! A point for the human!`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}. AI Wins? Boooo! Try again!...`;
    }
}

// These are my cool buttons!
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    // When you click a button, something magical happens:
    button.addEventListener("click", function () {
        const playerSelection = button.id; // Shows which button you clicked :)
        const computerSelection = computerPlay(); // Computer's choice, This shows what it chose
        const result = playRound(playerSelection, computerSelection); // Figuring out who wins
        document.getElementById("result").textContent = result; // Display the result on the page
    });
});