
const vinner = "Burt Reynolds"
const inpNavn = document.querySelector("#inpNavn");
            
            tekst.innerHTML =`
            <h1>Kjøre ${vinner} </h1>
            <p>I en automatisk loddtrekning har du, ${vinner}, blitt trukket ut<br>som den heldige vinneren av en splitter ny IPone med<br>inskripsjonen
            "I am ${vinner}".</p>
            <h2>Vinenren er ${vinner}</h2>
            <p>Du, ${vinner}, kan hente telefonen på Kolsås i morgen.</p>

            `;
            
            function visNavn(){
                tekst.innerHTML=`
                <h1>Kjøre ${inpNavn.value} </h1>
                <p>I en automatisk loddtrekning har du, ${inpNavn.value}, blitt trukket ut<br>som den heldige vinneren av en splitter ny IPone med<br>inskripsjonen "I am ${vinner}".</p>
                <h2>Vinenren er ${inpNavn.value}</h2>
                <p>Du, ${inpNavn.value}, kan hente telefonen på Kolsås i morgen.</p>

                `;
        }

        inpNavn.addEventListener("input",visNavn);