//console.log("hello");

// Mail
// Crea un array con delle email di chi può acedere.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!



const emailList = ["red@mail.com", "blue@mail.com", "green@mail.com"]

let emailInput = prompt("Insert your email");
let emailExists = false;

for (let i = 0; i < emailList.length; i++) {
    let currentEmail = emailList[i];
    if (currentEmail === emailInput) {
        emailExists = true;
    }
}
if (emailExists == true) {
    console.log("Authentication valid! You can now access your email");
}
else {
    console.log("Something went wrong! Reinsert your email correctly");
}
