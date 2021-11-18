class Card {
  constructor(color, pattern, amount, shape) {
    this.color = color;
    this.pattern = pattern;
    this.amount = amount;
    this.shape = shape;
  }

  createRandomCard() {
      this.color = possibleColor[Math.floor(Math.random() * 3)],
      this.pattern = possiblePattern[Math.floor(Math.random() * 3)],
      this.amount = possibleAmount[Math.floor(Math.random() * 3)],
      this.shape = possibleShape[Math.floor(Math.random() * 3)]
  }

  checkIfTwoCardsAreTheSame(card1, card2) {
    return (card1.color == card2.color && card1.pattern == card2.pattern && card1.amount == card2.amount && card1.shape == card2.shape)
  }

}
