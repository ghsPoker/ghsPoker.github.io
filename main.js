//import { cardDeck, getCardValue, pullCard, getCardColor } from './modules/deck.mjs';


window.onload = function() {
    //called when window gets loaded
    
    
};


function cardSprite(obj, id = null) {
    let suitDir = "./assets/" + obj.suit + "Background.png"
    let valueDir = "./assets/" + getCardColor(obj) + obj.value + ".png"
    //return suitDir, valueDir //for testing
    
    if (id) {
        document.getElementById(id).src = suitDir
    }
}
function clickedOnCard(obj,i)//basicly just a figet toy
{
    obj.classList.add("clickedOnCardAnim");
    if(i == 0)
    {
        const card1 = document.getElementById("card1");
        card1.classList.remove("clickedOnCardAnim");
    }else
    {
        const card0 = document.getElementById("card0");
        card0.classList.remove("clickedOnCardAnim");
    }
}
const card0 = document.getElementById('card0');
const card1 = document.getElementById('card1');
card0.addEventListener("click",function(){clickedOnCard(card0,0)});
card1.addEventListener("click",function(){clickedOnCard(card1,1)});