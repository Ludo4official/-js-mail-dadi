let numeroRandom = Math.floor(Math.random() * 6) + 1;
console.log('Numero giocatore', numeroRandom);

let numeroRandomico = Math.floor(Math.random() * 6) + 1;
console.log('Numero cpu', numeroRandomico);

if (numeroRandom > numeroRandomico) {
    console.log('Hai vinto!')
}

else if (numeroRandom < numeroRandomico) {
    console.log('Ritenta, sarai più fortunato!')
}

else {
    console.log('GRAN PAREGGIO!')
}
    
