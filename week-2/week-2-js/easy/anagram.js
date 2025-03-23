/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  return str1.toLowerCase().split('').sort().join('') == str2.toLowerCase().split('').sort().join('');
}
// console.log(isAnagram('hello', 'world'));


module.exports = isAnagram;



// The function charCodeAt(i) in JavaScript returns the Unicode (ASCII) value of the character at the specified index i in a string


//Sorting a string
// .split('') → Converts the string into an array of characters. => Don't mutate in variable

// .sort() → Sorts the array alphabetically. => Mutate in variable

// .join('') → Converts the sorted array back into a string => Don't mutate in variable