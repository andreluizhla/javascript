function contar() {
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar.'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido, considerando PASSO 1')
            p = 1
        }
        if (i < f){
            for(let c = i; c <=f; c += p){
                res.innerHTML += `${c}, `
            }
        } else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c}, `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
