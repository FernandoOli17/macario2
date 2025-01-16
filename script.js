document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duração aleatória
        heart.style.backgroundColor = getRandomColor(); // Cores dinâmicas
        body.appendChild(heart);

        // Remove o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Função para gerar cores aleatórias
    function getRandomColor() {
        const colors = ['#ff69b4', '#ff1493', '#ff85c5', '#ffa1d5'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Cria novos corações a cada 200ms
    setInterval(createHeart, 200);
});
