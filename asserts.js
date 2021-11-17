let cardd1 = new Card('green', 'empty', 'one', 'triangle');
let cardd2 = new Card('green', 'empty', 'one', 'triangle');
let cardd3 = new Card('magenta', 'empty', 'one', 'triangle');
let cardd4 = new Card('magenta', 'empty', 'one', 'triangle');
let set1 = new Set([cardd1, cardd2, cardd3]);
let set2 = new Set([cardd1, cardd2, cardd4]);
// console.assert(set1.checkSet() === true, 'set1 is a set');

// console.assert(colorCheck({color:"green"}, {color:"green"}, {color:"green"}))
// console.assert(colorCheck({color:"green"}, {color:"magenta"}, {color:"cyan"}))

// console.assert(setCheck({color: "green", pattern: "empty", amount: "one", shape: "triangle"},
// {color: "green", pattern: "empty", amount: "one", shape: "triangle"},
// {color: "green", pattern: "empty", amount: "one", shape: "triangle"}) == "TA MAL")
// console.assert(setCheck({color: "green", pattern: "empty", amount: "one", shape: "triangle"},
//                          {color: "magenta", pattern: "solid", amount:"two", shape: "oval"},
//                          {color: "cyan", pattern: "stripped", amount:"three", shape: "hexagon"}))

// console.assert(createCard("green", "one", "two", "three").color == "green")

// console.assert(createOrderedDeck().length == 81)

// console.assert(findSet([
//     createCardFromNumbers(0, 0, 0, 0),
//     createCardFromNumbers(0, 0, 0, 0),
//     createCardFromNumbers(1, 0, 1, 0),
//     createCardFromNumbers(2, 0, 2, 0),
// ].length==1))

// console.assert(findSet([
//     createCardFromNumbers(0, 0, 0, 0),
//     createCardFromNumbers(1, 0, 1, 0),
//     createCardFromNumbers(2, 0, 2, 0),

//     createCardFromNumbers(1, 1, 1, 1),
//     createCardFromNumbers(1, 2, 1, 2),
// ].length==2))

// console.assert(findAllPossibilities([1, 2, 3, 4, 5]).equals([
//     [1, 2, 3],
//     [1, 2, 4],
//     [1, 2, 5],
//     [1, 3, 4],
//     [1, 3, 5],
//     [1, 4, 5],
//     [2, 3, 4],
//     [2, 3, 5],
//     [2, 4, 5],
//     [3, 4, 5],
// ]))



// console.assert(clearCardFromTable([
//     createCardFromNumbers(1, 1, 1, 1)
// ], createCardFromNumbers(1, 1, 1, 1)).equals([]))

