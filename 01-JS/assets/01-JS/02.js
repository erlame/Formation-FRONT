// -- déclarer un tableau Indexé
var monTableau = []; /* c la 1ere maniere de faire */
var myArray    = new Array ; /* c la 2eme maniere de faire */

// -- affecter des valeurs à un tableau indexé 

monTableau [0] = "Marie-Pierre";
monTableau [1] = "Hugo";
monTableau [2] = "Hamid";

// -- Afficher le contenu de mon tableau dans la console 
console.log(monTableau[1]); // -- Hugo
console.log(monTableau[2]); // -- Hamid
console.log(monTableau); // -- afficher toutes les données .

// -- Déclarer et affecter des valeurs à un tableau indexé.
var NosPrenoms  = ["Marie-pierre","Thomas","Olivier","Chloé","Riad","Hugo"];
console.log(NosPrenoms);

// -- déclarer et affecetr des valeurs à un objet .
// -- pas de Tableau Associatif en JS !!!!

var coordonnee = {
    prenom : "Hugo",
    nom    : "LIEGEARD",
    age    : 28 

};
console.log(coordonnee);
console.log(typeof coordonnee);

// -- Je vais creer 2 tableaux indexé 
var listeDePrenoms = ["Hugo", "marie-pierre", "Lounis", "Romain"];
var listeDenoms    = ["LIEGEARD", "DUPOUX", "DGADEN", "ELIE"];

// -- Je vais créer un tableau à 2 dimensions à partir de mes 2 tableaux precedents.
var Annuaire = [ listeDePrenoms, listeDenoms];
console.log(Annuaire);

// -- HUGO LIEGEARD
console.log(Annuaire[0][0]);
console.log(Annuaire[1][0]);

// -- Marrie-Pierre DUPOUX
console.log(Annuaire[0][1]);
console.log(Annuaire[1][1]);


// -- exercice creer un tableau à 2 dimensions appelé "annuaireDesStagiaires" qui contiendra 
// -- toutes les coordonnes pour chaque stagiaire.
// -- Ex. Nom, Prenom, Tel

/*var annuaireDesStagiaires = [listePrenoms,listeNoms,listeTel];
var listeDePrenoms = ["Hugo", "marie-pierre", "Lounis", "Romain"];
var listeDenoms    = ["LIEGEARD", "DUPOUX", "DGADEN", "ELIE"];
var listeTel       = ["060000","060001","060003","060004"];

console.log(annuaireDesStagiaires[0][0]);
console.log(annuaireDesStagiaires[1][0]);
console.log(annuaireDesStagiaires[][]);

 // -- **************coorection********************* */

var Annuaire = [

    { Prenom : 'Hugo',  nom :'LIEGEARD',  tel : "07 xx xx xx xx"},
    { Prenom : 'Chloé', nom :'THUILLIER', tel : "07 xx xx xx YY"},
    { Prenom : 'Anis',  nom :'CHAHBANI',  tel : "07 xx xx xx ZZ"}
];

console.log(Annuaire);
console.log(Annuaire[1]);
console.log(Annuaire[1]['Prenom']);
console.log(Annuaire[1].Prenom);

/*                                                             */
// -- Exemple de Tableau 3D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.fixe);

/*-------------------------------------------
|    Ajouter un Element                     | 
|-------------------------------------------|*/

var Couleurs = ["Rouge","Jaune", "Vert"];
/**
 * si je souhaite ajouter un element dans mon tableau.
 * Je fait appel à la fonction push() qui me renvoi le nombre d'elements de mon tableau;
 * que je peux recuperer facultativement dans un variable.
 */

 console.log(Couleurs);
 var nombreElementsDeMonTableau = Couleurs.push("Orange");

 /* là pour voir le nombre d'elements dans mon tableau */
 console.log(Couleurs);
 console.log(nombreElementsDeMonTableau);

 /**
  * NB : la fonction unshift() permet d'ajouter un ou  plusieurs elements en debut du 
   tableau .
  */

 /*-------------------------------------------
|    |RECUPERER ET SORTIR LE DERNIER ELEMENT| |
|                                             |
|--------------------------------------------*/    

/**
 * la fonction pop() me permet de supprimer le dernier element de mon tableau 
 * et d'en recuperer la valeur.
 * 
 * la meme chose est possible avec le premier element ; en utilisant la fonction shift()
 * 
 * NB: la fonction splice() vous permet de faire sortir un ou plusieurs elements 
 * de notre tableau 
 */

var monDernierElement = Couleurs.pop();
console.log(monDernierElement);
console.log(Couleurs);