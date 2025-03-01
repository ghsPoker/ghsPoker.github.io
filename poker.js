import { cardDeck, getCardValue } from "./deck.js";

var deck = cardDeck
for (i in deck.length) {
    console.log(getCardValue(deck[i]))
}