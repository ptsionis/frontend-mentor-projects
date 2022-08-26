'use strict';

function changeValues(_this) {
    const basicPrice = document.getElementById('basic-price');
    const professionalPrice = document.getElementById('professional-price');
    const masterPrice = document.getElementById('master-price');

    if (_this.checked) {
        basicPrice.innerHTML = '19.99';
        professionalPrice.innerHTML = '24.99';
        masterPrice.innerHTML = '39.99';
    }
    else {
        basicPrice.innerHTML = '199.99';
        professionalPrice.innerHTML = '249.99';
        masterPrice.innerHTML = '399.99';
    }
}