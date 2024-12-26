// Fonction principale pour gérer le slider
function setupSlider(wrapperId, loop = true) {
    const wrapper = document.querySelector(wrapperId); // Sélection du slider par ID
    const featured = wrapper.querySelector("#featured"); // Image principale
    const thumbnails = wrapper.querySelectorAll(".thumbnail"); // Miniatures
    const slideLeft = wrapper.querySelector("#slideLeft"); // Bouton gauche
    const slideRight = wrapper.querySelector("#slideRight"); // Bouton droit

    let currentIndex = 0; // Index actuel de l'image

    // Fonction pour mettre à jour l'image principale
    function updateFeaturedImage(index) {
        if (index >= thumbnails.length) {
            if (loop) {
                currentIndex = 0; // Retour au début si la répétition est activée
            } else {
                clearInterval(autoSlideInterval); // Arrêter le slide si pas de répétition
                return;
            }
        } else if (index < 0) {
            if (loop) {
                currentIndex = thumbnails.length - 1; // Retour à la fin
            } else {
                clearInterval(autoSlideInterval); // Arrêter le slide
                return;
            }
        } else {
            currentIndex = index;
        }

        featured.src = thumbnails[currentIndex].src; // Changer l'image affichée
    }

    // Fonction pour avancer automatiquement
    function autoSlide() {
        updateFeaturedImage(currentIndex + 1);
    }

    // Lancer le défilement automatique toutes les 3 secondes
    let autoSlideInterval = setInterval(autoSlide, 3000);

    // Bouton gauche pour aller à l'image précédente
    slideLeft.addEventListener("click", () => {
        clearInterval(autoSlideInterval); // Arrête l'auto-slide
        updateFeaturedImage(currentIndex - 1); // Image précédente
        restartAutoSlide(); // Redémarre l'auto-slide
    });

    // Bouton droit pour aller à l'image suivante
    slideRight.addEventListener("click", () => {
        clearInterval(autoSlideInterval); // Arrête l'auto-slide
        updateFeaturedImage(currentIndex + 1); // Image suivante
        restartAutoSlide(); // Redémarre l'auto-slide
    });

    // Fonction pour redémarrer le défilement automatique
    function restartAutoSlide() {
        clearInterval(autoSlideInterval); // Réinitialiser
        autoSlideInterval = setInterval(autoSlide, 3000); // Relancer
    }
}

// Initialisation des sliders
setupSlider("#content-wrapper", true);  // Répéter le slide
setupSlider("#content-wrapper2", true); // Ne pas répéter le slide
setupSlider("#content-wrapper3", true);