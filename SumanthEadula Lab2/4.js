//https://www.codewars.com/kata/56aed5db9d5cb55de000001c
function twoCount(n) {
  let x = 0;
  while(n % 2 === 0) {
    x++;
    n /= 2;
  }
  return x;
}