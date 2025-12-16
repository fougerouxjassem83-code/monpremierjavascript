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

