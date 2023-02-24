function tabuada(){
    // colocando os dados em variáveis
    let num = document.getElementById('txtn')
    let resultado = document.getElementById('seltab')

    // bloco de validação
    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor digite um número no local solicitado.')
    } else { // bloco da tabuada
        let numero = Number(num.value) // conversão para number
        let contador = 1
        resultado.innerHTML = '' // limpa o select caso seja criada uma nova tabuada

        while(contador <= 10) {
            let item = document.createElement('option') // cria os elementos option do select
            item.text = `${numero} X ${contador} = ${numero*contador}` // tabuada
            item.value = `tab${contador}` // coloca value no option
            resultado.appendChild(item) // faz o item aparecer
            contador++
        }
    }
}