//1. zadatak
let brojevi = [10, 20, 30, 40, 50];
console.log(brojevi);
brojevi.splice(0, 0, "0");
console.log("dodaj element na pocetak niza" + brojevi);
brojevi.splice(brojevi.length,0,"60");
console.log("dodaj element na kraj niza" + brojevi);
brojevi.splice(brojevi.length - 1,0,"55" );
console.log("dodaj element na predzadnje mjesto niza" + brojevi);
brojevi.splice(2,1);
console.log("izbrisi drugi element niza" + brojevi);
brojevi.splice(brojevi.length - 1,1);
console.log("izbrisi zadnji element niza" + brojevi);
brojevi.splice(2,1,"15")
console.log("izmijeni drugi element" + brojevi);
let sum = 0;
for (let i = 0; i < brojevi.length; i++){
    sum += Number(brojevi[i]);
    
}console.log("suma je: " + sum);
for (let i = 0; i < brojevi.length; i++){
    console.log("svi elementi niza: " + brojevi[i] );
}


//2.zadatak
let obj_trgovina = [
    {
    naziv_trgovine: "tommy",
    naziv_proizvoda: "kruh", 
    godina_proizvodnje: 2025, 
    cijena: 3, 
    kolicina: 100 ,
    popust:10
    },
    {
    naziv_trgovine: "victa",
    naziv_proizvoda: "naocale", 
    godina_proizvodnje: 2023, 
    cijena: 100, 
    kolicina: 17 ,
    popust:20
    },
    {
    naziv_trgovine: "zabac",  
    naziv_proizvoda: "noz", 
    godina_proizvodnje: 2024, 
    cijena: 5, 
    kolicina: 70 ,
    popust:0
    }
];
const proizvodiManjiOd50 = obj_trgovina.filter(proizvod => {
    return proizvod.cijena < 50; 
}).map(proizvod => {
    return proizvod.naziv_proizvoda; 
});
console.log("Proizvodi sa cijenom manjom od 50:" + proizvodiManjiOd50);

// 3.zadatak
const totalGod = obj_trgovina.reduce((sum, kolicin)=> {
    return sum + kolicin.kolicina;
}, 0); 
console.log("Zbroj kolicine artikala funkcijom reduce() " + totalGod);

//4.zadatak
const imena = obj_trgovina.map(trgovina =>{
    return trgovina.naziv_trgovine;
});
console.log("Ispis imena funkcijom map() " + imena);

//5.zadatak
let provjera = (a) => a > 0 ? true : false
console.log(provjera(5));  
console.log(provjera(-3)); 
console.log(provjera(0));

let provjera2 = num => (num % 2 ===0 ? "paran" : "neparan");
console.log(provjera2(5)); 
console.log(provjera2(6)); 

let kub = num => num * num * num 
console.log(kub(2));


let printanje = ispis => {
    return ispis; 
};
console.log(printanje("hello world")); 