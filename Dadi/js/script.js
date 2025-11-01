//console.log("hello");

// Mail
// Crea un array con delle email di chi può acedere.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!



// const emailList = ["red@mail.com","blue@mail.com","green@mail.com"]

// let emailInput = prompt("Insert your email");

// for (let i = 0; i < emailList.length; i++){
//     let currentEmail = emailList[i];
//     if(currentEmail !== emailInput){
//         console.log("Something went wrong! Reinsert your email correctly ");
//     }
//     else{
//         console.log("Authentication valid! You can now access your email ");
//     }
// }



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"




    const randomNr = Math.floor(Math.random() * 6);
    console.log(randomNr);

    const userNr = prompt("Insert a number from 1 to 6")
    console.log(userNr);

    if (randomNr > userNr) {
        console.log("Computer is the winner!");
    }
    else{
        console.log("You are the winner!");
    }



