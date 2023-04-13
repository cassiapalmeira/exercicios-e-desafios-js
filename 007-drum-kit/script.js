// Detectar evento de clique nos botões:

var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML
        makeSound(buttonInnerHTML)      // se houver clique no botão, checa-se qual botão foi pressionado e se envia essa informação como argumento para makeSound, para que se toque o som desejado.
        
        buttonAnimation(buttonInnerHTML) // adiciona animação
    })
}


// Detectar evento de teclado pressionado:

document.addEventListener("keydown", function(event) {
    makeSound(event.key)        // se houver evento de pressão no teclado, envia-se a propriedade key do event como argumento para makeSound, para que se toque o som desejado.
    
    buttonAnimation(event.key) // adiciona animação
})


// Ambas as sessões de código anteriores serão direcionadas pra cá, em que se vai fazer algo baseado no parâmetro, tocando o som apropriado para o argumento (tecla ou botão) recebido:

function makeSound(key){
    
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break

        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break

        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break
        
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play() 
            break

        default: console.log(key)
    }
}

// Adicionando animação
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed") // adiciona a classe CSS "pressed" que aplica uma opacidade e sombra ao elemento pressionado.
    
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 200) // remove a classe após 100 milissegundos, dando o efeito de animação.
}

