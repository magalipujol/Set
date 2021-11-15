class Deck {
  constructor(cards) {
    this.cards = cards;
  }

//   TODO this should assign cards to an already created deck, not create a new one
  createOrderedDeck() {
    let possibleColor = ["green", "cyan", "magenta"];
    let possiblePattern = ["empty", "stripped", "solid"];
    let possibleAmount = ["one", "two", "three"];
    let possibleShape = ["triangle", "hexagon", "oval"];

    let deckArr = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 3; l++) {
            deckArr.push(
              createCard(
                possibleColor[i],
                possiblePattern[j],
                possibleAmount[k],
                possibleShape[l]
              )
            );
          }
        }
      }
    }
    return new Deck(deckArr);
  }
}
