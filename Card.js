class Card {
  constructor(color, pattern, amount, shape) {
    this.color = color;
    this.pattern = pattern;
    this.amount = amount;
    this.shape = shape;
  }

  // TODO no me anda :(
  createRandomCard() {
      this.color = possibleColor[Math.floor(Math.random() * 3)],
      this.pattern = possiblePattern[Math.floor(Math.random() * 3)],
      this.amount = possibleAmount[Math.floor(Math.random() * 3)],
      this.shape = possibleShape[Math.floor(Math.random() * 3)]
  }
}
