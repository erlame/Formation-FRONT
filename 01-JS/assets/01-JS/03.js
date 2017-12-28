/**
 * 
 * La Concatenation
 */
var debutDePhrase       = "Aujourd'hui";
var laDate              = new Date();
var suiteDePhrase       = ", sont présents: ";
var nombreDesStagiaires = 18 ;
var finDePhrase         =  "stagiaires.<br>";

// -- Nous souhaitons maintenant, grace à la concaténation afficher tout ce petit monde, en un seul morceau !
document.write( debutDePhrase + laDate.getDate() + '/' + ( laDate.getMonth() + 1 ) + '/' + laDate.getFullYear()
+ nombreDesStagiaires + finDePhrase ) ; 


/**
 * exercice 
 * creer une concatenation a partir des elements suivants :
 */
var phrase1  = "Je m'appelle ";
var phrase2  = "Hugo et j'ai ";
var age      = 28;
var phrase4  = " ans ! ";

document.write( phrase1 + phrase2 + age + phrase4 );
