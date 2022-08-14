'use strict';

function showAnswer(_this) {
    let question = _this.querySelector("h4");
    let counterStr = _this.querySelector(".counter").innerHTML;
    console.log("What came through innerHTML, counterStr = " + counterStr);
    let counter = parseInt(counterStr);
    console.log("After parseInt, counter = " + counter);
    let arrow = _this.querySelector(".question-arrow");
    let answer = _this.querySelector(".answer");
    
    if (counter % 2 == 0) {
        console.log("Modulo 0");
        question.style.color = 'hsl(238, 29%, 16%)';
        question.style.fontWeight = '700';
        arrow.style.rotate = "180deg";
        answer.style.display = 'block';
    }
    else {
        console.log("Modulo 1");
        question.style.color = 'hsl(237, 12%, 33%)';
        question.style.fontWeight = '400';
        arrow.style.rotate = "0deg";
        answer.style.display = 'none';
    }

    counter++;

    console.log("After counter increment, counter = " + counter);
    console.log("What will be passed to counterStr: " + counter.toString());
    _this.querySelector(".counter").innerHTML = counter;
}