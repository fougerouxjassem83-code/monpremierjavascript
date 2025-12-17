let elementSpanDateDuJour = document.querySelector("#dateDuJour");
let elementSpanDateDuJourformat2 = document.querySelector
("#dateDuJourFormat2");

//je declare en utilisant**
const maDate = new Date(); 

let elementboutonValiderDate= addEventListener("click", function () {
  // Action à réaliser lors du clic sur le bouton
  
  
  elementSpanDateDuJour.innerhtml = maDate;
    elementSpanDateDuJour.textCotent = maDate.toLocaleDateString();


});
