//https://www.codewars.com/kata/565b112d09c1adfdd500019c
function nthChar(words) {
    var str = '';
    for (var i=0; i<words.length; i++) {
        str = str + words[i][i];
    }
    return str;
}