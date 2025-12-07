//N'ayant pas de connaissance en JS il s'agit de script générés par IA afin d'optimiser certains elements complexes de mon code
// Comme par exemple le menu burger (je n'arrivais pas a créer une ancre avec les id et fermer le menu en même temps juste en css)
// ainsi que les images de la partie hero qui tournent en boucle sur la version desktop : j'ai cherché un script qui permet de mettre en pause
// le petit carroussel en full CSS lorsque l'element n'est plus présent dans le champs de vision//

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {

            if(link.getAttribute('href').startsWith('#')) {

                navToggle.checked = false;

                const target = document.querySelector(link.getAttribute('href'));
                if(target){
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.colonne_droite.hero-slider');

    if (!sliderContainer) {
        console.warn("Le conteneur du slider '.colonne_droite.hero-slider' n'a pas été trouvé.");
        return;
    }
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.01 
    };
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                sliderContainer.classList.remove('is-paused');
            } else {
                sliderContainer.classList.add('is-paused');
            }
        });
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    observer.observe(sliderContainer);
    if (window.getComputedStyle(sliderContainer).display !== 'none') {
        if (sliderContainer.getBoundingClientRect().top > window.innerHeight) {
             sliderContainer.classList.add('is-paused');
        }
    }
});
