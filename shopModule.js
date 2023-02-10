let amountBeer = 80;
let amountVine = 45;
let amountPepsy = 70;
let priceBeer = 50;
let pricetVine = 50;
let pricePepsy = 50;
let bank = 1000;

function checkBank() {
    return bank
}

function checkBeer() {
    return amountBeer;        
}

function checkVine() {
    return amountVine
}

function checkPepsy() {
    return amountPepsy
}

function sellAll(beer, vine, pepsy) {    
    bank+= beer*priceBeer + vine*pricetVine + pepsy*pricePepsy;
    amountBeer = amountBeer - beer;
    amountVine = amountVine - vine;
    amountPepsy = amountPepsy - pepsy;
    return `Всього: ${beer*priceBeer + vine*pricetVine + pepsy*pricePepsy} грн.`
}

export { checkBank, checkBeer, checkVine, checkPepsy, sellAll };