import { cardDeck, getCardValue, pullCard } from './modules/deck.mjs';

let deck = cardDeck
let hand = []
let i = 0
while (i < 10) {
    hand.push(pullCard(deck))
    i += 1
}

console.log(deck)
console.log(hand)

