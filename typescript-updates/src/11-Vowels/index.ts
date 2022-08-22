// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str: string) {
   let vowelCount = 0;

   const vowels = ["a", "e", "i", "o", "u"];
   const stringArray = str.toLowerCase().split("");
   console.log(stringArray);

   for (let character of stringArray) {
      if (vowels.includes(character)) {
         vowelCount = vowelCount + 1;
      }
   }
   return vowelCount;
}

module.exports = vowels;
