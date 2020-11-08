function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano || Number(formAno.value) < 1900) { // Caso no input do ano estiver vazio ou maior que o ano atual, será apresentado um erro
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value) // Calculando a idade pegando o valor entregue pelo usuário no formAno (formulário do ano)
        var genero = '' // Gênero recebe valor vazio
        var img = document.createElement('img') // Criar o elemento foto dinâmicamente
        img.setAttribute('id', 'foto') // Setando o ID da img criada acima
        if (formSex[0].checked) { // Se foi selecionado o sexo masculino:
            genero = "homem"
            if (idade <= 3) {
                img.setAttribute('src', 'images/bebe.jpg')
            } else if (idade <= 14) {
                img.setAttribute('src', 'images/homem-criança.jpg')
            } else if (idade <= 25) {
                img.setAttribute('src', 'images/homem-jovem.jpg')
            } else if (idade <= 59) {
                img.setAttribute('src', 'images/homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'images/homem-idoso.jpg')
            }
        } else if (formSex[1].checked) { // Se foi selecionado o sexo feminino:
            genero = "mulher"
            if (idade <= 3) {
                img.setAttribute('src', 'images/bebe.jpg')
            } else if (idade <= 14) {
                img.setAttribute('src', 'images/mulher-criança.jpg')
            } else if (idade <= 25) {
                img.setAttribute('src', 'images/mulher-jovem.jpg')
            } else if (idade <= 59) {
                img.setAttribute('src', 'images/mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'images/mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        if (idade == 1) {
            res.innerHTML = `É ${genero} com ${idade} ano<br>`
        } else {
            res.innerHTML = `É ${genero} com ${idade} anos<br>`
        }
        res.appendChild(img)
    }

}