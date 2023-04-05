let btnRoll = document.querySelector('.btn')

btnRoll.addEventListener('click', roll)

function roll() {
    // dado 1
    let dadoAleatorio1 = Math.floor(Math.random() * 6) + 1 // 1-6

    let imagemAleatoria1 = 'images/dice' + dadoAleatorio1 + '.png' // images/diceN.png

    let imagem1 = document.querySelectorAll('img')[0]

    imagem1.setAttribute('src', imagemAleatoria1)


    //dado 2
    let dadoAleatorio2 = Math.floor(Math.random() * 6) + 1

    let imagemAleatoria2 = 'images/dice' + dadoAleatorio2 + '.png'

    let imagem2 = document.querySelectorAll('img')[1]

    imagem2.setAttribute('src', imagemAleatoria2)

    // vencedor: modifica o título da página
    if (dadoAleatorio1 > dadoAleatorio2) {
        document.querySelector(".winnerPara").innerHTML = "🚩 Player 1 Wins!"

    } else if (dadoAleatorio2 > dadoAleatorio1) {
        document.querySelector(".winnerPara").innerHTML = "Player 2 Wins! 🚩"

    } else {
        document.querySelector(".winnerPara").innerHTML = "Draw!"
    }

}