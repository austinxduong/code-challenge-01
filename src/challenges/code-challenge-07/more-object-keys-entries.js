

export function getHouses(characters) {
  const arr = [];
  for (let character of characters) {
    for (let key of Object.keys(character)) {
      if (key === 'house') {
        arr.push(character[key]);
      }
    }
  }
  return arr;
}


export function updateNumbers(obj) {
  const arr = [];
  Object.keys(obj).forEach(key => {
    arr.push(`${key}: ${obj[key]}`);
  });
  return arr;
}


export function totalCharacters(arr) {
  let num = 0;
  arr.forEach(house => {
    num++;
    if (house.spouse) num++;
    num += house.children.length;

  });

  return num;

}