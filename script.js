// complete the given function

function palindrome(str){
let arr = str.split(" ");
let word = arr.join("");

 if(word === word.split('').reverse().join('')) {
   return true;
 }else{
   return false;
 }
}
module.exports = palindrome
