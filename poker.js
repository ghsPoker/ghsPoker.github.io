import { cardDeck, getCardValue } from './modules/deck.mjs';

var deck = cardDeck
for (i in deck.length) {
    console.log(getCardValue({value: "K"}))
}