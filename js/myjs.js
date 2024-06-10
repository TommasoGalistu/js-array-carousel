// variabili dei contenitori dove inserire le foto
let contFotoPrincipale = document.querySelector('.contFoto')
let contFotoPiccole = document.querySelector('.contFotoPiccole')

// aggiunta bottoni in variabili
const bottIndietro = document.querySelector('.buttonIndietro');
const bottAvanti = document.querySelector('.buttonAvanti');


// creazione array con indirizzi foto
let arrFoto = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
]
// creazione di array descrizione ALT foto
let arrDescrizione = [
    'foto spiderman',
    'immagine gioco zelda',
    'immagine gioco che non conosco',
    'immagine gioco gatto',
    'immagine avengers',
]

// individuare il numero di foto per fagli cambiare dimensione 
let numFoto = 0;

// ciclo per creare immagini da database e inserirle
for (let i = 0; i < arrFoto.length; i++) {
    // creazione di due nodi
    let itemFoto = document.createElement('img')
    let itemFoto2 = document.createElement('img')
    // modifica src
    itemFoto.src = arrFoto[i]
    itemFoto2.src = itemFoto.src
    // modifica alt
    itemFoto.alt = arrDescrizione[i]
    itemFoto2.alt = itemFoto.alt
    // aggiunta della classe per gestire l'apparizione
    itemFoto.classList.add('fotoPrincipale')
    itemFoto2.classList.add('fotoPrincipale2')
    // appendo i due nodi ai container
    contFotoPrincipale.append(itemFoto)
    contFotoPiccole.append(itemFoto2)
    // contatore foto così da gestire le dimensioni, guarda sotto il for
    numFoto++
}

// creazione dinamica della dimensione foto laterale
let modificaNumFoto = document.documentElement.style.setProperty('--numFoto', numFoto);

// modifica visibilità prima foto
let items = document.getElementsByClassName('fotoPrincipale');
let items2 = document.getElementsByClassName('fotoPrincipale2');
items[0].classList.add('active')
items2[0].classList.add('active')





// creazione evento per andare avanti
// bottAvanti.addEventListener('click', () => {
//     console.log('dentro')
// })