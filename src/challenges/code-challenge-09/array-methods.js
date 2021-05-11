
export function howMuchPencil(string) {
  const hello = [];

  for (let i = 0; i < string.length; i++) {
    hello.push(string.slice(i));
  }
  hello.push('');
  return hello;
}