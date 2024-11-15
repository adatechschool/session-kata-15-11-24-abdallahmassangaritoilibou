function getLatinCharacterList(text){
return text.split('');  //je converti les cheine de character
 //en tableau de cheine de character  avec la methode split('')
}
//je declare une constante pour stocké ce que je vais convertire Hello,World
const text = "Hello,World"
const characters = getLatinCharacterList(text);
console.log(characters);//j'affiche le mot Hello world dans la console en dans un tableau[]
