import { cardDeck, getCardValue, pullCard } from './modules/deck.mjs';

window.onload = function()//called when window gets loaded
{
    
};
function cardSprite(newSprite, cardID)//newSprite = string/path, cardindex = string
{
    const cardImg = document.getElementById(cardID);
    cardImg.src = newSprite;
}