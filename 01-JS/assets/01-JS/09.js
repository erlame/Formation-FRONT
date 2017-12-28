/**---------------------------
 *      LES BOUCLES 
 *//*---------------------------*/

 // -- La boucle FOR 

 // -- Pour i = 1 ; tant que <= strictement inferieur ou égale à 10 ; alors j'incrémente i de 1.

 for(let i = 1 ; i <= 10 ; i++){
     document.write('<p>Instruction executée : <strong>' + i + '</strong></p>');
 }
 
 document.write("<hr>");
    var j = 1;
     while (j <= 10){
    document.write('<p>Instruction executée : <strong>' + j + '</strong></p>');
    j++;
 }

 // -- EXERCICE 
 // -- supposons le tableau suivant :

 var prenoms = ['jean', 'Marc', 'mattieu', 'Luc', 'Pierre', 'Paul', 'Hugo'];
 /* -- consigne : Grace a une boucle FOR, Affichez la liste des prenoms 
 du tableau suivant dans le console ou sur votre page.*/

 /* methode rapide d'execution
 for(let i=0; i<7; i++){
   console.log(prenoms[i]);
   console.log('- - -')
 } */

/*
 for(let i = 0 ; i < prenoms.length ; i++){
   console.log(prenoms[i]);
   console.log('- - -') cette ligne separe les 3 resultats du meme exo 
 }*/

    var j = 0;
    while (j < prenoms.length){
    console.log(prenoms[j]);
    j++;
 }
 console.log('- - -')

 
 // -- meme exo avec la boucle ForEach
 // -- Attention A LA PERFORMANCE !!!

    prenoms.forEach(afficheprenoms);
    
    function afficheprenoms(prenom, indice){
        console.log(prenom);
    }

    // https://benhollis.net/blog/2009/12/13/investigating-javascript-array-iteration-performance/
    // https://leftshift.io/4-javascript-optimisations-you-should-know
