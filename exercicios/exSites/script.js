function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerText = `Agora são exatamente ${hora} horas`
    if (hora >= 0 && hora < 12){
        document.body.style.background = '#e2cd9f'
        img.src = "manha.png"
    } else if (hora <=18){
        document.body.style.background = '#b9846f'
        img.src = "tarde.png"
    } else {
        document.body.style.background = '#515154'
        img.src = "noite.png"
    }
}
