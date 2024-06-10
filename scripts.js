function getComputerChoice() {
    let ranNum = Math.floor((Math.random() * 6));
    console.log(ranNum)
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