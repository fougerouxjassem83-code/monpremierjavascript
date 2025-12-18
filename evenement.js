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

//  ici je récupère la balise <form></form> avec ses enfants ensuite je le stock dans la varible elementform*/
// ici je récupère la balise <form></form> avec ses enfants
let elementForm = document.querySelector('form'); // form en minuscule
console.log("elementForm", elementForm);

elementForm.addEventListener("submit", (event) => { 
    event.preventDefault();
    console.log("#### je suis dans l'événement formulaire");

    // ici je récupère le nom et le prénom
    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const ville = document.querySelector("#ville").value;
    const age = document.querySelector("#age").value;
    const home = document.querySelector("homme").value;



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
