import { cardDeck, getCardValue } from './modules/deck.mjs';

cardDeck.splice(1)
console.log(cardDeck)
console.log(cardDeck[0])
console.log(getCardValue(cardDeck[0]))
console.log(cardDeck.length)
