"use strict";

const adviceId = document.getElementById("adviceId");
const adviceQuote = document.getElementById("adviceQuote");
let adviceObj = {};

function nextAdvice() {
    fetch('https://api.adviceslip.com/advice', {method: "GET"})
    .then(res => res.json())
    .then(data => {
        adviceId.innerHTML = 'ADVICE #' + data.slip.id;
        adviceQuote.innerHTML = "\"" + data.slip.advice + "\"";
    })
}

nextAdvice();