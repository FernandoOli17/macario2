document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('background-music');
    const playButton = document.getElementById('play-music');
    const pauseButton = document.getElementById('pause-music');

    playButton.addEventListener('click', () => {
        backgroundMusic.play();
    });

    pauseButton.addEventListener('click', () => {
        backgroundMusic.pause();
    });

    // Função para criar corações animados
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 200);
});
