const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'] // Array 1

let insertY = ['the soup kitchen', 'Disneyland', 'the White House'] // Array 2

let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'] // Array 3

randomize.addEventListener('click', result); // event listener

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX); // sorteia algum item da Array 1
  let yItem = randomValueFromArray(insertY); // sorteia algum item da Array 2
  let zItem = randomValueFromArray(insertZ); // sorteia algum item da Array 3
  
  // substituem os ':insert:' por algum item de alguma das arrays
  newStory = newStory.replace(':insertx:', xItem)
  newStory = newStory.replace(':inserty:', yItem)
  newStory = newStory.replace(':insertz:', zItem)
  newStory = newStory.replace(':insertx:', xItem)

  if(customName.value !== '') { // altera o nome para o que for inserido na caixa de texto
    const name = customName.value;
    newStory = newStory.replace('Bob', name)
  }

  if(document.getElementById("uk").checked) { // altera as medidas para as do Reino Unido
    const weight = Math.round(300 / 14) + ' stone';
    const temperature =  Math.round((94 - 32) / 1.8) + ' centigrade';

    newStory = newStory.replace('94 fahrenheit', temperature)
    newStory = newStory.replace('300 pounds', weight)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}