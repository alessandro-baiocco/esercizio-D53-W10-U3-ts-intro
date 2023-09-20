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
//e possibile aggiungere più di una interfaces ad dato
