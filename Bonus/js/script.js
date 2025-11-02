// console.log("hello");


// Snack 1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let numberInput = prompt("Insert a number");

if(numberInput % 2 === 0){
    console.log(numberInput);
}
else{
    numberInput++;
    console.log(numberInput);
}


// Snack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const word1 = prompt("Insert your first word");
const word2 = prompt("Insert your second word");

let shortWord = "";
let longWord = "";

if (word1.length > word2.length){
    shortWord = word2;
    longWord = word1;
}
else {
    shortWord = word1;
    longWord = word2;
}
console.log(shortWord);
console.log(longWord);


// Snack 3
// Crea una variabile con un numero di 4 cifre e calcola la somma di tutte le cifre che compongono il numero.

const numberVar = 1234;
//console.log(numberVar.typeof);
let numberStr = numberVar.toString();
//console.log(numberStr.typeof);

const numberArray = Array.prototype.slice.call(numberStr);
//const numberArray = numberStr.split("");
console.log(numberArray);

//let sum = numberArray.reduce((a, b)=> a + b, 0);
let sum = 0;

for(let i = 0; i < numberArray.length; i++){
    let currentNumberStr = numberArray[i];
    let currentNumber = parseInt(currentNumberStr);
    console.log(currentNumber);
    sum += currentNumber;
}
console.log(`The sum of all the numbers in ${numberStr} is equal to ${sum}`);;

// Snack 4
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

// Snack 5
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di 5 invitati con nome e cognome.

// const nomi = [
//   "Albert",
//   "Leonardo",
//   "Marilyn",
//   "Michael",
//   "Serena",
//   "Elon",
//   "Frida",
//   "Steve",
//   "Beyoncé",
//   "David"
// ];

// const cognomi = [
//   "Einstein",
//   "da Vinci",
//   "Monroe",
//   "Jackson",
//   "Williams",
//   "Musk",
//   "Kahlo",
//   "Jobs",
//   "Knowles",
//   "Beckham"
// ];

// Snack 6
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.