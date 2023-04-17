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
    let finalTxt = document.querySelector('.winnerPara')

    if (dadoAleatorio1 > dadoAleatorio2) {
        finalTxt.innerHTML = "" // limpa o campo do texto da mensagem final
        function finalMessage() {
            finalTxt.innerHTML = "🚩 Player 1 Wins!"
            
        }
        setTimeout(finalMessage, 500) // aplica um delay na mensagem final

    } else if (dadoAleatorio2 > dadoAleatorio1) {
        finalTxt.innerHTML = ""
        function finalMessage() {
            finalTxt.innerHTML = "Player 2 Wins! 🚩"
        }
        setTimeout(finalMessage, 500)

    } else {
        finalTxt.innerHTML = ""
        function finalMessage() {
            finalTxt.innerHTML = "Draw!"
        }
        setTimeout(finalMessage, 500)
    }

}