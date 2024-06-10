function getComputerChoice() {
    let ranNum = Math.floor((Math.random() * 6));
    if (ranNum <= 1) {
        return 'rock';
    } else if (ranNum <= 3) {
        return 'paper';
    } else {
        return 'scissors';
    };
};

function getHumanChoice() {
    let choice = prompt('What is your choice? Rock, Paper or Scissors.');
    return choice.toLowerCase();
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let a = getHumanChoice();
    let b = getComputerChoice();
    console.log('You chose ' + a + ', computer chose ' + b);
    if (a === b) {
        return "It's a tie, no points."
    } else if (a === 'rock' && b === 'scissors' || a === 'paper' && b === 'rock' || a === 'scissors' && b === 'paper') {
        ++humanScore;
        return 'You gain a point! The scoreboard is: You - ' + humanScore + ' // computer - ' + computerScore
    } else {
        ++computerScore;
        return 'Computer gains a point. The scoreboard is: You - ' + humanScore + ' // computer - ' + computerScore;
    };

}