var card = {
  suit: "Hearts",
  number: 13,
  color: "red",
  isFaceDown: true
}

var deck = []

for (i=0; i<52; i++) {
    var counter = i % 13; // 0,1,2,3,...11,12,0,1,2
    var suitNum = Math.floor(i / 13); // 0,0,0,... 0,0,1,1,1
    var colorNum = Math.floor(i / 26); //splits deck into 0 & 1 red and black
    var suits = ["Hearts", "Diamonds", "Spades", "Clubs" ];
    var colors = ["red", "black"]
    var card = {
      suit: suits[suitNum],
      number: counter+1,
      color: colors[colorNum],
      isFaceDown: true
    }
    deck.push(card);
}


//flip over all the spades
for(i=0; i<52; i++) {
  //go through each card
  //see if its a spade
  //flip it over
  var currentCard = deck[i];
  if (currentCard.suit == "Spades") {
      currentCard.isFaceDown = !currentCard.isFaceDown //Taking that card value and changing it to the other value
  } {

  }
}


//Writing a function that tells us if a card is face down or face up
function getFaceDirection(card) {
  //Assuming the card variable looks like an object with suit and number
  //need to loop through the cards
  //if currentCard is the card we need to inspect then return its face direction
    for (var i = 0; i < 52; i++) {
      var currentCard = deck[i];
      var faceDirection = currentCard.isFaceDown;
      if ((currentCard.suit == card.suit) && (currentCard.number == card.number)) {
          return currentCard.isFaceDown
      }
    }
}


console.log(getFaceDirection({
  suit:"Hearts",
  number: 13
}));
