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

// function getHumanChoice() {
//     let choice = prompt('What is your choice? Rock, Paper or Scissors.');
//     return choice.toLowerCase();
// };



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let b = getComputerChoice();
        if (a === b) {
            console.log('You chose ' + a + ', computer chose ' + b + ". It's a tie, no points.")
        } else if (a === 'rock' && b === 'scissors' || a === 'paper' && b === 'rock' || a === 'scissors' && b === 'paper') {
            ++humanScore;
            console.log('You chose ' + a + ', computer chose ' + b + '. You gain a point! The scoreboard is: You - ' + humanScore + ' // computer - ' + computerScore)
        } else {
            ++computerScore;
            console.log('You chose ' + a + ', computer chose ' + b + '. Computer gains a point. The scoreboard is: You - ' + humanScore + ' // computer - ' + computerScore);
        };
    }
    let outcome = (computerScore > humanScore) ? console.log("You lose! Scoreboard: You - " + humanScore + " // computer - " + computerScore) 
    : (computerScore === humanScore) ? console.log("It's a tie! Scoreboard: You - "+ humanScore + " // computer - " + computerScore) 
    : console.log("You win! Scoreboard: You - " + humanScore + " // computer - " + computerScore);
    return outcome;
    };
// NEW CODE FOR GUI

    let humanScore = 0;
    let computerScore = 0;

    let score = document.querySelector('#score');

    let result = document.querySelector('p#result-message');
    result.textContent = 'Please make your seletion.';
    function playRound() {
        let b = getComputerChoice();
        if (a === b) {
            result.textContent = 'You chose ' + a + ', computer chose ' + b + ". It's a tie, no points.";
            score.textContent = `You: ${humanScore}. Computer: ${computerScore}`;
        } else if (a === 'rock' && b === 'scissors' || a === 'paper' && b === 'rock' || a === 'scissors' && b === 'paper') {
            ++humanScore;
            result.textContent = 'You chose ' + a + ', computer chose ' + b + '. You gain a point!';
            score.textContent = `You: ${humanScore}. Computer: ${computerScore}`;
        } else {
            ++computerScore;
            result.textContent = 'You chose ' + a + ', computer chose ' + b + '. Computer gains a point.';
            score.textContent = `You: ${humanScore}. Computer: ${computerScore}`;
        };
    };

    function checkScoreboard() {
        if (humanScore === 5) {
            result.textContent = 'Congratulations, you win!!!';
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            result.textContent = 'Boo hoo, you lost. Loser :(';
            humanScore = 0;
            computerScore = 0;
        } else {};
    };

    let choice = document.querySelector('#choice');

    choice.addEventListener('click', (event) => {
        let target = event.target;
    
        switch(target.id) {
            case 'rock':
                a = 'rock';
                playRound();
                checkScoreboard();
                break;
            case 'paper':
                a = 'paper';
                playRound();
                checkScoreboard();
                break;
            case 'scissors':
                a = 'scissors';
                playRound();
                checkScoreboard();
                break;
        }
     });