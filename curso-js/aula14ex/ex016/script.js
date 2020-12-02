function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO! Verifique os valores')
        res.innerHTML = ''
    } else if (passo.value < 1) {
        window.alert('ERRO! O passo deve ser maior do que 0')
    } else {
        res.innerHTML = 'Contando:'
        var inicio = Number(inicio.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)

        if (inicio < fim) {
            // Contagem crescente
            for (var soma = inicio; soma <= fim; soma += passo) {
                res.innerHTML += `${soma} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (var soma = inicio; soma >= fim; soma -= passo) {
                res.innerHTML += `${soma} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}