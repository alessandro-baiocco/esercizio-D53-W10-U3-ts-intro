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

let genericNumber = 39; //questa è una normale assegnazione di un valore
// genericNumber = "ciao" questa riassegnazione in JS avrebbe funzionato ma in TS no perchè il contenuto all'inizio era un numero
// di conseguenza non è più possibile cambiarlo stessa cosa vale anche per gli altri tipi di dato

let numericArr: number[] = [9, 51, 124, 12345, 5125]; //  in TS è anche possibile decidere il genere di contenuto di arr e obj
//in questo esempio questo array può contenere solo numeri

numericArr.push(41); // quando proviamo a lavorare con un array dal contenuto DEFINITO TS ci suggerisce gli essatti metodi
//applicabili a quell'array o obj

type genericTypes = number | string;
let genericData: genericTypes[] = [5, 3, "ciao", 6]; // è possibile anche dare più di una possibilita di tipo ad un array

//il file TS non è ancora leggibile dal browser quindi è neccesario un compilatore di cui TSC fa al caso nostro

//TYPE INFERENCE

let randArr = [0, 52, null];
//     let randArr = (number | null)

//in casi come questo TS ci dice tutti i tipi da cui è composto un dato

//TYPE ANY
type randType = any;
let randArr2: randType[] = [4, null, undefined, "giacomo", true]; // in questo caso si disabilita il controllo di typescript ed è possibile
//dare un qualsiasi dato ad un array estremamente SCONSIGLIATO al massimo solo in caso d'emergenza

//type union

type T0 = Extract<"a" | "b" | "c", "a" | "d">;

// il type union confronta tutti i valori restituondoci quello più in comune altrimenti ci restituisce never
type genericTypes2 = number | string;
// permette anche di dare più di un tipo di dato ad un contenitore

//tipo tuple

const genericTuple: [number, string] = [4, "gatti"];
//le tuple sono una collezione di valori di tipologia fissa ma mutabili
genericTuple[0] = 6;
// genericTuple[0] = null // questo da errore causa: cambiamento del tipo

//interfaces

type person = {
  name: string;
  surname: string;
  age: number;
  glasses: boolean;
};

//questo è un'esempio di interfaces

const mario: person = {
  name: "mario",
  surname: "boh",
  age: 41,
  glasses: false,
  // country: "italy" //questa proprieta non può essere aggiunta
};

type game = {
  genre: string;
  game: string;
};

const luigi: person & game = {
  name: "luigi",
  surname: "bros",
  age: 51,
  glasses: false,
  genre: "platform",
  game: "superMarioBros",
};

//e possibile aggiungere più di una interfaces ad dato
