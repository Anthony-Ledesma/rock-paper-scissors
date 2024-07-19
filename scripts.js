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



    let humanScore = 0;
    let computerScore = 0;

    let humanCounter = document.querySelector('span#human-score');
    let computerCounter = document.querySelector('span#computer-score');
    humanCounter.textContent = humanScore;

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
    };


    let choice = document.querySelector('#choice');

    choice.addEventListener('click', (event) => {
        let target = event.target;
    
        switch(target.id) {
            case 'rock':
                a = 'rock';
                playRound();
                break;
            case 'paper':
                a = 'paper';
                playRound();
                break;
            case 'scissors':
                a = 'scissors';
                playRound();
                break;
        }
     });
   
    //Round one
   // playRound();

    //Round two
   // playRound();

    //Round three
   // playRound();

    //Round four
   // playRound();

    //Round five
   // playRound();