const mailAutorizzate = ["noquacinaummi-7969@yopmail.com", "cekauffacrouppeu-9179@yopmail.com", "weicessoicuja-4729@yopmail.com", "wibotittuddo-4647@yopmail.com", "patemmeugroifra-3961@yopmail.com"   ]
let mail = prompt('Inserisci qui la tua email!')

console.log ('La mail inserita dall utente è', mail, typeof mail)

if (mail != mailAutorizzate[0, 1, 2, 3, 4]) {
    alert('ATTENZIONE! Mail non valida!')
    console.log ('La mail', mail, 'non è valida!')
}

else {
    alert('MOLTO BENE! La tua mail è valida!')
    console.log ('La mail', mail, 'è valida!')
}

