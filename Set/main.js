let possibleColor = ["green", "cyan", "magenta"];
let possiblePattern = ["empty", "stripped", "solid"];
let possibleAmount = ["one", "two", "three"];
let possibleShape = ["triangle", "hexagon", "oval"];


let card1 = {
    color: "green",
    pattern: "empty",
    amount: "one",
    shape: "triangle"
}

/* cards for assert
let card2 = {
    color: "green",
    pattern: "empty",
    amount: "one",
    shape: "triangle"
}

let card3 = {
    color: "green",
    pattern: "empty",
    amount: "one",
    shape: "triangle"
}

let card4 = {
    color: "cyan",
    pattern: "solid",
    amount: "two",
    shape: "oval"
}

let card5 = {
    color: "magenta",
    pattern: "stripped",
    amount: "three",
    shape: "hexagon"
}

let card6 = {
    color: "cyan",
    pattern: "stripped",
    amount: "three",
    shape: "hexagon"
}
*/



function colorCheck(card1, card2, card3) {
    return ((card1.color === card2.color && card2.color === card3.color) || (card1.color != card2.color && card2.color != card3.color && card3.color != card1.color))
}

function patternCheck(card1, card2, card3) {
    return ((card1.pattern === card2.pattern && card2.pattern === card3.pattern) ||
        (card1.pattern != card2.pattern && card2.pattern != card3.pattern && card3.pattern != card1.pattern)
    )
}

function amountCheck(card1, card2, card3) {
    return ((card1.amount === card2.amount && card2.amount === card3.amount) ||
        (card1.amount != card2.amount && card2.amount != card3.amount && card3.amount != card1.amount))
}

function shapeCheck(card1, card2, card3) {
    return ((card1.shape === card2.shape && card2.shape === card3.shape) ||
        (card1.shape != card2.shape && card2.shape != card3.shape && card3.shape != card1.shape))
}

//TODO it would be better if I could do card1 === card2 === card3
function setCheck(card1, card2, card3) {
    if (checkTwoCardsAreTheSame(card1, card2) &&
        checkTwoCardsAreTheSame(card2, card3)
        ) {
        return false
    }
    return (colorCheck(card1, card2, card3) &&
    patternCheck(card1, card2, card3) &&
    amountCheck(card1, card2, card3) &&
    shapeCheck(card1, card2, card3))
}

function createRandomCard() {
    return createCard(possibleColor[Math.floor(Math.random() * 3)],
        possiblePattern[Math.floor(Math.random() * 3)],
        possibleAmount[Math.floor(Math.random() * 3)],
        possibleShape[Math.floor(Math.random() * 3)])
}

function createCard(color, pattern, amount, shape) {
    return {
        color: color,
        pattern: pattern,
        amount: amount,
        shape: shape
    }
}

function createOrderedDeck () {
    let deckArr = []
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    deckArr.push(createCard(possibleColor[i], possiblePattern[j], possibleAmount[k], possibleShape[l]))
                }
            }
        }
    }
    return deckArr
}


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


let shuffledDeck = shuffle(createOrderedDeck())


function createTableDeck (quantity) {
    return shuffledDeck.splice(0, quantity)
}


function findSet (tableDeck) {
    let sets = []
    let possibilities = allPos(tableDeck)
    for (let triad of possibilities) {
        if (setCheck(...triad)) {
            sets.push(triad)
        }
    }
    return sets
}

function allPos (arr) {
    let pos = []
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                pos.push([arr[i], arr[j], arr[k]])
            }
        }
    }
    return pos
}

//TODO
function clearCardFromTable (tableDeck, card) {
    
        if (checkTwoCardsAreTheSame(card, card1)) {

        }

}

//TODO
function clearSetFromTable (tableDeck, card1, card2, card3) {

}

//
function checkTwoCardsAreTheSame (card1, card2) {
    return ((card1.color && card1.pattern && card1.amount && card1.shape) == 
    (card2.color && card2.pattern && card2.amount && card2.shape))
}

//TODO 
function completeTableDeck (tableDeck) {
    //table has to have 9 cards, unless there are less than 9 cards in the global deck
    //if there is no set, add 3 cards
}

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