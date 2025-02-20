//le script sera chargé aprés que le dom est bien charger
document.addEventListener('DOMContentLoaded', function() {
  // Sélection des éléments
  const inputField = document.getElementById('morse');
  const toMorseButton = document.getElementById('tomorse');
  const toTextButton = document.getElementById('totext');
  const outputField = document.getElementById('output');

  // Ajout des écouteurs d'événements
  toMorseButton.addEventListener('click', function() {
      const input = inputField.value;
      const result = encode(input);
      outputField.value = result;
  });

  toTextButton.addEventListener('click', function() {
      const input = inputField.value;
      const result = decode(input);
      outputField.value = result;
  });
});

function getLatinCharacterList(text) {
  return text.split(""); //je converti les cheine de character
  //en tableau de cheine de character  avec la methode split('')
}
//je declare une constante pour stocké ce que je vais convertire Hello,World
const text = "Hello, World";
const characters = getLatinCharacterList(text);
console.log(characters); //j'affiche le mot Hello world dans la console dans un tableau[]

function translateLatinCharacter(characters) {
  const latinToMorse = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
  };
  const conversion_Char_Maj = characters.toUpperCase(); // Conversion en majuscule pour la recherche dans le dictionnaire
  return latinToMorse[conversion_Char_Maj]; // Retourne la traduction si elle existe, sinon undefined
}

const Ma_Lettre = "A"; // je stock la à tradure
const resulta = translateLatinCharacter(Ma_Lettre); //j'appel m'a fonction en lu mettant en parametre la variable qui stock "A"


// Vérification du caractére
if (resulta === ".-") {
  console.log(resulta, "et la bonne caractére !");
} else {
  console.log("échoué...");
}
console.log(translateLatinCharacter("A"));

function encode(text2) {
  if (!text2) return "";
  const characters = getLatinCharacterList(text2);
  const equivalantMors = characters
    .map((char) => translateLatinCharacter(char))
    .join(" ");
  return equivalantMors; //retourne le resulta
}


function getMorseCharacterList(text3) {
  //Sépare les mots par des slashs
  const morseWords = text3.split(" / ");
  // Pour chaque mot, séparer les lettres par des espaces
  return morseWords.map((word) => word.split(" "));
}



function translateMorseCharacter(morseChar) {
  const morseToLatin = {
    "-": "T",
    "--": "M",
    "---": "O",
    "--.": "G",
    "--.-": "Q",
    "--..": "Z",
    "-.": "N",
    "-.-": "K",
    "-.--": "Y",
    "-.-.": "C",
    "-..": "D",
    "-..-": "X",
    "-...": "B",
    ".": "E",
    ".-": "A",
    ".--": "W",
    ".---": "J",
    ".--.": "P",
    ".-.": "R",
    ".-..": "L",
    "..": "I",
    "..-": "U",
    "..-.": "F",
    "...": "S",
    "...-": "V",
    "....": "H",
  };

  return morseToLatin[morseChar] || "";
  // Retourner la lettre correspondante ou une chaîne vide si non trouvé
}

function decode(morseMessage) {
  if (!morseMessage) return '';
  const morseCharacterList = getMorseCharacterList(morseMessage);
  const decodedMessage = morseCharacterList
    .map((word) => word.map((char) => translateMorseCharacter(char)).join("")) //convertit chaque caractère morse en sa lettre latine correspondante et les fusuonne
    .join(" "); //fusuonne les mots avec une espace
    return decodedMessage
}


