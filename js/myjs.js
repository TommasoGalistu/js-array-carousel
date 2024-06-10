// individuare il numero di foto per fagli cambiare dimensione 
let numFoto = 5;
let modificaNumFoto = document.documentElement.style.setProperty('--numFoto', numFoto);

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

// creazione evento per andare avanti
bottAvanti.addEventListener('click', () => {
    console.log('dentro')
})