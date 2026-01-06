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


