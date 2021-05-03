export function doubleNumbers(arr) {
  return arr.map(x => x * 2);
};

export function stringItUp(arr) {
  return arr.map(n => JSON.stringify(n));
}

export function capitalizeNames(arr) {
  const lowercased = arr.map(n => n.toLowerCase());
  return lowercased.map(n => n.charAt(0).toUpperCase() + n.substr(1).toLowerCase());
}

export function namesOnly(arr) {
  return arr.map(n => n.name);
}