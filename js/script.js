const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const textGameOver = document.querySelector('.gameOver');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    // deslocamento da esquerda
    const pipPosition = pipe.offsetLeft; 
    const cloudsPosition = clouds.offsetLeft; 

    // o '+' na frente do window serve para transformar o valor passado em int
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipPosition <= 120 && pipPosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        textGameOver.style.visibility = 'visible';

        clearInterval(loop); // acaba o loop
    }

}, 10);

document.addEventListener('keydown', jump); 