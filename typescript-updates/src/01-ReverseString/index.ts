/*
--- Directions
Given a string, return a new string with the reversed
order of characters
--- Examples
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
*/

/**
 * Step 1: Convert the string into an array of characters using the .split() string method.
 *
 * Step 2: Reverse the character array into its retrograde using the .reverse() array method.
 *
 * Step 3: Join the reversed character array into a new string using the .join() array method.
 */
const reverse = (str: string): string => str.split("").reverse().join("");

export default reverse;
