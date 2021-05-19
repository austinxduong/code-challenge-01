
export function sortByChildren(arr) {
  return arr.sort((a, b) => 
    a.children.length - b.children.length);
}
    



export function containsW(str) {
  if (/w/g.test(str)) {
    return true;
  }
  else {
    return false;
  }
};