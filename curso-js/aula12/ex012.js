var agora = new Date() // Pegar a data do sistema/cliente
var hora = agora.getHours() // Pegar a hora da variavel que tem data
console.log(`Agora são exatamente ${hora} horas`)
if (hora <= 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}