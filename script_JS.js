document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Vérifie si le lien est une ancre locale (commence par #)
            if(link.getAttribute('href').startsWith('#')) {
                // Ferme le menu burger
                navToggle.checked = false;

                // Scroll smooth vers la section
                const target = document.querySelector(link.getAttribute('href'));
                if(target){
                    e.preventDefault(); // bloque le scroll par défaut
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
