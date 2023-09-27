// Selecciona todos los botones de desplazamiento
const scrollButtons = document.querySelectorAll('.scroll-button');

// Agrega un evento de clic a cada botón
scrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Encuentra la siguiente sección
        const nextSection = button.closest('section').nextElementSibling;

        if (nextSection) {
            // Desplázate suavemente hasta la siguiente sección
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});
