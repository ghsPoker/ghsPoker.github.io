import { cardDeck, getCardValue, pullCard } from './modules/deck.mjs';

let deck = cardDeck
let i = 0
while (i < 10) {
    console.log(pullCard(deck))
    i += 1
}

console.log(deck.length)