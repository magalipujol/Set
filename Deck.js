class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  createOrderedDeck() {
    let deckArr = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 3; l++) {
            deckArr.push(
              new Card(
                possibleColor[i],
                possiblePattern[j],
                possibleAmount[k],
                possibleShape[l]
              )
            )
          }
        }
      }
    }
    this.cards = deckArr;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  drawOneCard() {
    return this.cards.pop();
  }

  drawCards(amount) {
    let cards = [];
    for (let i = 0; i < amount; i++) {
      cards.push(this.drawOneCard())
    }
    return cards
  }

}
