function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 5){
                img.setAttribute('src', 'imagens/bebehomi.png')
            }else if (idade < 11){
                img.setAttribute('src', 'imagens/criancahomi.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemhomi.png')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/homi.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else  if(formSex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 5){
                img.setAttribute('src', 'imagens/bebemuie.png')
            }else if (idade < 11){
                img.setAttribute('src', 'imagens/criancamuie.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemmuie.png')
            } else if (idade < 50){
                img.setAttribute('src', 'imagens/muie.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}