let possibleColor = ["green", "cyan", "magenta"];
let possiblePattern = ["empty", "stripped", "solid"];
let possibleAmount = ["one", "two", "three"];
let possibleShape = ["triangle", "hexagon", "oval"];
let deck;
let table;
let setsFound = [];

/* node
   .load "archivo".js
*/

//TODO hacer los asserts de todas las funciones

/* *********** */
/* SET METHODS */
/* *********** */

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

function setCheck(card1, card2, card3) {
  return (
    colorCheck(card1, card2, card3) &&
    patternCheck(card1, card2, card3) &&
    amountCheck(card1, card2, card3) &&
    shapeCheck(card1, card2, card3)
  );
}

function findAllSets(cards) {
  sets = [];
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        if (setCheck(cards[i], cards[j], cards[k])) {
          sets.push([cards[i], cards[j], cards[k]]);
        }
      }
    }
  }
  return sets;
}

/* *************** */
/* TABLE FUNCTIONS */
/* *************** */

// ? tengo que pasar como parámetro a table?
// ? esto no me parece que tenga que ser una función
function createInitialTable(deck) {
  // chequeo primero que no esté con las 9 cartas iniciales
  if (typeof table === "undefined") {
    table = deck.drawCards(9);
  }
  return table;
}

// ? el nombre no estaría indicando muy bien que hace la función
// this function maintains the amount of table cards.
// the amount of cards has to be between 9 and a bigger multiple of 3, and it has to have at least one set
function checkTable(table) {
  if (findAllSets(table).length >= 1 || deck.cards.length == 0) {
    return true;
  } else {
    table.push(...deck.drawCards(3));
    return checkTable(table);
  }
}

// si deck vacio y no hay sets en la mesa => termina el juego

function clearCardFromTable(table, cardToDelete) {
  let deletedCardIndex = table.findIndex((card) =>
    card.checkIfTwoCardsAreTheSame(card, cardToDelete)
  );
  let deletedCard = table.splice(deletedCardIndex, 1);
  return deletedCard[0];
}

function deleteSetFromTable(card1, card2, card3) {
  let possibleSet = [card1, card2, card3];
  for (card in possibleSet) {
    clearCardFromTable(table, card);
  }
  setsFound.push(possibleSet);
}

/* **** */
/* GAME */
/* **** */

function trySetandRemoveIt(card1, card2, card3) {
  if (!setCheck(card1, card2, card3)) {
    return false
  } else {
    deleteSetFromTable(card1, card2, card3)
    checkTable()
    return true
  }
}

// TODO
// ? como hago para que el input de las 3 cartas vaya cambiando
function playSet(card1, card2, card3) {
  // crear deck shuffleado
  // repartir table inicial
  if (deck.cards.length == 0 && findAllSets(table).length == 0) {
    return setsFound;
  } else {
    deleteSetFromTable(table, card1, card2, card3);
    checkTable();
  }
}

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

document
  .getElementById("create-initial-table")
  .addEventListener("click", function () {
    createInitialTable(deck);
    console.log(table);
  });

document.getElementById("start-game").addEventListener("click", function () {
  deck = new Deck();
  deck.createOrderedDeck();
  deck.shuffle();
  createInitialTable(deck);
  for (carta of table) {
    createCardBtn(carta);
  }
  document.getElementById("start-game").classList.add("disabled");
});
