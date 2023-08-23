var numeros = []
var res = document.getElementById('res')
var txtnum = document.getElementById('txtnum')
var lista = document.getElementById('lista')


function adicionar(){
    var num = Number(txtnum.value)
    
    if (num == 0){
        window.alert('[ERRO] Coloque algum número na caixa')
    } else if (num > 100 || num < 1){
        window.alert('[ERRO] Coloque um número entre 1 e 100')
    } else if (numeros.indexOf(num) == -1){
        //adiciona numero
        var item = document.createElement('option')
        item.text = `Adicionado o número ${num}`
        numeros.push(num)
        lista.appendChild(item)
    } else {
        window.alert(`[ERRO] O número ${num} já foi colocado`)
    }
    res.innerHTML = ''
    txtnum.value = ''
    txtnum.focus()
}

function verificar() {
    if (numeros.length == 0){
        window.alert('[ERRO] Coloque algum número antes de finalizar')
    } else {
    var total = numeros.length;
    var maior = numeros[0];
    var menor = numeros[0];
    var soma = 0
    var media = 0
    for (let pos in numeros){
        soma += numeros[pos]
        if (numeros[pos] > maior) 
            maior = numeros[pos]
        if (numeros[pos] < menor)
            menor = numeros[pos]
    }
    media = soma / total
    
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`;
    res.innerHTML += `<p>O maior número foi ${maior}</p>`
    res.innerHTML += `<p>O menor número é o ${menor}</p>`
    res.innerHTML += `<p>A soma dos números é igual a ${soma}</p>`
    res.innerHTML += `<p>E a média dos valores é igual a ${media}</p>`
    }
}
