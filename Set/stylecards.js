let exampleCard = createRandomCard()
console.log(exampleCard)

function addColorProperty(object) {
    var card = document.getElementById("card1")
    card.classList.add(object.color)
}

function addShapeProperty(object) {
    var card = document.getElementById("card1")
    card.classList.add(object.shape)
}



addColorProperty(exampleCard)
addShapeProperty(exampleCard)