'use strict';

var tipPct = -1;

function peopleValid(_this) {
    const invalidPeople = document.getElementById('invalid-people');
    
    if (_this.value == '0' && _this.value !== '') {
        invalidPeople.style.visibility = 'visible';
        document.getElementById('no-of-people').style.border = '3px solid orange';
    }
    else {
        invalidPeople.style.visibility = 'hidden';
        document.getElementById('no-of-people').style.border = '3px solid hsl(185, 41%, 84%)';
    }
}

function resetForm() {
    document.getElementById('invalid-people').style.visibility = 'hidden';
    document.getElementById('bill-input').value = null;
    document.getElementById('custom-tip').value = null;
    document.getElementById('no-of-people').value = null;
    document.getElementById('tip-dollars').innerHTML = '&dollar;0.00';
    document.getElementById('total-dollars').innerHTML = '&dollar;0.00';
    focusBtn(null);
}

function calculateAmounts() {
    let billAmount = document.getElementById('bill-input').value;
    billAmount = parseFloat(billAmount);
    let noOfPeople = document.getElementById('no-of-people').value;
    noOfPeople = parseInt(noOfPeople);

    if (noOfPeople != 0 && noOfPeople != null && tipPct >= 0) {
        document.getElementById('tip-dollars').innerHTML = '&dollar;' + parseFloat((tipPct/100*billAmount)/noOfPeople).toFixed(2);
        document.getElementById('total-dollars').innerHTML = '&dollar;' + ((billAmount + tipPct/100*billAmount) / noOfPeople).toFixed(2);
    }
    else {
        document.getElementById('tip-dollars').innerHTML = '&dollar;0.00';
        document.getElementById('total-dollars').innerHTML = '&dollar;0.00';
    }
}

function focusBtn(_this) {
    document.getElementById('btn5').style.backgroundColor = 'hsl(183, 100%, 15%)';
    document.getElementById('btn5').style.color = 'hsl(0, 0%, 100%)';
    document.getElementById('btn10').style.backgroundColor = 'hsl(183, 100%, 15%)';
    document.getElementById('btn10').style.color = 'hsl(0, 0%, 100%)';
    document.getElementById('btn15').style.backgroundColor = 'hsl(183, 100%, 15%)';
    document.getElementById('btn15').style.color = 'hsl(0, 0%, 100%)';
    document.getElementById('btn25').style.backgroundColor = 'hsl(183, 100%, 15%)';
    document.getElementById('btn25').style.color = 'hsl(0, 0%, 100%)';
    document.getElementById('btn50').style.backgroundColor = 'hsl(183, 100%, 15%)';
    document.getElementById('btn50').style.color = 'hsl(0, 0%, 100%)';
    if (_this != null) {
        _this.style.backgroundColor = 'hsl(172, 67%, 45%)';
        _this.style.color = 'hsl(183, 100%, 15%)';

        tipPct = _this.innerHTML;
        tipPct = parseInt(tipPct.slice(0, -1));
        calculateAmounts();
    }
}

function customTip(_this) {
    if (_this.value > 0) {
        tipPct = _this.value;
        focusBtn(null);
        calculateAmounts();
    } 
}