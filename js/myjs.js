// individuare il numero di foto per fagli cambiare dimensione 
let numFoto = 0;


// variabili dei contenitori dove inserire le foto
let contFotoPrincipale = document.querySelector('.contFoto')
let contFotoPiccole = document.querySelector('.contFotoPiccole')

// aggiunta bottoni in variabili
const bottIndietro = document.querySelector('.buttonIndietro')
const bottAvanti = document.querySelector('.buttonAvanti')


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

// ciclo per creare immagini da database e inserirle
for (let i = 0; i < arrFoto.length; i++) {
    let itemFoto = document.createElement('img')
    itemFoto.src = arrFoto[i]
    itemFoto.alt = arrDescrizione[i]
    contFotoPrincipale.append(itemFoto)
    contFotoPiccole.append(itemFoto)
    numFoto++
}

// creazione dinamica della dimensione foto laterale
let modificaNumFoto = document.documentElement.style.setProperty('--numFoto', numFoto);

// creazione evento per andare avanti
bottAvanti.addEventListener('click', () => {
    console.log('dentro')
})