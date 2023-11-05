
let imageWrapper = document.querySelector('.image-wrapper');
let img = document.createElement('img');
img.src = `./images/${Math.floor(Math.random() * 9) + 1}.jpg`;
imageWrapper.appendChild(img);