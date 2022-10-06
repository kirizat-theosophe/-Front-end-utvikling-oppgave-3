const inpBilde = document.querySelector ("#inpBilde");
const inpBredde = document.querySelector ("#inpBredde");
const inpTittel = document.querySelector ("#inpTittel");
const bilde = document.querySelector ("#bilde");
const output = document.querySelector ("#output");

function visBilde(){
    bilde.src = inpBilde.Value;
}

function endreBredde(){
    document.querySelector("img").style.width = `${inpBredde.Value}px`;
}

function skrivTittel(){
    output.innerHTML = inpTittel.Value;
}

inpBilde.addEventListener("input", visBilde);
inpBredde.addEventListener("input", endreBredde);
inpTittel.addEventListener("input", skrivTittel);

