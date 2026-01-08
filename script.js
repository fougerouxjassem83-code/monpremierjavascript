
            let nom="Fougeroux";    
            let prenom="Jassem";
            let age= 18;
            let prix= 17;
            const nombreDcimal = 3.4123;    
            const nombreNegatif = -509;
            const nombreFraction = 1/3;
            console.log("bonjour, je m'appelle",nom,prenom ,"j'ai",age,"ans",); // ICI J AI MON "STRING" QUI EST LE TEXT
            console.log("les tomates coute",prix,);
            console.log("euro","NombreDcimal",nombreDcimal,);
            console.log("NombreFraction",nombreFraction);
            console.log("NombreNegatif",nombreNegatif);


        //STRING EST UNE CHAINE DE CARACTERE

                /*Ici j'ai mes variables déclarés ! */
            let salutation = "bonjour les gens";
            let greeting = "good mornig";
            let andabou = "kwezi";
            let commune = "M'tsamboro";
            let village = "M'tsahara";


                /*Donc pour enssuite voir ma variable je vais devoir mettre la conso pour  */
            console.log(salutation);
            console.log(greeting);
            console.log(andabou);
            console.log(commune);
            console.log(village);


            /*Ici j'ai daclaré ma variable <Boolean> qui me permet de mettre une la valeur Vrai et Faux  */

            let vrai = true;
            let faux = false;
            console.log(vrai);
            console.log(faux);

            
            /* j'ai ici la variable Aray*/
            /*QUI permet de faire un tableau le tableau est encadré par [] */    

        let eleve =["Mamadou","oustade","booba","scientifique","bounou","mchangama","anzlati","yoane","degamine","raida"];
        console.log(eleve);
                
        console.log(eleve[0]);   // j'ai récuperer le premier membre du tableau grace à l'indice 0
        console.log(eleve[1]);   // j'ai récupéré le deuxième membre du tableau grace à l'indice 1 
        console.log(eleve[2]);   // j'ai récupéré le troisième membre du tableau grace à l'indice 2




        //VARIABLE OBJECT  'DANS UN OBJECT ON PEUT RETROUVER UN UNE VALEUR ET UNE PROPRIETE "UN OBJECT EST ENCADRE AVEC DES ACCOILADES{}"
        // EN JAVASCRIPTE C'EST COMME 
        let  client = {
            nom :"Mamadou",
            village : "Koungou magodja",
            age : "19",
            score : [4,7,2]

        };

    
    
        console.log (client.nom);
        console.log(client.village);



        // un odjet ici c'est 

let joueurprofessionnel = {
    nom : "zinedine yazid zidane",
    datedenaissance : ["23.6.1972"],
    nationalite : ["francais et algérien"],
    piedfort : "droit",
    post : "milieu offensif",
};
        
console.log (joueurprofessionnel);



//ici nous prenoms un autre exemple d'objet d'une femme politique pour bien comprendre

let femmepolitique = {
    prenom : "zaina mdere",
    Naissance : 1920.1922,
    Deces : 1999,
    Activiter : "femme politique",
    Membre : "chatouilleuse",

};

//console.log permer d'afficher l'objet
console.log (femmepolitique.prenom); //jai récuperé le prénom de mon objet
console.log (femmepolitique.Membre);// jai récuperé le membre de mon objet
console.log (femmepolitique.Activiter);//jai récuperé le l'activiter de mon objet
