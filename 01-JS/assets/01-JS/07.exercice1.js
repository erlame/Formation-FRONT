/* -- votre mission, que vous devez accepetr !
Réaliser une fonction permettant à un internaute de :
    -   Saisir mon prénom dans un Prompt
    -   retourner à l'utilisateur : bonjour [prénom], Quel age as-tu ?
    -   Saisir son Age 
    -   Retourner à l'utilisateur : tu es donc né en [ANNEE DE NAISSANCE].
    -   AFFICHER ENSSUITE UN RÉCAPITULATIF DANS LA PAGE .
    bONJOUR [PRÉNOM]? TU AS [AGE]! */





 // -- 1. Initialisation des Variables. 

        var dateObj       = new Date();
        var anneeActuelle = dateObj.getFullYear();
            
 // -- 2. Creation d'une fonction.

        function Hello () {
            // -- 2a. je demande à l'utilisateur son prenom.

        let prenom = prompt("Hello ! what is your name ?","<saisir votre prenom>");
        console.log(prenom);

            // -- 2b. je demande son age. 

        let age = parseInt( prompt("Hello" + prenom + "! How old are you", " <saisir votre age >"));
        console.log(age);
        console.log(typeof age);
        
            // -- 2c. deduire l'année de naissance, et l'afficher dans une "Alert".

            alert("AMAZING ! So you were born in " + (anneeActuelle - age) + "!" );
            
            // -- 2d. j'affiche tout dans la page (récapitulatif).

            document.write("Hello" + prenom + "it s AMAZING ! you re" + age + "years old !");
        }
 // -- 3. execution de ma fonction.
Hello();
   


        