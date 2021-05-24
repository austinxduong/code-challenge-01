import { getHouses, updateNumbers, totalCharacters, hasChildrenEntries, sortByChildren } from './more-object-keys-entries.js';

const characters = [
  {
    name: 'Eddard', 
    spouse: 'Catelyn', 
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], 
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];
  
test('it gets the names of the houses', () => {
      //arrange
  const output = getHouses(characters); //act
  expect(output.sort()).toEqual(['Greyjoy', 'Snow', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen', 'Stark'].sort()); //assert
});

test('returns an array of transformed key value pairs into strings', () => {

  const expected = ['Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842', 'Alan Turing: 222-853-5933'];

  const actual = updateNumbers({ 'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933' });

  expect(actual).toEqual(expected);

});

test('returns array of characters in data array', () => {

  const expected = 26;

  const actual = totalCharacters(characters);

  expect(actual).toEqual(expected);

});

test('hasChildrenEntries', () => {
  const input = characters; //arrange
  const output1 = hasChildrenEntries(input, 'Eddard'); //act
  const output2 = hasChildrenEntries(input, 'Euron');
  expect(output1).toEqual(true); //assert
  expect(output2).toEqual(false);
});

test('sortByChildren', () => {
  const input = characters; //arrange
  const output = sortByChildren(input); //act
  expect(output).toEqual([ {name: 'Euron', spouse: null, children: [], house: 'Greyjoy'}, { name: 'Jon S.', spouse: null, children: [],house: 'Snow'}, {name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn'}, {name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell'}, { name: 'Cersei',spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister'}, {name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen'}, {name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark'}]); //assert
});
