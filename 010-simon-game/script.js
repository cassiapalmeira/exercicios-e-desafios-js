var buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []

var userClickedPattern = []

$(".btn").click(function() { // detecta quando algum botão é pressionado 
    var userChosenColour = $(this).attr("id") // armazena a id do botão pressionado
    
    userClickedPattern.push(userChosenColour) // adiciona a id do botão pressionado à array userClickedPattern

    // toca um som quando o usuário clica no botão de cor correspondente
    playSound(userChosenColour)
})

function nextSequence() {
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