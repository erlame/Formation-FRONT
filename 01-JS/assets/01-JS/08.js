/**                             --
 * 
 *  LES CONDITIONS 
 * 
                             */


/*var MajoriteLegaleFR = 18;

if(14>=MajoriteLegaleFR){
    alert('bienvenue ! ');
}
// -- Le else n'est pas obligatoire .
else{
    alert ('Google');
}/*

/**
 * exercice 
 * creer une fonction permettant de verifier l'age d'un visiteur (prompt).
 * s'il a la majorité légale, alors je lui souhaite la bienvenue,
 * sinon, je fait une redirection sur google apres lui avoir sighalé le soucis.
 */

/*                correction 


 // -- Deaclarer la majorité 

 var MajoriteLegaleFR = 18;

 // -- 2. creer une fonction pour demander son age .
 /**
  * si l'age de l'utilisateur passé en parametre en superieur ou egale à la 
  majorité légale, alors la fonctionretourne vrai.
  si nn elle retourne faux.
  * @param{Int} age
  * @return{Boolean}
  */
/*
 function verifierAge(age){
     if(age>=MajoriteLegaleFR){
         return true;

     } else{return false;}
 }

 // -- 3.demander à l'utilisateur son age 
 var age = parseInt(prompt("Bonjour, quel age avez vous?" , "<Saisissez votre Age>") );

 // -- 4. Verification de l'Age de l'utilisateur

 if(verifierAge(age)) {
     
    // 4a. J'affiche un message de bienvenue.
    alert('Bienvenue sur mon site internet reservé pour les majeurs');
    document.write('0_0!!!');

 } else{

 }
// -- 4b. j'effectue une redirection 

document.location.href = "http://lmgtfy.com"; 


/*----------------------------------------------------------*
|           ~~LES OPERATEURS DE COMPARAISON~~
|   L'operateur de comparaison " == " sighifie : Egal à 
|   il permet de verifier que 2 variable sont identiques 
|
|   L'operateur de comparaison " == " signifie :
|    Strictement egal à. Il va comparer la valeur 
|    et le type de données.
|
|    L'operateur de comparaison " != " signifie Different de.
|
|    L'operateur de comparaison "!==" : Strictement Different de.
|    
|
|
|
|------------------------------------------------------------*/



/*-- EXERCICE :
J'ARRIVE SUR eSPACE Sécurisé AU MOYEN D'UN EMAIL ET D'UN MOT DE PASSE.

Je dois saisir mon email et mon mot de passe afin d'etre authenfié 
sur le site.

En cas d'echec une alert minforme du probleme.
si tous se passe bien, un message de bienvenue m'acceuil.*/




// -- BASE DE DONNEES 

        var email, mdp;

        email = "wf3@hl-media.fr";
        mdp   = "wf3";


// -- 1. je vais demander a l'utilise son email

        var emailUser = prompt("Bonjour, quel est votre email ?", "<saisissez votre email>");

// -- 2. Je verifie si l'email(emailUser) correspond à celui en BDD(email)

        if(emailUser == email) {

    // -- 2a. tous est ok, je continu la verification avec le mot de passe.

    // -- 2a1 Je demande à l'utilisateur son mot de passe.
    var mdpUser = prompt("Votre mot de passe" , "<saisissez votre mot de passe>");

    // -- 2a2 
    if(mdpUser === mdp){

        alert("Bienvenue !");
    }
        else {

        alert("ATTENTION, nous n'avons pas reconu votre mot de passe");
        }

    

    
    } else {

        // -- 2b. les emails ne correspondent pas ... 

        alert("ATTENTION ! nous n'avons pas pas reconnu votre adresse email" );
    }


// -- Exemple des fonctions 
/**
 * verifier si le couple Email/Mdp est correct.
 * 
 * 
 * 
 * 
 * 
 */
function monUtilisateurEstCorrect(email,mdpUser)
    {
    if(emailUser === email && mdpUser === mdp)    {
        return true;
    } else{
        return false;
    }
}


var emailUser = prompt("Bonjour, quel est votre email ?", "<saisissez votre email>");
var mdpUser = prompt("Votre mot de passe" , "<saisissez votre mot de passe>");

if(monUtilisateurEstCorrect(emailUser, mdpUser)){
        alert("Bienvenue" + emailUser);

}else{
    alert("ATTENTION ! email/mot de passe incorrect");
}

/**--------------------------------------------------------
 *      -- LES OPERATEURS LOGIQUES --
 * ---------------------------------------------------------------
 *  L'operateur de comparaison " == " signifie : Egal à
 *  Il permet de verifier que 2 variables sont identiques.
 * 
 *  L'operateur ET : && ou AND 
 *  SI la combinaison emailUser et email correspond ET la
 *  combinaison mdpUser et mdp correcpond.
 *      --> Dans cette consition , les 2 doivent obligatoirement
 *  correspondre pour etre validée.
 *   Ex : if(emailUser == email && mdpUser == mdp){...}
  
 *      #### l'operateur OU: || ou OR ####
 * 
 *  Si la combinaison emailUser et email correspond ET/OU la combinaison
 *  mdpUser et mdp correspond.
        -->Dans cette condition, au moins l'une des deux doit 
        correspondre pour etre validée.
    Ex : if(emailUser == email || mdpUser == mdp){...}

         ### l'operateur " ! " ou encore NOT ####

         L'operateur " ! " signifie le CONTRAIRE DE ... ou NOT

         var monUtilisateurEstApprouvé = true;
         if(!monUtilisateurEstApprouvé){...} : Mon utilisateur
         n'est pas approuvé.

        Reviens à écrire 
        if(monUtilisateurEstApprouvé == false){...}
 * 
 -------------------------------------------------------------------*/