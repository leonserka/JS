//1.zadatak
function delayedGreeting(delay,message){
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log(message);
            resolve();
        },delay);
    });
}
delayedGreeting(3000,"Promise funkcija prvi zdk")

//2.zadatak
function checkWeather(city) {
return new Promise((resolve, reject) => {
const weatherData = {
Zagreb: "sunčano",
Split: "oblačno",
Rijeka: "kišovito",
Osijek: "sunčano",
Zadar: "vjetrovito"
};

setTimeout(() => {
const weather = weatherData[city];

if (!weather) {
reject(`Podaci za grad ${city} nisu dostupni.`);
} else if (weather === "sunčano") {
resolve(`Vrijeme je sunčano u ${city}.`);
} else {
reject(`Vrijeme nije sunčano u ${city}.`);
}
}, 1000);
});
}


checkWeather("Zagreb")
.then(poruka => console.log(poruka))
.catch(greska => console.error(greska));

checkWeather("Rijeka")
.then(poruka => console.log(poruka))
.catch(greska => console.error(greska));

//3.zadatak
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
   }
    async function example() {
    console.log('Prije čekanja');
    await delay(4000); // čeka 2 sekunde
    console.log('Nakon čekanja');
   }
   example();

//4.zadatak
function getData(callback) {
    setTimeout(function() {
    const data = { message: 'Ovo su podaci' };
    callback(data);
}, 4000);
}
function processData(data) {
console.log('Obrada podataka:', data.message);
}
getData(processData);
console.log('Nastavak izvršavanja');

//5.ZADATAK
function calculateSum(a, b) {
return new Promise(resolve => {
setTimeout(() => resolve(a + b), 1000);
});
}

async function calculateAndPrintSum(a, b) {
const result = await calculateSum(a, b);
console.log(`Zbroj je: ${result}`);
}
calculateAndPrintSum(3, 4);


//6.zadatak
function checkNumber(broj1) {
return new Promise(function(resolve, reject){
if(typeof broj1=='number'){
if (broj1 % 2 === 0) {
resolve("Broj je paran.");
} else {
reject("Broj je neparan.");
}
}
else{
reject('nije broj.')
}
});
}
checkNumber(6)
.then(function(a){
console.log(a)
})
.catch(function(b){
console.log(b)
})

checkNumber(7)
.then(function(a){
console.log(a)
})
.catch(function(b){
console.log(b)
})

checkNumber('aa')
.then(function(a){
console.log(a)
})
.catch(function(b){
console.log(b)
})