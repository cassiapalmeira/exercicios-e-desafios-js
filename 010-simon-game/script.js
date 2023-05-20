var buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []

var userClickedPattern = []

level = 0

started = false

// função que detecta quando alguma tecla é pressionada pela primeira vez, para dar início ao jogo
$(document).keydown(function(){
    if (!started) {
        started = true
        nextSequence()   
    }
})


// função que detecta quando algum botão é clicado
$(".btn").click(function() {  
    var userChosenColour = $(this).attr("id") // armazena a id do botão clicado
    
    userClickedPattern.push(userChosenColour) // adiciona a id do botão clicado à array userClickedPattern

    // toca um som quando o usuário clica no botão de cor correspondente
    playSound(userChosenColour)

    // adiciona um efeito de flash quando o usuário clica no botão
    animatePress(userChosenColour)

    // checa a resposta do usuário
    checkAnswer(userClickedPattern.length-1)
})


// função que checa o clique / a resposta do usuário vs. a cor gerada aleatoriamente
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function(){
                nextSequence()
            }, 1000)
        }
    } else {
        console.log("wrong")
    }
}

// função que cria cor aleatória
function nextSequence() {
    userClickedPattern = []

    level++ // cada vez que nextSequence é chamada, aumenta-se o nível

    $("#level-title").text("Level " + level) // atualiza o texto do h1

    var randomNumber = Math.floor(Math.random() * 4) // um número aleatório entre 0 e 3 é gerado e armazenado na variável
    
    var randomChosenColour = buttonColours[randomNumber] // seleciona uma das cores da array buttonColours e ela é armazenada na variável

    gamePattern.push(randomChosenColour) // a cor armazenada em randomChosenColour é adicionada ao final da array gamePattern

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100) // usando jQuery pra selecionar botão com a mesma id de randomChosenColour e, posteriormente, adicionando animação de flash no botão

    // toca o som quando é gerada uma cor aleatória
    playSound(randomChosenColour)
}

// função que será chamada para tocar um som conforme a cor correspondente
function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3")
    sound.play()
}

// função que, quando chamada, adiciona efeito de flash ao botão
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")
    }, 100)
}