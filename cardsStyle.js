function createCardBtn(card) {
    const cardBtn = document.createElement('button')
    cardBtn.classList.add('btn')
    cardBtn.classList.add('btn-card')
    cardBtn.innerHTML = card.color + '\n' +  card.pattern +  '\n' +  card.amount + '\n' +  card.shape
    cardBtn.setAttribute('id', 'card'+ '-' + card.color + '-' + card.pattern + '-' + card.amount + '-' + card.shape)
    document.getElementById('game-cards').appendChild(cardBtn)
}