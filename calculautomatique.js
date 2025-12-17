//**je récupère la liste des élements */
let elementListCommunes = document.querySelector("#listecommunes");
console.log(elementListCommunes);


//**j'utilise l a boucle for pour parcourirla liste */

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

const img = document.createElement("img");
img.src = "trippie.jpg";          // chemin ou URL de l'image
img.alt = "Description";
img.width = 300;

document.getElementById("container").appendChild(img);
console.log(img);





//**ici je met la balise qui permettra de d'afficher la date en temps et en heure
// function displayDate() {
  document.getElementById("demo").innerHTML = Date();
