export const cardDeck = [
    { suit: "hearts", value: "Ace" },
    { suit: "hearts", value: "2" },
    { suit: "hearts", value: "3" },
    { suit: "hearts", value: "4" },
    { suit: "hearts", value: "5" },
    { suit: "hearts", value: "6" },
    { suit: "hearts", value: "7" },
    { suit: "hearts", value: "8" },
    { suit: "hearts", value: "9" },
    { suit: "hearts", value: "10" },
    { suit: "hearts", value: "Jack" },
    { suit: "hearts", value: "Queen" },
    { suit: "hearts", value: "King" },
    
    { suit: "diamonds", value: "Ace" },
    { suit: "diamonds", value: "2" },
    { suit: "diamonds", value: "3" },
    { suit: "diamonds", value: "4" },
    { suit: "diamonds", value: "5" },
    { suit: "diamonds", value: "6" },
    { suit: "diamonds", value: "7" },
    { suit: "diamonds", value: "8" },
    { suit: "diamonds", value: "9" },
    { suit: "diamonds", value: "10" },
    { suit: "diamonds", value: "Jack" },
    { suit: "diamonds", value: "Queen" },
    { suit: "diamonds", value: "King" },
    
    { suit: "clubs", value: "Ace" },
    { suit: "clubs", value: "2" },
    { suit: "clubs", value: "3" },
    { suit: "clubs", value: "4" },
    { suit: "clubs", value: "5" },
    { suit: "clubs", value: "6" },
    { suit: "clubs", value: "7" },
    { suit: "clubs", value: "8" },
    { suit: "clubs", value: "9" },
    { suit: "clubs", value: "10" },
    { suit: "clubs", value: "Jack" },
    { suit: "clubs", value: "Queen" },
    { suit: "clubs", value: "King" },
    
    { suit: "spades", value: "Ace" },
    { suit: "spades", value: "2" },
    { suit: "spades", value: "3" },
    { suit: "spades", value: "4" },
    { suit: "spades", value: "5" },
    { suit: "spades", value: "6" },
    { suit: "spades", value: "7" },
    { suit: "spades", value: "8" },
    { suit: "spades", value: "9" },
    { suit: "spades", value: "10" },
    { suit: "spades", value: "Jack" },
    { suit: "spades", value: "Queen" },
    { suit: "spades", value: "King" }
];

export function getCardValue(card) {
    if (!card || !card.value) return null; 

    const cardValues = { "Jack": 10, "Queen": 10, "King": 10, "Ace": 11 };
    return cardValues[card.value] || parseInt(card.value, 10);
}

export function popRand(arr) {
    if (!arr) return null;

    let rand = Math.floor(Math.random() * arr.length)
    let card = arr[rand]
    arr.splice(rand, 1)
    return card
}

export function getCardColor(obj) {
    if (!obj || !obj.suit) return null;

    if (obj.suit == "hearts" || obj.suit == "diamonds") return "red";
    else return "black"

}
