// ho eseguito GET su endpoint API tramite Postman
// mi ha tornato un array con 6 oggetti/
//**
// 
/* [
    {
        "id": 1,
        "title": "Skate Park",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
    },
    {
        "id": 2,
        "title": "Passeggiata",
        "date": "16-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
    },
    {
        "id": 3,
        "title": "Alpi",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
    },
    {
        "id": 4,
        "title": "Sagra",
        "date": "21-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
    },
    {
        "id": 5,
        "title": "Watergun",
        "date": "23-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
    },
    {
        "id": 6,
        "title": "Riviera",
        "date": "30-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
    }
] */
//ogniuno contiene : id, tittle, date, url dell'immagine

//questi dati mi serviranno per genereare la card dinamica che serve per il milestone 3






//ora seleziono il contenitore della card board sul CSS (Prima avevo scritto getElementById(board) ma era sbagliato perché getElementById richiede una stringa e funziona solo con gli id. Il mio elemento invece aveva una classe .board, quindi ho usato querySelector(”.board”) che accetta i selettori CSS.)
const board = document.querySelector(".board") 

//controllo che il contenitore esista
console.log(board);



//ora faccio la chiamata GET con axios

//qui gestisco la risposta positiva
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
// qui gestisco i dati, dunque: estraggo i dati della risposta
        const data = response.data;

        // e controllo i dati ricevuti
        console.table(data);
        
    })

    //ora creo la struttura base della card

    cosnt card = document.createElement("div")

    card.classList("photo-card");
    


