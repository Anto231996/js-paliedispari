/* Palindroma:

-Chiedere all’utente di inserire una parola
-Creare una funzione per capire se la parola inserita è palindroma




Pari e Dispari

-L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
-Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
-Sommiamo i due numeri
-Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
-Dichiariamo chi ha vinto.*/


//PALINDROMA

/* const word = prompt("inserisci una parola");

function palindroma (word){
    let reverseWord
    for ( let i = word.length -1; i >= 0; i-- ){
        console.log(word.charAt(i))
    }

    if(reverseWord == word){return true}
    else {return false};
} */


//PARI E DISPARI

const evenOrOddUser = prompt("pari o dispari");
const userNum = parseInt( prompt("scegli un numero"));


console.log(userNum)

function randomNum() {
    return Math.floor(Math.random() * 5) + 1;
}

const sum = userNum + randomNum()
console.log(sum)

function isEven (sum){
    if(sum % 2 == 0){
        return true
    } else {
        return false
    }
}