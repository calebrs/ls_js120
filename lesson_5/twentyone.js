/*
Classes:
Participant => player, dealer
game => orchestration engine
welcome to game
players turn 
dealers turn
decide winner
play again?
INCLUDE DOLLAR AOUNTS THAT THE OLAYER HAS


deck =>
card => 

*/
function Card() {
      //STUB
      // What sort of state does a card need?
      // Rank? Suit? Points?
}

function Deck() {
      //STUB
      // What sort of state does a deck need?
      // 52 Cards?
      // obviously, we need some data structure to keep track of cards
      // array, object, something else?
}

Deck.prototype.deal = function() {
      //STUB
      // does the dealer or the deck deal?
}
  
function Participant() {
      //STUB
      // What sort of state does a participant need?
      // Score? Hand? Amount of money available?
      // What else goes here? all the redundant behaviors from Player and Dealer?
}

Participant.prototype.hit = function() {

}

Participant.prototype.stay = function() {

}

Participant.prototype.isBusted = function() {

}

Participant.prototype.score = function() {

}

function Player() {
      //STUB
      // What sort of state does a player need?
      // Score? Hand? Amount of money available?
}
  
Player.prototype = Object.create(Participant.prototype);
Player.prototype.constructor = Player;

function Dealer() {
    // Very similar to a Player; do we need this?
    //STUB
    // What sort of state does a dealer need?
    // Score? Hand? Deck of cards? Bow tie?
}

Dealer.prototype = Object.create(Participant.prototype);
Dealer.prototype.constructor = Dealer;

Dealer.prototype.hide = function() {

}

Dealer.prototype.reveal = function() {
    
}

Dealer.prototype.deal = function() {
    
}

function TwentyOneGame() {
      //STUB
      // What sort of state does the game need?
      // A deck? Two participants?
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

}

TwentyOneGame.prototype.showCards = function() {
    
}

TwentyOneGame.prototype.playerTurn = function() {
    
}

TwentyOneGame.prototype.dealerTurn = function() {
    
}

TwentyOneGame.prototype.displayWelcomeMessage = function() {
    
}

TwentyOneGame.prototype.displayGoodbyeMessage = function() {
    
}

TwentyOneGame.prototype.displayResult = function() {
    
}
  
let game = new TwentyOneGame();
game.start();