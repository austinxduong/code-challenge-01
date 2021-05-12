import { toLastNames } from './code-challenge-12';

test("iterates over an array of people objects and creates a new list of each person's full name using the array method 'map'", () => {
  const input = [{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }];
  const output = ['Jane Doe', 'James Bond'];
  expect(toLastNames(input)).toStrictEqual(output);
});