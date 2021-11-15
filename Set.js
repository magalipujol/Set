class Set{
    constructor(card1, card2, card3){
        this.card1 = card1
        this.card2 = card2
        this.card3 = card3
    }

    checkSet(){
        return (colorCheck(this.card1, this.card2, this.card3) &&
            patternCheck(this.card1, this.card2, this.card3) &&
            amountCheck(this.card1, this.card2, this.card3) &&
            shapeCheck(this.card1, this.card2, this.card3))
    }    
}