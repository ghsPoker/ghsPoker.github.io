import { cardDeck, getCardValue, pullCard } from './modules/deck.mjs';
document.getElementById("pullCard").onclick = function click() {
    const c0 = document.getElementById('C0');
    const c1 = document.getElementById('C1');
    const val = pullCard(deck)
    document.getElementById("cock").innerHTML = ""
}
window.onload = function()//called when window gets loaded
{

};
function cardSprite(newSprite, cardID)//newSprite = string/path, cardindex = string
{
    const cardImg = document.getElementById(cardID);
    cardImg.src = newSprite;
}