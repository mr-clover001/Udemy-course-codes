const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS =  'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTERS_WINS' ;

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK} , ${PAPER} or ${SCISSORS} ?`,
  '').toUpperCase();
   if(
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
   ){
      alert(`invalid choice! we choose ${DEFAULT_USER_CHOICE} for you!`);
      return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
const randomValue = Math.random();
if(randomValue < 0.34){
    return ROCK;
}
else if(randomValue < 0.67){
    return PAPER;
}
else {
    return SCISSORS;
}
};

// const some = () => {}; arrow function 

const getWinner = (cChoice , pChoice) => {
 if( cChoice === pChoice )
 {
     return RESULT_DRAW;
 }
 else if(cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK)
    {
        return RESULT_PLAYER_WINS;
    }
else{
    return RESULT_COMPUTER_WINS;
}
};

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
      return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
      message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
      message = message + 'won.';
    } else {
      message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
  });


  // not related to game 

  const sumUp = (resultHandler,...numbers) => {    // this is rest parameters and rest parameters is always is in end

    const validateNumber = (number) =>{     // function inside a function  
     return isNaN(number) ? 0 : number;
    };

    let sum = 0;
    for (const num of numbers){
      sum += validateNumber(num);

    }
    resultHandler(sum);
  };

  const subtractUp = function(){
    let sum = 0;
    for (const num of arguments){   //this is a old way of using rest parameters 
                                    // so dont use that
      sum += num;

    }
    return sum;
  };

  const showResult = (result) => {
    alert('the result aftr adding all numbers is: ' + result);
  };

sumUp( showResult ,1 ,2 ,3 ,5 ,67 ,6);
sumUp( showResult ,23 ,33 ,32 ,32 ,32 ,1 ,2 ,3 ,5 ,67 ,6);
console.log(subtractUp(2,5,4,3,1,7,8));