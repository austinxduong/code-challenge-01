
export function howMuchPencil(string) {
  const hello = [];

  for (let i = 0; i < string.length; i++) {
    hello.push(string.slice(i));
  }
  hello.push('');
  return hello;
}

export function wordsToCharList(str) {

  const chars = str.split('');
  return chars;

}

export function listFoods(receipe){

  const mapFunction = (ingredient) => {
    const splitingredients = ingredient.split(' ');
    const foodsplice = splitingredients.splice(2);
    return foodsplice.join(' ');

  };

  const ingredients = receipe.ingredients.map(mapFunction); 

  return ingredients;
}


export function stepActions(recipe) {
  const arr = recipe.steps.map(n => n.split(' ').splice(0, 1)[0]);
  return arr;
}

export function removeLastCharacters(str, numberOfCharacters) {
  return str.substring(0, str.length - numberOfCharacters);
}