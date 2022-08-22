// Solution One

// const createCharMap = (str: string) => {
//    const characterMap: { [key: string]: number } = {};
//    for (let char of sanitizeString(str)) {
//       characterMap[char] = !!characterMap[char] ? characterMap[char] + 1 : 1;
//    }
//    return characterMap;
// };

// const anagrams = (stringA: string, stringB: string): boolean => {
//    // Create character map for String A and String B.
//    const stringACharMap = createCharMap(stringA);
//    const stringBCharMap = createCharMap(stringB);

//    // Check if the number of keys in the string A map is equal to the number of keys in the string B map.
//    if (Object.keys(stringACharMap).length !== Object.keys(stringBCharMap).length) {
//       return false;
//    }

//    // Iterate over one of the character maps.
//    for (let character in stringACharMap) {
//       // If the current iterated character in stringACharMap isn't found in the stringBCharMap, set isAnagram to false and break the loop.
//       const characterKeysMatch = character in stringBCharMap;
//       if (!characterKeysMatch) {
//          return false;
//       }
//       if (stringACharMap[character] !== stringBCharMap[character]) {
//          // If the value (i.e. number of occurrence of the currently iterated character) isn't the same in the stringBCharMap, set isAnagram to false and break the loop.
//          return false;
//       }
//    }
//    return true;
// };

// // Note: the solution works without the characterKeysMatch boolean check. The second if statement would just use undefined as the value which will result in the statement equating to false.

const sanitizeString = (str: string) => str.replace(/[^\w]/g, "").toLowerCase();

const convertStringToAlphaOrder = (str: string): string =>
   sanitizeString(str).split("").sort().join("");

// This solution is preferable as the time complexity of the algorithm is not scaled to the length of the string. Solution One = O(n) vs Solution Two = 0(1)
const anagrams = (stringA: string, stringB: string): boolean => {
   // Sanitize both strings and turn it into an array of characters and sort it alphabetically. Join it back together.
   const sortedStringA = convertStringToAlphaOrder;
   const sortedStringB = convertStringToAlphaOrder;

   // Return whether the first sorted string is identical to the second sorted string.
   return sortedStringA === sortedStringB;
};
export default anagrams;
