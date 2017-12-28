/*-----------------------
   ☮ Les Fonctions ☮
------------------------*/

// -- Declarer une fonction 
// -- Cette fonction ne retourne aucune valeur 

function ditBonjour()
    // *Lors de l'appel de cette fonction, les instructions 
    /*ci-dessous seront exécutées ...*/
     
            { alert("bonjour !");

            }

    // **

    /*Je vous appeler ma fonction "ditBonjour" et declencher des instructions . */

    ditBonjour();

// -- declarer une fonction qui prend une variable en paramétre 

         function Bonjour(Prenom , Nom)  {
            document.write("<p> Bonjour <strong>" + Prenom + " " + Nom + 
             "</strong> ! </p>");
         }

// -- Appeler / Utiliser une fonction avec des parametres 

Bonjour("Moundir" , "SALMI");

/* ----------------------------
EXERCICE 
CREER une fonction permattant d'effezctuer l'addiction de deux nombres 
passés en parametre. 
---------------------------*/

function addition(number1 , numbre2){
    return number1 + numbre2;

   /**/
}
document.write("<p>" + addition(10,5 ) + "<p>");


