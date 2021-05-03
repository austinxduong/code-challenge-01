export function doubleNumbers(arr) {
  return arr.map(x => x * 2);
};

export function stringItUp(arr) {
  return arr.map(n => JSON.stringify(n));
}