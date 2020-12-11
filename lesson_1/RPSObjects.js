const readline = require("readline-sync");

function createMove() {
  return {

  };
}

function createRule() {
  return {
    compare(humanMove, computerMove) {
      if ((humanMove === 'rock' && (computerMove === 'scissors' || computerMove === 'lizard')) ||
          (humanMove === 'paper' && (computerMove === 'rock' || computerMove === 'Spock')) ||
          (humanMove === 'scissors' && (computerMove === 'paper' || computerMove === 'lizard')) ||
          (humanMove === 'lizard' && (computerMove === 'Spock' || computerMove === 'paper')) ||
          (humanMove === 'spock' && (computerMove === 'scissors' || computerMove === 'rock'))) {
        return 1;
      } else if (humanMove === computerMove) {
        return 0;
      } else {
        return -1;
      }
    }
  };
}

function createPlayer() {
  return {
    move: null,
    score: 0,
    moveHistory: []
  };
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    move: null,

    choose() {
      const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, lizard, or spock:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors', 'spock', 'lizard'].includes(choice)) break;
        console.log('Sorry, invalid choice');
      }

      this.move = choice;

    },
  };

  return Object.assign(playerObject, humanObject);
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  rule: createRule(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors! Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    
    this.human.moveHistory.push(humanMove);
    this.computer.moveHistory.push(computerMove);

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if (this.rule.compare(humanMove, computerMove) === 1) {
      console.log('You win!');
      this.human.score += 1;
    } else if (this.rule.compare(humanMove, computerMove) === -1) {
      console.log('Computer wins!');
      this.computer.score += 1;
    } else {
      console.log("It's a tie!");
    }
  },
  
  displayHistory() {
    console.log(`Human move history: ${this.human.moveHistory.join(', ')}`);
    console.log(`Computer move history: ${this.computer.moveHistory.join(', ')}`);
  },
  
  displayScore() {
    console.log(`Human Score: ${this.human.score}`);
    console.log(`Computer Score: ${this.computer.score}`);
  },
  
  displayChampion() {
    console.log(`The grand champion is ${this.human.score === 5 ? 'Human!' : 'Computer!'}`);
  },

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },

  play() {
    while (true) {
      this.displayWelcomeMessage();
      while (true) {
        this.human.choose();
        this.computer.choose();
        this.displayWinner();
        this.displayScore();
        this.displayHistory();
        if (this.computer.score === 5 || this.human.score === 5) {
          this.displayChampion();
          break;
        }
      }
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();