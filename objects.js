//1.zadatak
const ocjena = (k1, k2, sem) => {
    return 0.42 * k1 + 0.42 * k2 + 0.16 * sem;
};

const Currying = (k1) => (k2) => (sem) => ocjena(k1, k2, sem);

console.log(`Postotak ostvaren na kolegiju ${Currying(50)(80)(80)}`);


//2. zadatak
const rezultat = kolegij => brojBodova => ukupanBrojBodova =>
    console.log(`Iz kolegija ${kolegij} ostvarili ste ${(brojBodova/ukupanBrojBodova*100).toFixed(2)}%`);


const rezultat2 = function(kolegij) {
    return function(brojBodova) {
        return function(ukupanBrojBodova) {
            console.log(`Iz kolegija ${kolegij} ostvarili ste ${(brojBodova/ukupanBrojBodova*100).toFixed(2)}%`);
        };
    };
};
rezultat("PWKS")(25)(35);
rezultat2("PWKS")(25)(35);

//3.zadatak 
function mnozi(a) {
    return function (b) {
        if (b == undefined) {
            return a
        } else if (b % 2 != 0 || b==0) {
            return mnozi(a)
        }  else if (a % 2 != 0 || a==0) {
            return mnozi(b)
        }else{
            return mnozi(a * b)
        }
    }
}

console.log(`Funkcija umnozak ${mnozi(5)(5)(13)(10)(14)(0)(4)(2)()}`)





//4.5.6. zadatak
function Kolegij(godina, semestar, kol1, kol2) {
    this.godina = godina;
    this.semestar = semestar;
    this.kol1 = kol1;
    this.kol2 = kol2;
    this.ocjena_rez = kol1 * 0.5 + kol2 * 0.5;

    this.ocjena = function() {
        console.log(`Postotak riješenosti: ${this.ocjena_rez}`);
    };

    this.info = function() {
        console.log(`Student na predmetu PWKS, ${this.godina}. godina, ${this.semestar}. semestar, ostvario je ${Math.round(this.ocjena_rez)}%`);
    };
}

let obj1 = new Kolegij(3, 2, 80, 90);
let obj2 = new Kolegij(4, 1, 75, 65);

obj2.ime = "Leon";
obj2.prezime = "Serka";
obj2.status = "Ostvarenje";

console.log(`Student ${obj2.ime} ${obj2.prezime} ima ${Math.round(obj2.ocjena_rez)}%`);

delete obj2.ime;
delete obj2.prezime;
delete obj2.status;


console.log(obj2);
obj1.ocjena();
obj1.info();
obj2.ocjena();
obj2.info();