function contagem() {
    // colocando os dados dos inputs dentro de variáveis
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resposta =  document.getElementById('res')

    //bloco de validações para que os campos sejam preenchidos corretamente
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resposta.innerHTML = '[ERRO] Verifique se os campos estão devidamente preenchidos e tente novamente.'
    } else { // bloco de contagem
        resposta.innerHTML = 'Contando: <br>'

        // convertendo os dados das variáveis para o tipo number
        let iniCont = Number(ini.value)
        let fimCont = Number(fim.value)
        let passoCont = Number(passo.value)

        // validação do passo
        if (passoCont <= 0) {
            window.alert('[ERRO] Passo inválido. Considerando passo 1.')
            passoCont = 1
        }

        // contagem
        if (iniCont < fimCont) { // contagem PROGRESSIVA
            for (var contador = iniCont; contador <= fimCont; contador = contador + passoCont) {
                resposta.innerHTML += `${contador} \u{1F449}`
            }
        } else { // contagem REGRESSIVA
            for (var contador = iniCont; contador >= fimCont; contador = contador - passoCont) {
                resposta.innerHTML += `${contador} \u{1F449}`
            }
        }
        resposta.innerHTML += ` \u{1F3C1}`
    }
}