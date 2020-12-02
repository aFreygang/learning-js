function gerar() {
    var numero = document.getElementById('num')
    var tabuada = document.getElementById('tab')

    if (numero.value.length == 0) {
        window.alert('Digite algum número')
    } else {
        var num = Number(numero.value)
        var contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${contador} = ${num*contador}`
            item.value = `tab${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}