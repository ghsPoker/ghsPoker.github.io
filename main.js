import { cardDeck, getCardValue, pullCard, getCardColor } from './modules/deck.mjs';

/*
window.onload = function() {
    //called when window gets loaded
    
};
*/

function cardSprite(obj, id = null) {
    let suitDir = "./assets/" + obj.suit + "Background.png"
    let valueDir = "./assets/" + getCardColor(obj) + obj.value + ".png"
    //return suitDir, valueDir //for testing
    
    if (id) {
        document.getElementById(id).src = suitDir
    }
}

