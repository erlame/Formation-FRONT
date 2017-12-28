/*-----------------------------
INCREMENTATION & DECREMENTATION
-------------------------------*/

//####### INCREMENTATION #######//

var nb1 = 1;
nb1 = nb1 + 1;

    // -- affichage dans la console 
console.log(nb1);

    // -- Ecriture simplifié 
nb1++; //-- Raccourci de nb1 = nb1+ 1; -> par pas  de 1

    // -- affichage dans la console 
console.log(nb1);

//####### INCREMENTATION #######//

nb1 = nb1 - 1 ;

        // -- Ecriture simplifié 

nb1--; //-- Raccourci de nb1 = nb1- 1; -> par pas  de 1


        // -- affichage dans la console 
    console.log(nb1);

//####### Subtilité #######//
nb1 = 0 ;
console.log("nb1++ = " + nb1++);
nb1 = 0 ;
console.log("++nb1 = "+ ++nb1);