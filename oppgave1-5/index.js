// javascript
const inpA = document.querySelector("#inpA");
const inpB = document.querySelector("#inpB");
const txtSum = document.querySelector("#txtSum");

function leggSammen() {
    const a = Number(inpA.value);
    const b = Number(inpB.value);
    
    const sum = a + b;
    txtSum.innerText = sum;
}

inpA.addEventListener("change", leggSammen);
inpB.addEventListener("change", leggSammen);

inpA.addEventListener("input", leggSammen);
inpB.addEventListener("input", leggSammen);