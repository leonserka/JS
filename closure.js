//1.zadatak    
const randomNumbers = [];

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.round(Math.random() * 100 + 100);
    randomNumbers.push(randomNumber);
}

console.log("Originalni niz:", randomNumbers);

randomNumbers.sort(function(a, b) {
    return a - b;
});

console.log("Sortirani niz:", randomNumbers);


//2.zadatak
const brojeviClosure = () => {
    let sumaParnih = 0;
    let sumaNeparnih = 0;

    const unesiBroj = (broj) => {
        if (broj === 0) {
            return { sumaParnih, sumaNeparnih };
        }
        if (broj % 2 === 0) {
            sumaParnih += broj;
        } else {
            sumaNeparnih += broj;
        }
        return null;
    };

    return unesiBroj;
};

const unos = brojeviClosure();
while (true) {
    const broj = parseInt(prompt("Unesite broj (0 za kraj): "), 10);

    const rezultat = unos(broj);
    if (rezultat) {
        const { sumaParnih, sumaNeparnih } = rezultat;
        console.log(`Suma parnih brojeva: ${sumaParnih}`);
        console.log(`Suma neparnih brojeva: ${sumaNeparnih}`);
        break;
    }
}




 //3.zadatak
function closureFunction() {
    const message = "Programirati nije tesko";

    function innerFunction() {
        return message;
    }

    return innerFunction;
}

const myFunction = closureFunction();
console.log(myFunction());


//4.zadatak
function sum(a) {
    return (b, c) => {
        return a * b * c
    }
}
let x = sum(10);
console.log(x(3, 12));
// ili
console.log(sum(10)(3, 12));
// funkcija sum(a) poprima vrjednost x , te pozivamo unutarnju funkciju gdje b ima vrjednost 3 , a c vrjednost 12 , te pomocu => funkcije vracamo rezultat vrjednosti a*b*c


//5. zadatak
function umnozak(a) {
    return function (b) {
        if (b == undefined) {
            return a
        } else if (b < 20) {
            return umnozak(a * b)
        } else {
            return umnozak(a)
        }
    }
}

let umnozakArrow = a => b => {
    return b == undefined ? a : (b < 20) ? umnozak(a * b) : umnozak(a);
}
console.log(`Funkcija umnozak ${umnozak(1)(15)(30)(40)(2)(21)()}`)
console.log(`Arrow funkcija umnozak ${umnozakArrow(1)(15)(30)(40)(2)(21)()}`)