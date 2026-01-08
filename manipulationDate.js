//**manipulation des dates en javascript */
//**manipulation des  dates en java cript//

// Je crée une date avec la date actuelle
const maDate = new Date();

// Je récupère l'année en cours
const anneeEnCours = maDate.getFullYear();

// Je récupère le span de l'année
let elementSpanAnnee = document.querySelector("#annee");
elementSpanAnnee.textContent = anneeEnCours;

// Je récupère le span du mois
let elementSpanMois = document.querySelector("#mois");
elementSpanMois.textContent = maDate.getMonth();


// Ici je crée une fonction qui sert à afficher l'heure
function afficherHeures() {

    // Je définis le format de l'heure
    // 2 chiffres pour l'heure, les minutes et les secondes
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    // J'affiche l'heure actuelle de Mayotte
    document.getElementById("heureMayotte").textContent =
        new Date().toLocaleTimeString("fr-FR", {
            ...options,              // j'utilise le format défini au-dessus
            timeZone: "Indian/Mayotte" // fuseau horaire de Mayotte
        });

    // J'affiche l'heure actuelle de Paris
    document.getElementById("heureParis").textContent =
        new Date().toLocaleTimeString("fr-FR", {
            ...options,               // même format d'heure
            timeZone: "Europe/Paris"  // fuseau horaire de Paris
        });

    // J'affiche l'heure actuelle de Tokyo
    document.getElementById("heureTokyo").textContent =
        new Date().toLocaleTimeString("fr-FR", {
            ...options,              // même format
            timeZone: "Asia/Tokyo"   // fuseau horaire de Tokyo
        });
}


// Mise à jour chaque seconde
setInterval(afficherHeures, 1000);

// Affichage immédiat
afficherHeures();
