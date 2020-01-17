https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3
function sumEvenNumbers(input) {
return input.filter(e=>e%2==0).reduce((n,m)=>n+m,0)
}
