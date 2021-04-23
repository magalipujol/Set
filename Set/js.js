let possibleColor = ["green", "cyan", "magenta"];
let possiblePattern = ["empty", "stripped", "solid"];
let possibleAmount = ["one", "two", "three"];
let possibleShape = ["triangle", "hexagon", "oval"];


/* cards for assert
let card1 = {
    color: "green",
    pattern: "empty",
    amount: "one",
    shape: "triangle"
}

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

function setCheck(card1, card2, card3) {
    return (colorCheck(card1, card2, card3) &&
    patternCheck(card1, card2, card3) &&
    amountCheck(card1, card2, card3) &&
    shapeCheck(card1, card2, card3))
}

//CHECK I don't use the above function

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

//TODO suffledDeck should be an object, practice methods
function createTableDeck (quantity) {
    //suffledDeck creates a disordered deck only once, 
    //because I don't want to create it every time I call suffle()
    //TODO check if it has to be a global variable
    let shuffledDeck = shuffle(createOrderedDeck())
    return shuffledDeck.slice(0, quantity)
}

console.log(createTableDeck(9))

function findSet (tableDeck) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                setCheck()
            }}}
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