//**ici je vais mettre mon calcul d'age */

// je  récupère les éléments HTML
let inputAnnee = document.getElementById("annee");
let resultat = document.getElementById("resultat");

// Écoute ce que l’utilisateur écrit dans "année"
inputAnnee.addEventListener("input", function() {

    // Je récupère la valeur de l'input
    let annee = parseInt(inputAnnee.value);

    // Je récupère l'année actuelle
    let anneeActuelle = new Date().getFullYear();

    // Conditions simples
    if (isNaN(annee)) {
        resultat.textContent = "Veuillez entrer une année.";
        return;
    }

    if (annee < 1900 || annee > anneeActuelle) {
        resultat.textContent = "Année non valide";
        return;
    }

    // ici je -Calcul
    let age = anneeActuelle - annee;

    // Affichage
    resultat.textContent = "Vous avez " + age + " ans";
});

