function Auto(marka, model, tipGuma = "Ljetne") {
    let baterija = 100; 

    function stanje() { 
        return baterija > 20 ? "Sigurno" : "Napuniti bateriju!";
    }

    this.marka = marka;
    this.model = model;
    this.tipGuma = tipGuma;

    this.vozi = function(km) {
        baterija -= km * 0.5;
        if (baterija < 0) baterija = 0;
    };

    this.getSigurnost = stanje;

    Object.defineProperty(this, "baterija", {
        get: () => baterija,
        set: (v) => { if (v >= 0 && v <= 100) baterija = v; }
    });
}
const auto1 = new Auto("Tesla", "Model 3");
auto1.vozi(30);
console.log("Auto1 baterija:", auto1.baterija);
console.log("Auto1 sigurnost:", auto1.getSigurnost());


class Auto2 {
    #baterija = 100;

    constructor(marka, model, tipGuma = "Zimske") {
        this.marka = marka;
        this.model = model;
        this.tipGuma = tipGuma;
    }
    #stanje() {
        return this.#baterija > 20 ? "sigurno" : "Slaba baterija!";
    }
    vozi(km) {
        this.#baterija -= km * 0.6;
        if (this.#baterija < 0) this.#baterija = 0;
    }
    get baterija() {
        return this.#baterija;
    }
    set baterija(v) {
        if (v >= 0 && v <= 100) this.#baterija = v;
    }
    get sigurnost() {
        return this.#stanje();
    }
}

const auto2 = new Auto2("BMW", "i4");
auto2.vozi(80);
console.log("Auto2 baterija:", auto2.baterija);
console.log("Auto2 sigurnost:", auto2.sigurnost);
