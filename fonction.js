console.log("section function");

//les fonction en java scrip



//la fonction 

//avant on calculer comme ça mais plus maintenant
function additionner(chiffre1, chiffre2) {

    let resultat = chiffre1 + chiffre2 ; 
    
    return resultat ; 

}





//**ici j'utilise la fonction additionner(chiffre1, chiffre2) pour calculer la somme de deux nombres */


    //**toutes es operations se font dans une fonction et on utilise  */

let somme1 = additionner(15,8); //**somme quand utilise c'est pour designer le total d'addition */
console.log(" somme1 :",somme1);
 

//ici on va soustraire donc voila comment coder

function soustraire(chiffre1,chiffre2){
    let resultat = chiffre1 - chiffre2;
    return resultat;
};



let resteSoustraction = soustraire(15, 8);
console.log("resteSoustraction :", resteSoustraction);

    



// ici je vais faire une multiplication voila mon codage 
// donc**



/**
 * 
 * @param {*} chiffre1 
 * @param {*} chiffre2 
 * @returns
 * chiffre1 signifie tout simplementl le premier paramettre que tu dois multiplier
 *  chiffre1 signifie tout simplementl le deuxiemme paramettre que tu dois multiplier
 */
    //*ici jai déclaré ma variable function
function multiplier(chiffre1,chiffre2){
    let resultat = chiffre1 *chiffre2 //**let résultat ici j'appelle ma fonction */
    return resultat;       

};

let resteMultiplier = multiplier(14,5);
console.log("resteMultiplier:", resteMultiplier);