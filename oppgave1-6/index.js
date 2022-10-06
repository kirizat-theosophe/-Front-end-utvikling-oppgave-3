// javascript
const inpA = document.querySelector("#inpA");
const inpB = document.querySelector("#inpB");
const txtSum = document.querySelector("#txtSum");
const velgRegneart = document.querySelector("#velgRegneart");

function leggSammen() {
    const a = Number(inpA.value);
    const b = Number(inpB.value);
    
    const regneart = velgRegneart.value;
    console.log(regneart);
    
    const sum = a + b;
    const diff = a - b;
    const produkt = a * b;
    const kvotient = a / b;
    
    if(regneart === "+") {
        txtSum.innerText = sum;
    }
    if(regneart === "-") {
        txtSum.innerText = diff;
    }
    if(regneart === "*") {
        txtSum.innerText = produkt;
    }
    if(regneart === "/") {
        txtSum.innerText = kvotient;
    }
    
    
}


inpA.addEventListener("input", leggSammen);
inpB.addEventListener("input", leggSammen);
velgRegneart.addEventListener("change", leggSammen);