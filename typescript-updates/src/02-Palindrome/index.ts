/*
--- Directions
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
  palindrome("abba") === true
  palindrome("abcdefg") === false
*/

/**
 * Step 1: Reverse the string using the array split-reverse-join technique.
 * Step 2: Compare the reversed string against the original string. If they are equal, then the original string is a palindrome.
 */
const palindrome = (str: string): boolean => str.split("").reverse().join("") === str;

export default palindrome;
