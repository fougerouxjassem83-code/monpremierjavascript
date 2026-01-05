// je programes les evenement qui sont déclanchés du coté HTML*/
let elementBoutonValiderDate = document.querySelector("#validerDate");
let elementBoutonValiderDate2 = document.querySelector("#dateDuJourFormat2")

const maDate = new Date();

// c'est pour déclarer la date et aussi l'heure
 elementBoutonValiderDate.addEventListener("click" , function() {
    console.log("## je suis dans le bouton Valider date##");
    elementBoutonValiderDate.innerHTML = Date();
    // Ensuite il me met un autre date en bas ('elementBoutonValiderDate2.textContent = maDate.toDateString();').
    elementBoutonValiderDate2.textContent = maDate.toDateString();
 });



 // 1. Ici je récupère l'élement html qui sera associé a l'évenement keydown
let elementkeydown = document.querySelector("#boutonflech");
// 2.J'associe l'évenement KEYDOWN mon élément html en utilisant la méthode addEventListener(). A l'intérieur de la méthod eAddEvent listener(), je passe une fonction fléchée comme suit '() => {}'


elementkeydown.addEventListener("keydown", (event) => {
    console.log("#je suis dans l'évenement keydown");
    console.log("clé event :" ,event.key);
});



//**envoyer le formulaire */
//**ici je recupère le formulaire   */
//*le nom*
// le prenom*/
//*l'addresse*

/**ici j'associe l'evenement 'submit */
//  ici je récupère la balise <form></form> avec ses enfants ensuite je le stock dans la varible elementform*/
// ici je récupère la balise <form></form> avec ses enfants


//**vas dans le document html tu me slection la balise forme tu me le stoque */
let elementForm = document.querySelector('form'); // form en minuscule
console.log("elementForm", elementForm);

            //*fonction */ //**evoyer */ //**event c'est une fonction */
elementForm.addEventListener("submit", (event) => { 
    event.preventDefault();
    console.log("#### je suis dans l'événement formulaire");

    // ici je récupère le nom et le prénom
    /**vas dans dans html j'utulise la fonction quaeryselector prends le nom  */
    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const ville = document.querySelector("#ville").value;
    const age = document.querySelector("#age").value;
    const homme = document.querySelector("#homme").value;



    // affichage des valeurs
    console.log("nom:", nom);
    console.log("prenom:", prenom);
    console.log("ville:",ville);
    console.log("age:",age);

});


const form = document.querySelector("#monForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const radioChecked = document.querySelector('input[name="sexe"]:checked');

  if (radioChecked) {
    console.log("Sexe :", radioChecked.value);
  } else {
    console.log("Aucun choix sélectionné");
  }
});





//**ici je calcule automatiquement l'age */
/** Fonction pour calculer automatiquement l'âge */
/** ici je calcule automatiquement l'âge */
function calculerAge() {
    // ICI je Récupère l'année de naissance saisie dans l'input avec l'id "anneeNaissance"
    const anneeNaissance = document.getElementById("anneeNaissance").value;

    // Récupère l'année actuelle à partir de la date du système
    const anneeActuelle = new Date().getFullYear();

    //ICI je Récupère le nom saisi dans l'input avec l'id "nom"
    const nom = document.getElementById("nom").value;

    // ICI je Vérifie si l'année de naissance est renseignée et qu'elle n'est pas dans le futur
    if (anneeNaissance && anneeNaissance <= anneeActuelle) {
        // Calcule l'âge en soustrayant l'année de naissance de l'année actuelle
        const age = anneeActuelle - anneeNaissance;

        // j'Affiche l'âge calculé dans l'élément HTML avec l'id "age_calcule"
        document.getElementById("age_calcule").textContent = age;

        // J'Affiche le nom saisi dans l'élément HTML avec l'id "nom_affiche"
        document.getElementById("nom_affiche").textContent = nom;

        // Si l'âge est 18 ou plus, la personne est majeure
        if (age >= 18) {
            alert("Cette personne est majeure");
        } else {
            // Sinon, la personne est mineure
            alert("Cette personne est mineure");
        }
    } else {
        // Si l'année de naissance n'est pas valide, affiche une alerte d'erreur
        alert("Veuillez entrer une annee de naissance valide");
    }
};

// 1. Récupérer les éléments HTML (ici tu avais commencé mais tu n'as rien fait ensuite)
