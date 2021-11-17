let possibleColor = ["green", "cyan", "magenta"];
let possiblePattern = ["empty", "stripped", "solid"];
let possibleAmount = ["one", "two", "three"];
let possibleShape = ["triangle", "hexagon", "oval"];

const carddd = new Card('green', 'empty', 'one', 'triangle')
/* node
   .load "archivo".js
*/

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

let card6 = {
    color: "cyan",
    pattern: "stripped",
    amount: "three",
    shape: "hexagon"
}
*/

//TODO hacer los asserts de todas las funciones


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
    if (checkTwoCardsAreTheSame(card1, card2) ||
        checkTwoCardsAreTheSame(card2, card3) ||
        checkTwoCardsAreTheSame(card3, card1)
    ) {
        return "TA MAL"
    }
    return (colorCheck(card1, card2, card3) &&
        patternCheck(card1, card2, card3) &&
        amountCheck(card1, card2, card3) &&
        shapeCheck(card1, card2, card3))
}

// function createRandomCard() {
//     return createCard(possibleColor[Math.floor(Math.random() * 3)],
//         possiblePattern[Math.floor(Math.random() * 3)],
//         possibleAmount[Math.floor(Math.random() * 3)],
//         possibleShape[Math.floor(Math.random() * 3)])
// }

function createCard(color, pattern, amount, shape) {
    return {
        color: color,
        pattern: pattern,
        amount: amount,
        shape: shape
    }
}

function createCardFromNumbers(color, pattern, amount, shape) {
    return {
        color: possibleColor[color],
        pattern: possiblePattern[pattern],
        amount: possibleAmount[amount],
        shape: possibleShape[shape]
    }
}


function createOrderedDeck() {
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
let tableDeck = []

// TODO concat en vez de push y flat
function createTableDeck(quantity) {
    tableDeck.push(shuffledDeck.splice(0, quantity))
    tableDeck = tableDeck.flat()
    return tableDeck
}

function findSet(tableDeck) {
    let sets = []
    let possibilities = findAllPossibilities(tableDeck)
    for (let triad of possibilities) {
        if (setCheck(triad[0], triad[1], triad[2])) {
            sets.push(triad)
        }
    }
    return sets
}

function findAllPossibilities(arr) {
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

function clearCardFromTable(tableDeck, card) {
    for (let i = 0; i < tableDeck.length; i++) {
        if (checkTwoCardsAreTheSame(card, tableDeck[i])) {
            tableDeck.splice(i, 1)
        }
    }
    return tableDeck
}


//TABLEDECK

//TODO está mal el setfinder
function clearSetFromTable(tableDeck, card1, card2, card3) {
    if (setCheck(card1, card2, card3)) {
        clearCardFromTable(tableDeck, card1)
        clearCardFromTable(tableDeck, card2)
        clearCardFromTable(tableDeck, card3)
    }
    return tableDeck
}

function checkTwoCardsAreTheSame(card1, card2) {
    return ((card1.color == card2.color) &&
            (card1.pattern == card2.pattern) &&
            (card1.amount == card1.amount) &&
            (card1.shape == card2.shape))
}

//TODO
//TABLEDECK
function completeTableDeck(tableDeck) {
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

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});


let deck;
let card;
//  JS DOM
document.getElementById("create-random-card").addEventListener("click", function () {
    card = new Card()
    card.createRandomCard()
    console.log(card);
})

document.getElementById("create-deck").addEventListener("click", function () {
    deck = new Deck()
    deck.createOrderedDeck()
    console.log(deck.cards);
})

document.getElementById("print-deck").addEventListener("click", function () {
    console.log(deck);
})

document.getElementById("shuffle-deck").addEventListener("click", function () {
    deck.shuffle()
    console.log(deck)
})

document.getElementById("draw-one").addEventListener("click", function () {
    console.log(deck.drawCards(1));
    console.log(deck);
})

document.getElementById("draw-three").addEventListener("click", function () {
    console.log(deck.drawCards(3));
    console.log(deck);
})
