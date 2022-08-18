// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/**
 *
 * @param {number} n
 */
const reverseInt = (n: number): number =>
   Math.sign(n) * parseInt(n.toString().split("").reverse().join(""));

export default reverseInt;
