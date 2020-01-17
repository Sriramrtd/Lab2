//https://www.codewars.com/kata/54fb853b2c8785dd5e000957
function chain(input, fs) {
// implement the "chain" function
return fs.reduce(function(input,fn){
return fn(input) }, input);
}