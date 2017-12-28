//alert("test");
// deux slash pour faire un commentaire uniligne.
/* ici, je peux faire un commentaire 
sur plusieurs lignes ... 
raccourci: CTRL + / 
      ou : CTRL + SHIFT + /
 */ 
// -- 1. Declarer une variable en JS
var prenom;
// -- 2. Affecter une valeur 
Prenom="moundir";

// --3. Afficher la valeur de ma variable dans le console du navigateur.
console.log(Prenom)
/*------------------------------------------------------------------------
|              les types de variables                                     |
 ------------------------------------------------------------------------*/ 
 // -- "typeof" me permet de connaitre le type de ma variable
 console.log(typeof Prenom);
 // -- Declaration et Affectation d'une valeur à une variable 
 var Age=22; 
 // -- Afficher dans la console 
 console.log(Age)
// -- verifier son type 
console.log(typeof Age);
/*------------------------------------------------------------------------
|             LA PORTEE DES VARIABLES                                    |
|                                                                        | 
|   LES variable declarées directement à la racine du |fichier sont appelés |
|   variables"GLOBALES".                                                    |
|   ELLES SONT DISPONIBLES DANS L4ENSEMBLE DE VOTRE DOCUMENTS Y COMPRIS DANS|
|   LES FONCTIONS OU LES / BOUCLES.
|   La portée des variables GLOBALES s'arretent au fichier. si je change 
|   de page, les variables n'existent plus.
|   Les variables déclarées à l'interieur d'une fontion sont appelées 
|   variables "LOCALES"
|    Elles sont disponibles uniquement à l'interieur de celles-ci.
|------------------------------------------------------------------------*/ 

 //-- Les Variables de type FLOAT 
 var uneDecimale = -2.984;
 console.log(uneDecimale);
 console.log(typeof uneDecimale);

 //-- lES BoOléens (VARI/FAUX)
 var unBooleen = false; // -- true 
 console.log(unBooleen);
 console.log(typeof unBooleen);
 /*------------------------------------------------------------------------
|                           les constantes                               |
|La declaration CONST permet de creer une constante accessible UNIQUEMENT|
|en lecture ...                                             
| 
|Sa valeur ne pourra pas etre modifier par des reaffectation ulterieurs.
|
|une constante ne peut pas etre déclarée à nouveau .                     |
|                                                                        |
|GENERALEMENT par convention, les constantes sont en MAJUSCULES          |
|                                                                        | 
|                                                                        |
|    
|------------------------------------------------------------------------*/ 

const HOST = "localhost";
const USER = "root";
const PASW = " mysql";
// je ne peux pas faire cela ...
// USER = "127.0.0.1";
// TypeError: Assignement to constant variable.

 /*------------------------------------------------------------------------
|                           les constantes                               |
|       au fur et à mesure que l'on affecte ou ré-affecte
|       des valeurs à une variable, celle-ci prend la nouvelle 
        valeur et le nouveau type.

         en java-script (ECMA Script - ES), les variables sont auto-tupées.

         pour convertir une variable de type NUMBER en STRING et STRING 
         en NUMBER, je peux utiliser les fonctions natives de JavaScript
|                                             
| 
|------------------------------------------------------------------------*/ 

console.log('---');


var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/* -- la fonction parseInt() permet de retourner un ENTIER  à  partir d'un STRING. -- */

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//** je Réaffecte une Valeur à ma variable. */

unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

// -- La fonction parseFloat() permet de retourner un Float à partir d'un string 

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//-- conversion d'un nombre en String avec toString()

var unNombreQuiDevientString = 10;
console.log(unNombreQuiDevientString);
console.log(typeof unNombreQuiDevientString);
console.log(typeof unNombreQuiDevientString.toString());
