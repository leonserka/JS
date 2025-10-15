//1.zadatak
document.getElementById("prednosti").style.backgroundColor = "yellow";

//2.zadatak

var elements = document.getElementsByClassName('odjeljak');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = "16px";
}

//3.zadatak
document.getElementById("prednosti").textContent = "Ova sekcija je promijenjena korištenjem DOM-a";


//4.zadatak
let sections = document.querySelectorAll("section");
sections.forEach(function(section) {
section.style.backgroundColor = "blue";
});
//5.zadatak

function promijeniPozadinu() {
    document.body.style.backgroundColor = "lightgreen";
    }
    let button = document.createElement("button");
    button.textContent = "Promijeni boju pozadine";
    button.onclick = promijeniPozadinu;
    document.body.appendChild(button);


//6.zadatak

function prikaziTekst() {
    let paragraf = document.getElementById("prazanParagraf");
    paragraf.textContent = "Ovo je proizvoljan tekst prikazan u paragrafu.";
    }
    let buttonText = document.createElement("button");
    buttonText.textContent = "Prikaži tekst";
    buttonText.onclick = prikaziTekst;
    document.body.appendChild(buttonText);
    
    let paragraf = document.createElement("p");
    paragraf.id = "prazanParagraf";
    document.body.appendChild(paragraf);

//7.zadatak
function pictureChange()
    {
    document.getElementById('theImage').src="split2.jpg";
    }

//8.zadatak
function dodajParagraf(){
    const a = document.getElementById("paragrafi")
    const pa = document.createElement("p");
    pa.textContent ="Ovo je novi paragraf "
    a.appendChild(pa)
}