// console.log("hello");


// Snack 1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let numberInput = prompt("Snack 1: Insert a number");

if (numberInput % 2 === 0) {
    //console.log(numberInput);
}
else {
    numberInput++;
}
console.log(`Snack 1: The number is ${numberInput}`);




// Snack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const word1 = prompt("Snack 2: Insert your first word");
const word2 = prompt("Snack 2: Insert your second word");

let shortWord = "";
let longWord = "";

if (word1.length > word2.length) {
    shortWord = word2;
    longWord = word1;
}
else {
    shortWord = word1;
    longWord = word2;
}
console.log(`Snack 2: The short word is ${shortWord}`);
console.log(`Snack 2: The long word is ${longWord}`);




// Snack 3
// Crea una variabile con un numero di 4 cifre e calcola la somma di tutte le cifre che compongono il numero.

const numberVar = 1234;
//console.log(numberVar.typeof);
let numberStr = numberVar.toString();
//console.log(numberStr.typeof);

const numberStrArray = Array.prototype.slice.call(numberStr);
//const numberArray = numberStr.split("");
console.log(`Snack 3: The string array is ${numberStrArray}`);

//let sum = numberArray.reduce((a, b)=> a + b, 0);
let sum = 0;

for (let i = 0; i < numberStrArray.length; i++) {
    let currentNumberStr = numberStrArray[i];
    let currentNumber = parseInt(currentNumberStr);
    //console.log(currentNumber);
    sum += currentNumber;
}
console.log(`Snack 3: The sum of all the numbers in ${numberStr} is equal to ${sum}`);;



// Snack 4
// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall’utente.

let inputNumber = prompt("Snack 4: Insert a number please:");
let n = parseInt(inputNumber);
let arrayN = [];

for (let i = 1; i <= n; i++) {
    arrayN.push(i);
}
console.log(`Snack 4: First n numbers list is: ${arrayN}`);

for (let i = 0; i < arrayN.length; i++) {
    let currentNumber = arrayN[i];
    console.log(`Snack 4:  ${currentNumber} at power 3 equals to ${currentNumber ** 3}`);
}



// Snack 5
// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di 5 invitati con nome e cognome.

const nomi = [
    "Albert",
    "Leonardo",
    "Marilyn",
    "Michael",
    "Serena",
    "Elon",
    "Frida",
    "Steve",
    "Beyoncé",
    "David"
];

const cognomi = [
    "Einstein",
    "da Vinci",
    "Monroe",
    "Jackson",
    "Williams",
    "Musk",
    "Kahlo",
    "Jobs",
    "Knowles",
    "Beckham"
];

let randomFullNamesList = [];
let randomFullName = "";
let randomName = "";
let randomSurname = "";
let random5NamesList = [];


for (let i = 0; i < nomi.length; i++) {
    let currentName = nomi[i];
    randomName = nomi[Math.floor(Math.random() * nomi.length)];

    for (let j = 0; j < cognomi.length; j++) {
        let currentSurname = cognomi[j];
        randomSurname = cognomi[Math.floor(Math.random() * cognomi.length)];
    }
    randomFullNamesList += (randomName + " " + randomSurname + " ");
}
console.log(`Snack 5: Here are random 10 names: ${randomFullNamesList}`);


// for (let i = 0; i < 5; i++) {
//     randomNamesList.push(randomFullName);
// }
// console.log(`Snack 5: Here are random 5 names: ${randomNamesList}`);




// Snack 6
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha 
// meno elementi fino a quando ne avrà tanti quanti l’altro.

//            0  1  2  3  4  5  6  7  8  9
let array1 = [4, 4, 4, 4, 6];
//            0  1  2  3  4   
let array2 = [1, 2, 3, 4, 5, 7, 6, 8, 8, 9]

let array1size = 0;
let array2size = 0;

let addElem = 0;

for (let i = 0; i < array1.length; i++) {
    array1size = i;
}
console.log(`Snack 6: Size of array1 is ${array1size}`);

for (let j = 0; j < array2.length; j++) {
    array2size = j;
}
console.log(`Snack 6: Size of array2 is ${array2size}`);


if (array1size > array2size) {
    addElem = array1size - array2size;
    console.log(`Snack 6: Array1 is bigger then Array2 by ${addElem} elemets`);

    for (let k = 0; k < addElem; k++) {
        array2.push(Math.floor(Math.random() * 10));
    }
    console.log(`Snack 6: Initially shorter array2 is now bigger ${array2}`);
}
else {
    addElem = array2size - array1size;
    console.log(`Snack 6: Array2 is bigger then Array1 by ${addElem} elemets`);

    for (let k = 0; k < addElem; k++) {
        array1.push(Math.floor(Math.random() * 10));
    }
    console.log(`Snack 6: Initially shorter array1 is now bigger ${array1}`);
}

// for (let k = 0; k < addElem; k++) {
//     if (array1size > array2size) {
//         addElem = array1size - array2size;
//         console.log(`Snack 6: Array1 is bigger then Array2 by ${addElem} elemets`);

//         array2.push(Math.floor(Math.random() * 10));
//         console.log(`Snack 6: Initially shorter array2 is now bigger ${array2}`);
//     }
//     else{
//         console.log(`Snack 6: Array2 is bigger then Array1 by ${addElem} elemets`);

//         array1.push(Math.floor(Math.random() * 10));
//         console.log(`Snack 6: Initially shorter array1 is now bigger ${array1}`)
//     }
// }