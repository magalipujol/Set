class Card {
  constructor(color, pattern, amount, shape) {
    this.color = color;
    this.pattern = pattern;
    this.amount = amount;
    this.shape = shape;
  }

  createRandomCard() {
    let possibleColor = ["green", "cyan", "magenta"];
    let possiblePattern = ["empty", "stripped", "solid"];
    let possibleAmount = ["one", "two", "three"];
    let possibleShape = ["triangle", "hexagon", "oval"];

    return new Card(
      possibleColor[Math.floor(Math.random() * 3)],
      possiblePattern[Math.floor(Math.random() * 3)],
      possibleAmount[Math.floor(Math.random() * 3)],
      possibleShape[Math.floor(Math.random() * 3)]
    );
  }
}
