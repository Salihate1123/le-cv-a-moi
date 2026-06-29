
// MODE SOMBRE / CLAIR

const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    // Sauvegarde du thème
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }
});
// Charger le thème sauvegardé
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

// MENU HAMBURGER

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

//BARRES DE COMPÉTENCES
// ANIMATION DES BARRES

document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelectorAll(".progress-bar");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                const bar = entry.target;
                const percent = bar.getAttribute("data-percent");
                // Animation de la largeur
                bar.style.width = percent + "%";
            }
        });
    }, {
        threshold: 0.5
    });
    bars.forEach((bar) => {
        observer.observe(bar);
    });
});

//FORMULAIRE

const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if(nom === "" || email === "" || message === ""){
        alert("Veuillez remplir tous les champs");
    }else{
        alert("Message envoyé avec succès");
    }
});

//BOUTON RETOUR EN HAUT

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if(window.scrollY > 200){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});