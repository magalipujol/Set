let possibleColor = ["green", "cyan", "magenta"];
let possiblePattern = ["empty", "stripped", "solid"];
let possibleAmount = ["one", "two", "three"];
let possibleShape = ["triangle", "hexagon", "oval"];

/* node
   .load "archivo".js
*/

//TODO hacer los asserts de todas las funciones

/* SET CHECKER */
function colorCheck(card1, card2, card3) {
  return (
    (card1.color === card2.color && card2.color === card3.color) ||
    (card1.color != card2.color &&
      card2.color != card3.color &&
      card3.color != card1.color)
  );
}
function patternCheck(card1, card2, card3) {
  return (
    (card1.pattern === card2.pattern && card2.pattern === card3.pattern) ||
    (card1.pattern != card2.pattern &&
      card2.pattern != card3.pattern &&
      card3.pattern != card1.pattern)
  );
}
function amountCheck(card1, card2, card3) {
  return (
    (card1.amount === card2.amount && card2.amount === card3.amount) ||
    (card1.amount != card2.amount &&
      card2.amount != card3.amount &&
      card3.amount != card1.amount)
  );
}
function shapeCheck(card1, card2, card3) {
  return (
    (card1.shape === card2.shape && card2.shape === card3.shape) ||
    (card1.shape != card2.shape &&
      card2.shape != card3.shape &&
      card3.shape != card1.shape)
  );
}
/* ************* */
/* SET FUNCTIONS */
/* ************* */

function setCheck(card1, card2, card3) {
  return (
    colorCheck(card1, card2, card3) &&
    patternCheck(card1, card2, card3) &&
    amountCheck(card1, card2, card3) &&
    shapeCheck(card1, card2, card3)
  );
}

function findAllSets(...cards) {
  sets = []
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        if (setCheck(cards[i], cards[j], cards[k])) {
          sets.push([cards[i], cards[j], cards[k]])
        }
      }
    }
  }
  return sets;
}

// function createRandomCard() {
//     return createCard(possibleColor[Math.floor(Math.random() * 3)],
//         possiblePattern[Math.floor(Math.random() * 3)],
//         possibleAmount[Math.floor(Math.random() * 3)],
//         possibleShape[Math.floor(Math.random() * 3)])
// }

// TODO concat en vez de push y flat
function createTableDeck(quantity) {
  tableDeck.push(shuffledDeck.splice(0, quantity));
  tableDeck = tableDeck.flat();
  return tableDeck;
}

function findSet(tableDeck) {
  let sets = [];
  let possibilities = findAllPossibilities(tableDeck);
  for (let triad of possibilities) {
    if (setCheck(triad[0], triad[1], triad[2])) {
      sets.push(triad);
    }
  }
  return sets;
}



function clearCardFromTable(tableDeck, card) {
  for (let i = 0; i < tableDeck.length; i++) {
    if (checkTwoCardsAreTheSame(card, tableDeck[i])) {
      tableDeck.splice(i, 1);
    }
  }
  return tableDeck;
}

//TABLEDECK

//TODO está mal el setfinder
function clearSetFromTable(tableDeck, card1, card2, card3) {
  if (setCheck(card1, card2, card3)) {
    clearCardFromTable(tableDeck, card1);
    clearCardFromTable(tableDeck, card2);
    clearCardFromTable(tableDeck, card3);
  }
  return tableDeck;
}

function checkTwoCardsAreTheSame(card1, card2) {
  return (
    card1.color == card2.color &&
    card1.pattern == card2.pattern &&
    card1.amount == card1.amount &&
    card1.shape == card2.shape
  );
}

//TODO
//TABLEDECK
// function completeTableDeck(tableDeck) {
  //table has to have 9 cards, unless there are less than 9 cards in the global deck
  //if there is no set, add 3 cards
// }

/* hasDuplicates function

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

console.log(hasDuplicates(createOrderedDeck()))

function hasDuplicatess(array) {
    var valuesSoFar = [];
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (valuesSoFar.indexOf(value) !== -1) {
            return true;
        }
        valuesSoFar.push(value);
    }
    return false;
}
*/

Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array) return false;

  // compare lengths - can save a lot of time
  if (this.length != array.length) return false;

  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i])) return false;
    } else if (this[i] != array[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });

let deck;
let card;
//  JS DOM
document
  .getElementById("create-random-card")
  .addEventListener("click", function () {
    card = new Card();
    card.createRandomCard();
    console.log(card);
  });

document.getElementById("create-deck").addEventListener("click", function () {
  deck = new Deck();
  deck.createOrderedDeck();
  console.log(deck.cards);
});

document.getElementById("print-deck").addEventListener("click", function () {
  console.log(deck);
});

document.getElementById("shuffle-deck").addEventListener("click", function () {
  deck.shuffle();
  console.log(deck);
});

document.getElementById("draw-one").addEventListener("click", function () {
  console.log(deck.drawCards(1));
  console.log(deck);
});

document.getElementById("draw-three").addEventListener("click", function () {
  console.log(deck.drawCards(3));
  console.log(deck);
});

document.getElementById("create-cards").addEventListener("click", function () {
  card1 = new Card("green", "empty", "two", "oval");
  card2 = new Card("cyan", "solid", "two", "oval");
  card3 = new Card("magenta", "stripped", "two", "oval");
  card4 = new Card("cyan", "empty", "two", "oval");
  console.log(card1, card2, card3, card4);
});
