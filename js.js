let card = [, , ,]

/* 0 = color
   1 = pattern
   2 = amount
   3 = shape */

function colorCheck(card1, card2, card3) {
    if (card1[0] === card2[0] && card2[0] === card3[0]) {
        return true
    }
    else if (card1[0] != card2[0] && card2[0] != card3[0] && card3[0] != card1[0]) {
        return true
    }
    else {
        return false
    }
}

function patternCheck(card1, card2, card3) {
    if (card1[1] === card2[1] && card2[1] === card3[1]) {
        return true
    }
    else if (card1[1] != card2[1] && card2[1] != card3[1] && card3[1] != card1[1]) {
        return true
    }
    else {
        return false
    }
}

function amountCheck(card1, card2, card3) {
    if (card1[2] === card2[2] && card2[2] === card3[2]) {
        return true
    }
    else if (card1[2] != card2[2] && card2[2] != card3[2] && card3[2] != card1[2]) {
        return true
    }
    else {
        return false
    }
}

function shapeCheck(card1, card2, card3) {
    if (card1[3] === card2[3] && card2[3] === card3[3]) {
        return true
    }
    else if (card1[3] != card2[3] && card2[3] != card3[3] && card3[3] != card1[3]) {
        return true
    }
    else {
        return false
    }
}

function setCheck(card1, card2, card3) {
    return (colorCheck(card1, card2, card3) &&  
    patternCheck(card1, card2, card3) &&  
    amountCheck(card1, card2, card3) &&  
    shapeCheck(card1, card2, card3)) 
}
