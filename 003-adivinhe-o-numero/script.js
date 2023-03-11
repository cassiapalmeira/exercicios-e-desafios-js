// Variáveis que precisamos para guardar os dados que o programa vai utilizar.

var numeroAleatorio = Math.floor(Math.random() * 100) + 1 // sorteia o número

var palpites = document.querySelector('.palpites')
var ultimoResultado = document.querySelector('.ultimoResultado')
var baixoOuAlto = document.querySelector('.baixoOuAlto')

var envioPalpite = document.querySelector('.envioPalpite')
var campoPalpite = document.querySelector('.campoPalpite')
campoPalpite.focus() // coloca o cursor automaticamente no campo onde será digitado o número

var contagemPalpites = 1
var botaoReinicio

// Funções

// Função "Principal"

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value)

    if (contagemPalpites === 1) {
        palpites.textContent = 'Palpites anteriores: '
    }
    palpites.textContent += palpiteUsuario + ' '
    
    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!'
        ultimoResultado.style.backgroundColor = 'green'
        baixoOuAlto.textContent = ''
        configFimDeJogo()
    } else if (contagemPalpites === 10) {
        ultimoResultado.textContent = '!!! FIM DE JOGO !!!'
        baixoOuAlto.textContent = ''
        configFimDeJogo()
    } else {
        ultimoResultado.textContent = 'Errado! Tente novamente...'
        ultimoResultado.style.backgroundColor = 'red'

        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!'
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito alto!'
        }
    }
    
    contagemPalpites++
    campoPalpite.value = ''
    campoPalpite.focus()
}

envioPalpite.addEventListener('click', conferirPalpite) // Evento

// Função que bloqueia os campos de digitação e submissão de palpites + cria um botão de reinicio
function configFimDeJogo() {
    campoPalpite.disabled = true
    envioPalpite.disabled = true

    botaoReinicio = document.createElement('button')
    botaoReinicio.textContent = 'Iniciar novo jogo'
    document.body.appendChild(botaoReinicio)
    botaoReinicio.addEventListener('click', reiniciarJogo)
}

// Função para reiniciar jogo
function reiniciarJogo() {
    contagemPalpites = 1

    var reiniciarParas = document.querySelectorAll('.resultadoParas p')

    // Apaga os campos dentro do parágrafo .resultadoParas
    for (var i = 0; i < reiniciarParas; i++) {
        reiniciarParas[i].textContent = ''
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio)

    campoPalpite.disabled = false
    envioPalpite.disabled = false
    campoPalpite.value = ''
    campoPalpite.focus()

    ultimoResultado.style.backgroundColor = 'white'
    
    numeroAleatorio = Math.floor(Math.random() * 100) + 1
}