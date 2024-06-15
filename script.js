document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', revealElements);
});

function revealElements() {
    var sections = document.querySelectorAll('section');

    sections.forEach(section => {
        var sectionTop = section.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('show', 'animated');
        }
    });

    var header = document.querySelector('header');
    var headerTop = header.getBoundingClientRect().top;

    if (headerTop < windowHeight - 100) {
        header.classList.add('show');
    }
}

// Ejecutar la función al cargar la página para animar elementos visibles inicialmente
revealElements();