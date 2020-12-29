let readline = require("readline-sync");
let shuffle = require("shuffle-array");
const NUMBER_OF_CARDS_IN_A_SUIT = 13;
const NUMBER_OF_SUITS = 4;
const SUITS = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const RANKS = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'King', 'Queen'];
const VALUES = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

function Card(suit, rank, value) {
  this.suit = suit;
  this.rank = rank;
  this.value = value;
}

function Deck() {
  this.cards = [];
  SUITS.forEach(suit => {
    RANKS.forEach((rank, indx) => {
      this.cards.push(new Card(suit, rank, VALUES[indx]))
    });
  });
}

Deck.prototype.deal = function(player) {
  player.hand.push(this.cards.pop());
};

function Participant() {
  this.hand = [];
}

Participant.prototype.hit = function() {

};

Participant.prototype.stay = function() {

};

Participant.prototype.isBusted = function() {
  return this.score() > 21;
};

Participant.prototype.score = function() {
  let valuesArray = this.hand.map(card => card.value);
  let score = valuesArray.reduce((total, val) => total + val, 0);

  valuesArray.filter(val => val === 11).forEach(_ => {
    if (score > 21) score -= 10;
  });

  return score;
};

function Player() {
  Participant.call(this);
  this.money = 5;
}

Player.prototype = Object.create(Participant.prototype);
Player.prototype.constructor = Player;

function Dealer() {
  Participant.call(this);
}

Dealer.prototype = Object.create(Participant.prototype);
Dealer.prototype.constructor = Dealer;

Dealer.prototype.hide = function() {

};

Dealer.prototype.reveal = function() {

};

function TwentyOneGame() {
  this.deck = new Deck();
  this.player = new Player();
  this.dealer = new Dealer();
}

TwentyOneGame.prototype.start = function() {
  this.displayWelcomeMessage();
  while (true) {
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    if (this.playAgain()) {
      this.deck = new Deck();
      this.player.hand = [];
      this.dealer.hand = [];
    } else {
      break;
    }
  }
  this.displayGoodbyeMessage();
};

TwentyOneGame.prototype.dealCards = function() {
  for (let cardsDealt = 1; cardsDealt <= 2; cardsDealt += 1) {
    this.deck.deal(this.player);
    this.deck.deal(this.dealer);
  }
};

TwentyOneGame.prototype.showCards = function(isDealerTurn) {
  this.showPlayerCards();
  this.showDealerCards(isDealerTurn);
};

TwentyOneGame.prototype.showPlayerCards = function() {
  let playerHand = this.player.hand.map(card => `${card.rank} of ${card.suit}`);
  console.log('Your hand: ' + this.joinAnd(playerHand));
  console.log(`Your Score: ${this.player.score()}`);
  if (this.player.isBusted()) {
    console.log('You busted!');
  }
};

TwentyOneGame.prototype.showDealerCards = function(isDealerTurn = false) {
  let dealerHand = this.dealer.hand.map((card, indx) => {
    if (indx === 0 && isDealerTurn === false) {
      return 'Unknown Card';
    } else {
      return `${card.rank} of ${card.suit}`;
    }
  });

  console.log("Dealer's hand: " + this.joinAnd(dealerHand));
};

TwentyOneGame.prototype.joinAnd = function(array, divider = ', ', statement = 'and') {
  switch (array.length) {
    case 1:
      return array;
    case 2:
      return `${array[0]} ${statement} ${array[1]}`;
    default:
      return `${array.slice(0, array.length - 1).join(divider)}${divider}${statement} ${array[array.length - 1]}`;
  }
};

TwentyOneGame.prototype.playerTurn = function() {
  while (!this.player.isBusted()) {
    console.log('Hit or stay? (h/s): ');
    let answer = readline.question().toLowerCase();
    if (answer === 'h') {
      this.deck.deal(this.player);
      this.showCards();
    } else if (answer === 's') {
      break;
    } else {
      console.log('Invalid Input');
    }
  }
};

TwentyOneGame.prototype.dealerTurn = function() {
  if (!this.player.isBusted()) {
    while (true) {
      if (this.dealer.score() < 17) {
        this.deck.deal(this.dealer);
        this.showCards(true);
      } else {
        this.showCards(true);
        break;
      }

      if (this.dealer.isBusted()) {
        console.log('Dealer busts!');
        break;
      }
    }
  } else {
    this.showCards(true);
  }
};

TwentyOneGame.prototype.displayWelcomeMessage = function() {
  console.log('Welcome to Twenty One!');
};

TwentyOneGame.prototype.displayGoodbyeMessage = function() {
  console.log('Thanks for playing Twenty One!');
};

TwentyOneGame.prototype.displayResult = function() {
  let playerScore = this.player.score();
  let dealerScore = this.dealer.score();
  console.log(`Your Score: ${playerScore}`);
  console.log(`Dealer Score: ${dealerScore}`);

  if (this.player.isBusted() || (!this.dealer.isBusted() && dealerScore > playerScore)) {
    console.log('Dealer wins!');
    this.player.money -= 1;
  } else if (playerScore === dealerScore) {
    console.log(`It's a tie!`);
  } else {
    console.log('You win!');
    this.player.money += 1;
  }
};

TwentyOneGame.prototype.playAgain = function() {
  let choice;
  console.log(`You have ${this.player.money} dollars.`);

  if (this.player.money === 0) {
    return false;
  } else if (this.player.money === 10) {
    console.log(`You're rich!`);
  }

  while (true) {
    choice = readline.question("Pay 1 dollar to play again? (y/n): ").toLowerCase();
    if (choice === 'y' || choice === 'n') break;
    console.log('Invalid Input.');
  }
  return choice === 'y';
};

let game = new TwentyOneGame();
game.start();

/*
TODO:
implement money into the game
get display welcome to work.
refactor - remove reduntant code and unused functions, look at student solutions, look at LS solution


*/