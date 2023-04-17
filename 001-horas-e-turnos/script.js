function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h`

    if (hora >= 0 && hora < 12) {
        // Manhã
        img.scr = 'images/fotomanha.png'
        document.body.style.background = '#edd5ac'
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        img.src = 'images/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // Noite
        img.src = 'images/fotonoite.png'
        document.body.style.background = '#253648'
    }

}