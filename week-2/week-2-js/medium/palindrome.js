/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Step 1- LCASE
  str = str.toLowerCase();

  // // Removing the spaces
  // str = str.split(" ").join("");
  
  // Removing the punctuation marks and space also handled here itself
  str = str.split(/[ ,.;!?]+/).join("");

  // Checking by reversing 
  let str1 = str;
  if(str1 == str.split("").reverse().join("")) return true;
  return false;

}

module.exports = isPalindrome;


// First we will convert all in lower case
// Then we will split on the the basis of no spaces
// Then join them to form a new string

// Step 2: Again split them on the basis of spaces
// And join them after that 
// So we get rid of all the spaces 

// Step 3: Split them on the basis of punctuation such as '.', ',', '!', '?'
// And join them so we got rid of the punctuation marks


// ---------------------------------------------------------------------------------------------------
// Using multiple delimeters in split
// Yes! In JavaScript, you can split a string using multiple delimiters by using regular expressions
// split(/[,;| ]+/)

// / → Starts a regular expression.

// [, ] → Character set (matches any character inside it).

// ,;| → The delimiters (comma, semicolon, pipe, and space).

// + → Matches one or more occurrences of the delimiters.

// / → Ends the regular expression.