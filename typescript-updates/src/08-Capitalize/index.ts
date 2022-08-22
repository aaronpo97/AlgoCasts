const capitalize = (str: string, capitalizedCharIndex: number = 0): string => {
   if (capitalizedCharIndex + 1 < str.length) {
      throw new Error("The character index you wish to capitalize does not exist.");
   }
   return (
      str
         // Create an array of all words by splitting the string whenever there is a space.
         .split(" ")
         // Map over the array, and return each word capitalized.
         .map(word => word[capitalizedCharIndex].toUpperCase() + word.slice(1))
         // Join that array together.
         .join(" ")
   );
};

export default capitalize;
