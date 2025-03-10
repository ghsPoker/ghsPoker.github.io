import {randInt} from "./random.mjs"

export const cardDeck = [
    { suit: "hearts", value: "A" },  ///00
    { suit: "hearts", value: "2" },  ///01
    { suit: "hearts", value: "3" },  ///02
    { suit: "hearts", value: "4" },  ///03
    { suit: "hearts", value: "5" },  ///04
    { suit: "hearts", value: "6" },  ///05
    { suit: "hearts", value: "7" },  ///06
    { suit: "hearts", value: "8" },  ///07
    { suit: "hearts", value: "9" },  ///08
    { suit: "hearts", value: "10" }, ///09
    { suit: "hearts", value: "J" },  ///10
    { suit: "hearts", value: "Q" },  ///11
    { suit: "hearts", value: "K" },  ///12
    
    { suit: "diamonds", value: "A" },  ///13
    { suit: "diamonds", value: "2" },  ///14
    { suit: "diamonds", value: "3" },  ///15
    { suit: "diamonds", value: "4" },  ///16
    { suit: "diamonds", value: "5" },  ///17
    { suit: "diamonds", value: "6" },  ///18
    { suit: "diamonds", value: "7" },  ///19
    { suit: "diamonds", value: "8" },  ///20
    { suit: "diamonds", value: "9" },  ///21
    { suit: "diamonds", value: "10" }, ///22
    { suit: "diamonds", value: "J" },  ///23
    { suit: "diamonds", value: "Q" },  ///24
    { suit: "diamonds", value: "K" },  ///25
    
    { suit: "clubs", value: "A" },  ///26
    { suit: "clubs", value: "2" },  ///27
    { suit: "clubs", value: "3" },  ///28
    { suit: "clubs", value: "4" },  ///29
    { suit: "clubs", value: "5" },  ///30
    { suit: "clubs", value: "6" },  ///31
    { suit: "clubs", value: "7" },  ///32
    { suit: "clubs", value: "8" },  ///33
    { suit: "clubs", value: "9" },  ///34
    { suit: "clubs", value: "10" }, ///35
    { suit: "clubs", value: "J" },  ///36
    { suit: "clubs", value: "Q" },  ///37
    { suit: "clubs", value: "K" },  ///38
    
    { suit: "spades", value: "A" },  ///39
    { suit: "spades", value: "2" },  ///40
    { suit: "spades", value: "3" },  ///41
    { suit: "spades", value: "4" },  ///42
    { suit: "spades", value: "5" },  ///43
    { suit: "spades", value: "6" },  ///44
    { suit: "spades", value: "7" },  ///45
    { suit: "spades", value: "8" },  ///46
    { suit: "spades", value: "9" },  ///47
    { suit: "spades", value: "10" }, ///48
    { suit: "spades", value: "J" },  ///49
    { suit: "spades", value: "Q" },  ///50
    { suit: "spades", value: "K" }   ///51
];

export function getCardValue(obj) {
    if (!obj || !obj.value) return null; 

    const cardValues = { "J": 10, "Q": 10, "K": 10, "A": 11 };
    return cardValues[obj.value] || parseInt(obj.value, 10);
}

export function pullCard(arr){
    if (!arr) return null;

    let random = randInt(arr.length);
    console.log(random);
    console.log(arr.length);
    let card = arr[random];
    console.log(card);
    arr.splice(random, 1);
    return card;
}