
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var boasvindas = document.getElementById('bemvindo')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora <= 12) {
        img.src = '/aula12ex/ex014/images/paisagem-dia.jpg'
        document.body.style.background = 'rgb(168, 189, 212)'
        var boasvindas = 'Bom dia!'
    } else if (hora > 12 && hora <= 18) {
        img.src = '/aula12ex/ex014/images/paisagem-tarde.jpg'
        document.body.style.background = 'rgb(255, 204, 118)'
        var boasvindas = 'Boa tarde!'
    } else {
        img.src = '/aula12ex/ex014/images/paisagem-noite.jpg'
        document.body.style.background = 'rgb(132, 132, 216)'
        var boasvindas = 'Boa noite!'
    }

    bemvindo.innerText = `${boasvindas}`
    

}