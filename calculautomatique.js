//**je récupère la liste des élements */
let elementListCommunes = document.querySelector("#listecommunes");
console.log(elementListCommunes);


//**j'utilise la boucle for pour parcourir la liste */

for(let i = 0; 1 <elementListCommunes.length; i= i+1) {
    console.log(elementListCommunes[i]);
}


//**j'utilise queryselector pour récuperer tous les membre de la meme classe */

let elementClassCommunes = document.querySelectorAll(".commune");
console.log(elementClassCommunes);

for(let i = 0; i <elementClassCommunes.length; i++) {
    console.log(elementClassCommunes[i]);
    console.log(elementClassCommunes[i].textContent);
}


//**j'ai creer un une balises a partir de javascript */

let elementSection = document.createElement("section")

elementbody = document.querySelector('body');

elementbody.appendChild(elementSection);

let nouveauTitre = document.createElement("h3")

nouveauTitre.textContent = "les communes de mayotte"

elementSection.appendChild(nouveauTitre);
console.log(elementSection);




//**je vais creer une balise a partir du javascript  */

// 1. Créer l'image
const img = document.createElement("img");

// 2. Définir la source et les attributs
img.src = "trippie.jpg"; // chemin de l’image
img.alt = "Mon image";
img.width = 200;

// 3. Ajouter l'image dans le HTML
document.getElementById("conteneur").appendChild(img);






function displayDate() {
  document.getElementById("demo").innerHTML = new Date();
}
