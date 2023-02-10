import { checkBank, checkBeer, checkVine, checkPepsy, sellAll } from './shopModule.js';

let bankInfo = document.querySelector('.bank__info');
bankInfo.textContent = `${checkBank()} грн.`

let beerInfo = document.querySelector('.beer__info');
beerInfo.textContent = `${checkBeer()} шт.`

let vineInfo = document.querySelector('.vine__info');
vineInfo.textContent = `${checkVine()} шт.`

let pepsyInfo = document.querySelector('.pepsy__info');
pepsyInfo.textContent = `${checkPepsy()} шт.`

let amount = document.querySelector('.amount');
let productList = document.querySelector('.center__info');

let orderBeer = 0;
let orderVine = 0;
let orderPepsy = 0;

let products = document.querySelector('.products');
let product = "";
products.addEventListener('click', (event) => {
    if (event.target.type == 'radio') {        
        product = event.target.value;
    }
})

let addButton = document.querySelector('.add__btn');
addButton.addEventListener('click', () => {    
    if (product == "beer") {
        if (checkBeer() < amount.value) {
            alert("Not enough beer")
        }
        else {            
            let product = document.createElement('p');            
            product.classList.add('product__item');
            product.textContent = `Пиво: ${amount.value}шт.`;
            productList.appendChild(product);
            orderBeer = amount.value;
        }
    }
    if (product == "vine") {
        if (checkVine() < amount.value) {
            alert("Not enough vine")
        }
        else {            
            let product = document.createElement('p');            
            product.classList.add('product__item');
            product.textContent = `Вино: ${amount.value}шт.`;
            productList.appendChild(product);
            orderVine = amount.value;
        }
    }
    if (product == "pepsy") {
        if (checkPepsy() < amount.value) {
            alert("Not enough vine")
        }
        else {            
            let product = document.createElement('p');            
            product.classList.add('product__item');
            product.textContent = `Пепсі: ${amount.value}шт.`;
            productList.appendChild(product);
            orderPepsy = amount.value;
        }
    }
})

let buyButton = document.querySelector('.buy__btn');
let rightSide = document.querySelector('.right');
buyButton.addEventListener('click', () => {    
    rightSide.innerHTML = productList.innerHTML;
    let sum = document.createElement('p');            
    sum.classList.add('product__item');
    sum.textContent = sellAll(orderBeer, orderVine, orderPepsy);
    rightSide.appendChild(sum);
    productList.textContent = ""  ;
    bankInfo.textContent = `${checkBank()} грн.`;
    beerInfo.textContent = `${checkBeer()} шт.`;
    pepsyInfo.textContent = `${checkPepsy()} шт.`;
    vineInfo.textContent = `${checkVine()} шт.`;
    orderBeer = 0;
    orderVine = 0;
    orderPepsy = 0;
    amount.value = 0;
})