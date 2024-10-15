window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    var menu = document.getElementById("menu");

    // Se l'utente scrolla di più di 50px, mostra la navbar e nascondi il menu
    if (document.documentElement.scrollTop > 25) {
        navbar.classList.add("visible"); // Mostra la navbar
        menu.style.display = "none"; // Nascondi il menu iniziale
    } else {
        navbar.classList.remove("visible"); // Nascondi la navbar
        menu.style.display = "flex"; // Mostra il menu iniziale
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const sections =document.querySelectorAll(['#music', '#event', "#contact", '#social']); // Seleziona i titoli h1 nelle sezioni

    const options = {
        root: null, // Il viewport corrente
        threshold: 0.1 // Trigger quando il 10% della sezione è visibile
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aggiunge la classe per l'animazione da destra o sinistra
                entry.target.classList.remove('hidden');
                if (entry.target.closest('#event') || entry.target.closest('#social')) {
                    entry.target.classList.add('animate-right');
                } else {
                    entry.target.classList.add('animate-left');
                }
                observer.unobserve(entry.target); // Non osservare più dopo che è visibile
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden'); // Nasconde gli elementi inizialmente
        observer.observe(section); // Inizia ad osservare
    });
});


