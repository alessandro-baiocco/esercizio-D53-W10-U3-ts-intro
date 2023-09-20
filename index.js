// Spiegazione generica (Cos'è, a cosa serve, che problema risolve, differenze con JS semplice)
// Il compilatore TS (perché è necessario? e come si usa?)
// La Type Inference
// Il tipo ‘any’
// Il tipo Union
// Il tipo Tuple
// Le Interfaces in TS
// typescript è sostanzialmente un'estenzione di js che permette di scrivere del codice più pulito e ordinato e allo stesso tempo di
// di far lavorate tutti allo stesso modo(ovviamente con delle limitazioni) , come scritto prima typescript permette a tutti di lavorare allo
// stesso modo e di tenere più facilmente traccia del dato che si sta portando dietro
//vediamo alcune differenza con il JS
var genericNumber = 39; //questa è una normale assegnazione di un valore
// genericNumber = "ciao" questa riassegnazione in JS avrebbe funzionato ma in TS no perchè il contenuto all'inizio era un numero
// di conseguenza non è più possibile cambiarlo stessa cosa vale anche per gli altri tipi di dato
var numericArr = [9, 51, 124, 12345, 5125]; //  in TS è anche possibile decidere il genere di contenuto di arr e obj
//in questo esempio questo array può contenere solo numeri
numericArr.push(41); // quando proviamo a lavorare con un array dal contenuto DEFINITO TS ci suggerisce gli essatti metodi
var genericData = [5, 3, "ciao", 6]; // è possibile anche dare più di una possibilita di tipo ad un array
//il file TS non è ancora leggibile dal browser quindi è neccesario un compilatore di cui TSC fa al caso nostro
//TYPE INFERENCE
var randArr = [0, 52, null];
var randArr2 = [4, null, undefined, "giacomo", true]; // in questo caso si disabilita il controllo di typescript ed è possibile
// permette anche di dare più di un tipo di dato ad un contenitore
//tipo tuple
var genericTuple = [4, "gatti"];
//le tuple sono una collezione di valori di tipologia fissa ma mutabili
genericTuple[0] = 6;
//questo è un'esempio di interfaces
var mario = {
    name: "mario",
    surname: "boh",
    age: 41,
    glasses: false,
    // country: "italy" //questa proprieta non può essere aggiunta
};
var luigi = {
    name: "luigi",
    surname: "bros",
    age: 51,
    glasses: false,
    genre: "platform",
    game: "superMarioBros",
};
// è possibile anche se non si sa con certezza che valore ci sara usare un valore generics
// grazie al Generic il tipo di "other" viene deciso al momento dell'utilizzo dell'interfaccia
var clock1 = {
    type: "digital",
    material: "plastic",
    other: null,
};
var clock2 = {
    type: "analog",
    material: "wood",
    other: ["old", "used"],
};
//passiamo tramite il parametro il tipo di valore da usare
/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
var area = function (l1, l2) {
    return l1 * l2;
};
area(4, 6);
//-----------------------------------------------------------
/* ESERCIZIO 2
   Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
   La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
   la loro somma moltiplicata per tre.
  */
/* SCRIVI QUI LA TUA RISPOSTA */
var crazySum = function (n1, n2) {
    var n3 = n1 + n2;
    if (n1 === n2) {
        return n3 * 3;
    }
    else {
        return n3;
    }
};
crazySum(2, 5);
//----------------------------------------------------------------------------------------------
/* ESERCIZIO 3
   Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
   Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
  */
/* SCRIVI QUI LA TUA RISPOSTA */
var crazyDiff = function (n1) {
    if (n1 > 19) {
        return Math.abs(n1 - 19) * 3;
    }
    else {
        return n1 - 19;
    }
};
crazyDiff(23);
//------------------------------------------
/* ESERCIZIO 4
   Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
   se n è uguale a 400.
  */
/* SCRIVI QUI LA TUA RISPOSTA */
var boundary = function (n1) {
    if ((20 <= n1 && n1 <= 100) || n1 === 400) {
        return true;
    }
    else {
        return false;
    }
};
//------------------------------------------------------------
/* ESERCIZIO 5
   Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
   La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
   ritornare la stringa originale senza alterarla.
  */
/* SCRIVI QUI LA TUA RISPOSTA */
/* ESERCIZIO 6
   Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
   di 3 o di 7. (Suggerimento: usa l'operatore modulo)
  */
/* SCRIVI QUI LA TUA RISPOSTA */
//---------------------------------------------------------
/* ESERCIZIO 7
   Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
  */
/* SCRIVI QUI LA TUA RISPOSTA */
//-------------------------------------------------------------
/* ESERCIZIO 8
   Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
   La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
  */
/* SCRIVI QUI LA TUA RISPOSTA */
/* ESERCIZIO 9
   Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
   della stringa originale.
  */
/* SCRIVI QUI LA TUA RISPOSTA */
/* ESERCIZIO 10
   Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
  */
/* SCRIVI QUI LA TUA RISPOSTA */
