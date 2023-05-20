var buttonColours = ["red", "blue", "green", "yellow"]

var gamePattern = []

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4) // um número aleatório entre 0 e 3 é gerado e armazenado na variável
    
    var randomChosenColour = buttonColours[randomNumber] // seleciona uma das cores da array buttonColours e ela é armazenada na variável

    gamePattern.push(randomChosenColour) // a cor armazenada em randomChosenColour é adicionada ao final da array gamePattern
}