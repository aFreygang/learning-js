var tudo = new Date()
var hora = tudo.getHours()
var minutos = tudo.getMinutes()
var segundos = tudo.getSeconds()
var diadaS = tudo.getDay()
var dia = tudo.getDate()
var mes = tudo.getMonth()
var ano = tudo.getFullYear()
var digahora = document.querySelector('h1#bom')
var diatodo = document.querySelector('div#data')


if (hora <= 5) {
    digahora.innerText = 'Boa madrugada!'
} else if (hora < 12) {
    digahora.innerText = 'Bom dia!'
} else if (hora <= 18) {
    digahora.innerText = 'Boa tarde!'
} else {
    digahora.innerText = 'Boa noite!'
}

switch (diadaS) { // Informando o que cada dia corresponderá
    case 0:
        var diadaS = 'Hoje é domingo'
        break
    case 1:
        var diadaS = 'Hoje é segunda'
        break
    case 2:
        var diadaS = 'Hoje é terça'
        break
    case 3:
        var diadaS = 'Hoje é quarta'
        break
    case 4:
        var diadaS = 'Hoje é quinta'
        break
    case 5:
        var diadaS = 'Hoje é <strong>sexta</strong>'
        break
    case 6:
        var diadaS = 'Hoje é sábado'
        break
}

switch (mes) { // Informando o que cada mês corresponderá
    case 0:
        var mes = 'Janeiro'
        break
    case 1:
        var mes = 'Fevereiro'
        break
    case 2:
        var mes = 'Março'
        break
    case 3:
        var mes = 'Abril'
        break
    case 4:
        var mes = 'Maio'
        break
    case 5:
        var mes = 'Junho'
        break
    case 6:
        var mes = 'Julho'
        break
    case 7:
        var mes = 'Agosto'
        break
    case 8:
        var mes = 'Setembro'
        break
    case 9:
        var mes = 'Outubro'
        break
    case 10:
        var mes = 'Novembro'
        break
    case 11:
        var mes = 'Dezembro'
        break
    default:
        var mes = 'Erro'
        break
}

diatodo.innerHTML = `${diadaS}! <br>São ${hora}:${minutos}:${segundos}<br> ${dia} de ${mes} de ${ano}`