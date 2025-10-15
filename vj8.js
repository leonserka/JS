function Automobil1(marka, model, godinaProizvodnje, trenutnaBrzina) {
    this.marka = marka;
    this.model = model;
    this.godinaProizvodnje = godinaProizvodnje;
    this.trenutnaBrzina = trenutnaBrzina;
  }
  
  Automobil1.prototype.dodajBrzinu = function() {
    this.trenutnaBrzina += 20;
  };
  
  Automobil1.prototype.prikaziBrzinu = function() {
    console.log("Trenutna brzina je " + this.trenutnaBrzina + " km/h.");
  };
  
  let mojAutomobil = new Automobil1("Toyota", "Camry", 2015, 60);

  mojAutomobil.dodajBrzinu()
  mojAutomobil.prikaziBrzinu();


//2.zadatak 
function Vozilo(marka,godinaProizvodnje){
    this.marka = marka
    this.godinaProizvodnje = godinaProizvodnje

}
 Vozilo.prototype.vozi = function(){
    console.log(" vozim " + this.marka + " vozila godiste " + this.godinaProizvodnje);
 }

function Automobil(marka,godinaProizvodnje,boja,brojVrata){
    Vozilo.call(this,marka,godinaProizvodnje) 
    this.boja = boja
    this.brojVrata = brojVrata

}
Automobil.prototype = Object.create(Vozilo.prototype);
Automobil.prototype.constructor = Automobil;


Automobil.prototype.parkiraj = function(){
    console.log(" automobil " + this.marka + " " + this.boja + " boje je parkiran! ");

}


function Motocikl(marka,godinaProizvodnje,tip){
    Vozilo.call(this,marka,godinaProizvodnje)
    this.tip = tip
}

Motocikl.prototype = Object.create(Vozilo.prototype);
Motocikl.prototype.constructor = Motocikl;

Motocikl.prototype.voziBrzo = function(){
    console.log(" vozim motocikl tipa " + this.tip + " marke " + this.marka + " godiste " + this.godinaProizvodnje + " brzo! ")

}

let auto = new Automobil("BMW", 2022, "crna", 5);
auto.vozi();
auto.parkiraj();

let moto = new Motocikl("honda", 2020, "sportski")
moto.vozi();
moto.voziBrzo();



//3.zadatak
class Zaposlenik {
    constructor(ime, prezime, email, ocjenaSposobnosti) {
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.ocjenaSposobnosti = ocjenaSposobnosti;
    }

    ispisi() {
        console.log(`${this.ime} ${this.prezime}, email: ${this.email}`);
    }

    ocijeniSposobnost(novaOcjena) {
        this.ocjenaSposobnosti = novaOcjena;
    }
}

class Programer extends Zaposlenik {
    constructor(ime, prezime, email, programskiJezik) {
        super(ime, prezime, email);
        this.programskiJezik = programskiJezik;
    }

    ispisi() {
        console.log(`${this.ime} ${this.prezime}, email: ${this.email}, programski jezik: ${this.programskiJezik}`);
    }
}

class Dizajner extends Zaposlenik{
    constructor(ime, prezime, email, softver){
        super(ime,prezime,email);
        this.softver = softver;
    }
    ispisi() {
        console.log(`${this.ime} ${this.prezime}, email: ${this.email}, softver: ${this.softver}`);
    }
}
  
const zaposlenik1 = new Zaposlenik('Pero', 'Perić', 'pero.peric@example.com', 4);
zaposlenik1.ispisi(); 
zaposlenik1.ocijeniSposobnost(4)


const programer1 = new Programer('Marko', 'Markić', 'marko.markic@example.com','JavaScript');
programer1.ispisi(); 


const dizajner1 = new Dizajner('Ana', 'Anić', 'ana.anic@example.com', 'Adobe Photoshop');
dizajner1.ispisi();