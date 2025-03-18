//import { cardDeck, getCardValue, pullCard, getCardColor } from './modules/deck.mjs';


window.onload = function() {
    /*//called when window gets loaded
    setTimeout(()=>{
        //doing something after n sec
        //cardSprite(pullCard(cardDeck),"card3");
        alert("hello, i waited 5 seconds");
    },5000);*/
};


function cardSprite(obj, id = null) {//id =card0/1/2/3/4/5/6
    let suitDir = "./assets/" + obj.suit + "Background.png"
    let valueDir = "./assets/" + getCardColor(obj) + obj.value + ".png"
    //return suitDir, valueDir //for testing
    
    if (id) {
        let valueChild = document.getElementById(id).querySelectorAll(".cardFg");//gets children
        let suitChild = document.getElementById(id).querySelectorAll(".cardBg");//like the ones in my basement
        valueChild.src = valueDir;
        suitChild.src = suitDir;
    }
}
function clickedOnCard(obj,i,b)//basicly just a figet toy
{
    obj.classList.add("clickedOnCardAnim");
    const card1 = document.getElementById("card1");
    const card0 = document.getElementById("card0");
    if(i == 0 && b)
    {
        card1.classList.remove("clickedOnCardAnim");
    }else if(b)
    {
        card0.classList.remove("clickedOnCardAnim");
    }else
    {
        card0.classList.remove("clickedOnCardAnim");
        card1.classList.remove("clickedOnCardAnim");
    }
}
const card0 = document.getElementById('card0');
const card1 = document.getElementById('card1');
card0.addEventListener("mouseover",function(){clickedOnCard(card0,0,true)});
card1.addEventListener("mouseover",function(){clickedOnCard(card1,1,true)});
card0.addEventListener("mouseleave",function(){clickedOnCard(card0,0,false)});
card1.addEventListener("mouseleave",function(){clickedOnCard(card1,1,false)});