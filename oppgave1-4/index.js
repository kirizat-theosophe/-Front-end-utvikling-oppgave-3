
const inpNavn = document.getElementById("inpNavn");
const Beskrivelse = document.getElementById("Beskrivelse");
const output = document.getElementById("output");

function visNaveogBeskrivelse(){
    output.innerHTML = `Hei ${inpNavn.value} ${Beskrivelse.value}`;

}
inpNavn.addEventListener("input", visNaveogBeskrivelse);
Beskrivelse.addEventListener("input", visNaveogBeskrivelse);