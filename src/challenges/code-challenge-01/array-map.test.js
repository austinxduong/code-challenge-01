import { doubleNumbers } from './array-map.js';

test('doubles numbers', () => {
  const input = [2, 5, 100]; // arrange
  const output = doubleNumbers(input); // act
  expect(output).toEqual([4, 10, 200]); // assert
});
// next test for capitalizeNames (add import too)