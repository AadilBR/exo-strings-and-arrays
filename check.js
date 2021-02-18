/* Vérifier si dans le texte suivant le mot Javascript est présent: */

let str = "'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'"
    
// Vérifie si la sous-chaîne existe dans la chaîne de caractères
let index = str.indexOf("Javascript'");    
if(index !== -1){
    console.log("le mot Javascript est présent.");
} else{
    console.log("le mot Javascript n'est pas présent!");
}


let str2 = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript';

let word = 'Javascript';

console.log(`The word "${word}" ${str2.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "Javascript" is in the sentence"