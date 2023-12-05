document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.home_carousel-item');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('home_active');
            slide.style.display = 'none'; // Esconde todos los slides
        });

        // Muestra el slide actual y añade la clase active
        slides[index].classList.add('home_active');
        slides[index].style.display = 'flex';
    }

    // Inicia mostrando el primer slide
    showSlide(currentSlide);

    document.getElementById('moveRight').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    document.getElementById('moveLeft').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });
});
