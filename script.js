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
console.log(resulta);

// Vérification du caractére
if (resulta === ".-") {
  console.log(resulta, "et la bon caractére !");
} else {
  console.log("échoué...");
}
console.log(translateLatinCharacter("A"));
console.log(translateLatinCharacter("a"));

function encode(text2) {
  const characters = getLatinCharacterList(text2);
  const equivalantMors = characters
    .map((char) => translateLatinCharacter(char))
    .join(" ");
  console.log(equivalantMors);
}
encode();

function getMorseCharacterList(text3) {
  //Séparer les mots par des slashs
  const morseWords = text3.split(" / ");
  // Pour chaque mot, séparer les lettres par des espaces
  return morseWords.map((word) => word.split(" "));
}

// const text3 = "'-','---','-','---'";
// const character3 = getMorseCharacterList(text3);
// console.log(character3);

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

function decode(){
const morseMessage = "... .- .-.. ..- - / -.-. .- /  ...- .- /";//je stock le mot Salut en morse
const morseCharacterList = getMorseCharacterList(morseMessage);
console.log(morseCharacterList);
const decodedMessage = morseCharacterList
  .map((word) => word.map((char) => translateMorseCharacter(char)).join(""))//convertit chaque caractère morse en sa lettre latine correspondante et les fusuonne
  .join(" "); //fusuonne les motavec une espace
console.log(decodedMessage); // salut ca va
}
decode("...")