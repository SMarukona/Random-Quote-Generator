//importing qoutes file
import {quotes} from "./quotes.js";

//Declaring selectors
const quoteGenBtn = document.querySelector('#qoute-generator-btn');
const quoteDisplay = document.querySelector('#quote-display');
const quoteAuther = document.querySelector('#quote-auther');

//Default quote display
quoteDisplay.innerHTML = "The purpose of our lives is to be happy";
quoteAuther.innerHTML = "Dalai Lama";

//Displaying quotes randomly
quoteGenBtn.addEventListener("click", function(){
        let quoteRandomNumber = Math.floor(Math.random()*quotes.length);
        quoteDisplay.innerHTML = quotes[quoteRandomNumber][0];
        quoteAuther.innerHTML = quotes[quoteRandomNumber][1];
   });



   

