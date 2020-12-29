let readline = require("readline-sync");
let shuffle = require("shuffle-array");
const NUMBER_OF_CARDS_IN_A_SUIT = 13;
const NUMBER_OF_SUITS = 4;

function Card() {
  this.suit = '';
  this.name = '';
  this.value = 0;
}

function Deck() {
  this.cards = this.initialize52CardDeck();
}

Deck.prototype.initialize52CardDeck = function() {
  let newDeck = [];
  for (let suit = 1; suit <= NUMBER_OF_SUITS; suit += 1) {
    for (let card = 1; card <= NUMBER_OF_CARDS_IN_A_SUIT; card += 1) {
      let newCard = new Card();
      newCard.value = card;

      if (card === 1) {
        newCard.name = 'Ace';
      } else if (card === 11) {
        newCard.name = 'Jack';
      } else if (card === 12) {
        newCard.name = 'Queen';
      } else if (card === 13) {
        newCard.name = 'King';
      } else {
        newCard. name = String(card);
      }

      if (suit === 1) {
        newCard.suit = 'Spades';
      } else if (suit === 2) {
        newCard.suit = 'Hearts';
      } else if (suit === 3) {
        newCard.suit = 'Clubs';
      } else if (suit === 4) {
        newCard.suit = 'Diamonds';
      }

      if (newCard.name === 'Queen' || newCard.name === 'King' || newCard.name === 'Jack') {
        newCard.value = 10;
      } else {
        newCard.value = card;
      }
      newDeck.push(newCard);
    }
  }
  shuffle(newDeck);
  return newDeck;
}

Deck.prototype.deal = function(player) {
  player.hand.push(this.cards.pop());
}
  
function Participant() {
  this.hand = [];
}

Participant.prototype.hit = function() {

}

Participant.prototype.stay = function() {

}

Participant.prototype.isBusted = function() {
  return this.score() > 21;
}

Participant.prototype.score = function() {
  let score = this.hand.reduce((total, card) => {
    return card.value + total;
  }, 0)
  let numberOfAces = this.hand.filter(card => card.name === 'Ace').length;
  return score;
}

function Player() {
  Participant.call(this);
  this.money = 0;
}
  
Player.prototype = Object.create(Participant.prototype);
Player.prototype.constructor = Player;

function Dealer() {
  Participant.call(this);
}

Dealer.prototype = Object.create(Participant.prototype);
Dealer.prototype.constructor = Dealer;

Dealer.prototype.hide = function() {

}

Dealer.prototype.reveal = function() {
    
}

function TwentyOneGame() {
  this.deck = new Deck();
  this.player = new Player();
  this.dealer = new Dealer();
}

TwentyOneGame.prototype.start = function() {
  this.displayWelcomeMessage();
  this.dealCards();
  this.showCards();
  this.playerTurn();
  this.dealerTurn();
  this.displayResult();
  this.displayGoodbyeMessage();
}

TwentyOneGame.prototype.dealCards = function() {
  for (let cardsDealt = 1; cardsDealt <= 2; cardsDealt += 1) {
    this.deck.deal(this.player);
    this.deck.deal(this.dealer);
  }
}

TwentyOneGame.prototype.showCards = function() {
  this.showPlayerCards();
  this.showDealerCards();
  
}

TwentyOneGame.prototype.showPlayerCards = function() {
  let playerHand = this.player.hand.map(card => `${card.name} of ${card.suit}`);
  console.log('Your hand: ' + this.joinAnd(playerHand));
  console.log(`Your Score: ${this.player.score()}`);
}

TwentyOneGame.prototype.showDealerCards = function() {
  let dealerHand = this.dealer.hand.map((card, indx) => {
    if (indx === 0) {
      return 'Unknown Card';
    } else {
      return `${card.name} of ${card.suit}`;
    }
  })
  
  console.log("Dealer's hand: " + this.joinAnd(dealerHand));
}

TwentyOneGame.prototype.displayScores = function() {
    //TODO
}

TwentyOneGame.prototype.joinAnd = function(array, divider = ', ', statement = 'and') {
  switch (array.length) {
    case 1:
      return array;
    case 2:
      return `${array[0]} ${statement} ${array[1]}`;
    default:
      return `${array.slice(0, array.length - 1).join(divider)}${divider}${statement} ${array[array.length - 1]}`;
  }
}

TwentyOneGame.prototype.playerTurn = function() {
    while (true) {
      console.log('Hit or stay? (h/s): ');
      let answer = readline.question().toLowerCase();
      if (answer === 'h') {
        this.deck.deal(this.player);
        this.showPlayerCards();
      } else if (answer === 's') {
        break;
      }

      if (this.player.isBusted()) {
        console.log('You bust!');
        break;
      }
    }
}

TwentyOneGame.prototype.dealerTurn = function() {
  while (true) {
    if (this.dealer.score() < 17) {
      this.deck.deal(this.dealer);
      this.showDealerCards();
    } else {
      break;
    }

    if (this.dealer.isBusted()) {
      console.log('Dealer busts!');
      break;
    }
  }
}

TwentyOneGame.prototype.displayWelcomeMessage = function() {
  console.log('Welcome to Twenty One!');
}

TwentyOneGame.prototype.displayGoodbyeMessage = function() {
  console.log('Thanks for playing Twenty One!');
}

TwentyOneGame.prototype.displayResult = function() {
    
}

TwentyOneGame.prototype.playAgain = function() {

}
  
let game = new TwentyOneGame();
game.start();