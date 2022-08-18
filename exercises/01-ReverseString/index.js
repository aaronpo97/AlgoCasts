// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 *
 * @param {string} str
 */
function reverse(str) {
   // convert string into array of characters
   const stringArray = str.split("");

   // use reverse method on array
   stringArray.reverse();

   const result = stringArray.join("");

   return result;
}
module.exports = reverse;
