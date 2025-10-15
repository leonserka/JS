alert("moj prvi JS program!");

console.log("moj prvi JS program!");

/* 1.zadatak
function izracunaj_Aritmeticku_Sredinu() {
    let broj1 = parseInt(prompt("Unesite prvi prirodni broj:"));
    let broj2 = parseInt(prompt("Unesite drugi prirodni broj:"));
    let broj3 = parseInt(prompt("Unesite treci prirodni broj:"));

   if (broj1 > 0 && broj2 > 0 && broj3 > 0) {
    return console.log("Aritmeticka sredina je: " + (broj1 + broj2 + broj3) / 3);
} else {
    return console.log(" unesite samo prirodne brojeve (pozitivne cjele brojeve).");
}
}

izracunaj_Aritmeticku_Sredinu();
*/

/* 2.zadatak
function izracunaj_Operatore() {
    let broj1 = parseInt(prompt("Unesite prvi broj:"));
    let broj2 = parseInt(prompt("Unesite drugi broj:"));
    let operator = prompt("Unesite operator (+, -, /, *):");
    if (isNaN(broj1)) {
        return console.log("prvi broj nije broj!!");
    }

    if (isNaN(broj2)) {
        return console.log("drugi broj nije broj!!");
    }
    if (operator === "+") {
        return console.log("rezultat odabrane operacije = " + (broj1 + broj2)) ;
    } else if (operator === "-") {
        return console.log("rezultat odabrane operacije = " + (broj1 - broj2)) ;
    } else if (operator === "/") {
        if (broj2 === 0 ) {
            return console.log("Djeljenje sa nulom nije dozvoljeno!");  
        }else{
            return console.log("rezultat odabrane operacije = " + (broj1 / broj2)) ;
        }
    } else if (operator === "*") {
        return console.log("rezultat odabrane operacije = " + (broj1 * broj2)) ;
    } else {
       return console.log("Neispravan operator! Unesite +, -, / ili *.");
    }
}

izracunaj_Operatore();
*/

/* 3.zadatak
function izracunaj_prvu_znamenku() {
    let broj1 = parseInt(prompt("Unesite deseteroznamenkasti broj:"));
    let rezultat;
   if (broj1 < 1000000000 || broj1 > 10000000000) {
    return console.log("broj nije deseteroznamenkasti! ");
} 

while(broj1 >=9 ){

    broj1 = Math.floor(broj1/10);
    
}rezultat = broj1;
return console.log("rezultat:"+ rezultat);
}

izracunaj_prvu_znamenku();
*/
/* 4.zadatak
function odredi_Godišnje_Doba() {
    let mjesec = parseInt(prompt("Unesite broj mjeseca (1-12):"));

    switch (mjesec) {
        case 1:
        case 2:
        case 3:
            alert("Zima");
            break;
        case 4:
        case 5:
        case 6:
            alert("Proljeće");
            break;
        case 7:
        case 8:
        case 9:
            alert("Ljeto");
            break;
        case 10:
        case 11:
        case 12:
            alert("Jesen");
            break;
        default:
            alert("Pogrešan broj mjeseca! Unesite broj između 1 i 12.");
    }
}

odredi_Godišnje_Doba();
*/


function izracunaj_broj_ponavljanja() {
    let broj1 = parseInt(prompt("Unesite broj:"));
    let broj2 = broj1;
    let z = parseInt(prompt("Unesite znamenku koju želite prebrojati:"));
    let cnt = 0; 
    if (isNaN(broj1)|| isNaN(z)) {
        return console.log("prvi broj nije broj!!");
    }

while(broj1 >0 ){

    if (broj1 % 10 == z) {  
        cnt++;  
    }
    broj1 = Math.floor(broj1 / 10);  
}
return console.log("U broju: " + broj2 + " imamo " + cnt + " pojavljivanja broja " + z);

}
izracunaj_broj_ponavljanja();
