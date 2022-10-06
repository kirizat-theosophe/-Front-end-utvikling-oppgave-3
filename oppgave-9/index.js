
const inpFornavn = document.querySelector("#inpFornavn");
const inpEtternavn = document.querySelector("#inpEtternavn");
const inpStilling = document.querySelector("#inpStilling");
const inpBilde = document.querySelector("#inpBilde");
const bilde = document.querySelector("#bilde");

function visFornavn_Etternavn() {
fornavn_etternavn.innerHTML = `${inpFornavn.value} ${inpEtternavn.value}`;
}

function visStilling() {
    stilling.innerHTML = inpStilling.value;
}

function visBilde(){
    bilde.src = inpBilde.value;
    bilde.style.display = "block";
}

inpFornavn.addEventListener("input", visFornavn_Etternavn);
inpEtternavn.addEventListener("input",visFornavn_Etternavn);
inpStilling.addEventListener("input",visStilling);
inpBilde.addEventListener("input",visBilde);
