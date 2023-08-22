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
        res.innerHTML = ''
    } else {
        window.alert(`[ERRO] O número ${num} já foi colocado`)
    }
}

function verificar() {
    if (numeros.length == 0){
        window.alert('[ERRO] Coloque algum número na lista')
    } else {
    numeros.sort(function(a, b) {
        return a - b;
    });
    var exten = numeros.length;
    var maior = numeros[numeros.length - 1];
    var menor = numeros[0];

    res.innerHTML = `Ao todo temos ${exten} números cadastrados <br> O maior número foi ${maior} <br> O menor número é o ${menor}`;
    }
    
}
