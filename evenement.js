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
let elementForm = document.querySelector('Form');
console.log("elementForm", elementForm);

elementForm.addEventListener("submit" , (event) => { 
event.preventDefault();
console.log("####je suis evénement formulaire");
//ici je veux récupérer le nom l'affiché
const nom = document.querySelector("#nom").value;
const prenom = document.querySelector("#prenom").value; 


});

