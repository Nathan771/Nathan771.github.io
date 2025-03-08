document.addEventListener('DOMContentLoaded', function() {
    const secretWord = "albhed"; // Palavra secreta
    const hints = ["Você errou. Dica 1: A palavra tem 6 letras.", " Você errou. Dica 2: Começa com a letra 'a'.", "Você errou. Dica 3: É a primeira nerdice que eu te apresentei (tudo mínusculo e junto)"]; // Array de dicas
    let hintIndex = 0; // Índice para acompanhar as dicas exibidas

    const submitButton = document.getElementById('submit');
    const messageElement = document.getElementById('message');

    submitButton.addEventListener('click', function() {
        const userGuess = document.getElementById('guess').value.toLowerCase();
        if (userGuess === secretWord) {
            messageElement.textContent = "Parabéns! Você acertou a palavra secreta.";
            messageElement.style.color = "green";

            // Redireciona após 3 segundos
            setTimeout(function() {
                window.location.href = 'sucess.html';
            }, 3000); // 3000 milissegundos = 3 segundos

        } else {
            if (hintIndex < hints.length) {
                messageElement.textContent = hints[hintIndex];
                messageElement.style.color = "red";
                hintIndex++;
            } else {
                messageElement.textContent = "Tente novamente.";
                messageElement.style.color = "red";
            }
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next-button');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    nextButton.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Mostrar o primeiro slide inicialmente
    showSlide(currentSlide);
});
