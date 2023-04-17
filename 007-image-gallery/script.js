const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];


/* Declaring the alternative text for each image file */
const imageFileAlt = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Rock that looks like a wave',
    'pic3.jpg': 'Some white and purple flowers',
    'pic4.jpg': 'Section of wall from a pharao\'s tomb',
    'pic5.jpg': 'Large moth on a leaf'
}


/* Looping through images */
for (var i = 0; i <= imageFileNames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageFileNames[i]);
    newImage.setAttribute('alt', imageFileAlt[imageFileNames[i]]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function(e) {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}


/* Wiring up the Darken/Lighten button */
btn.onclick = btnChange;

function btnChange() {
    var classBtn = btn.getAttribute('class');
    
    if (classBtn === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    }
}