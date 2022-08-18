function maxChar(string: string) {
   const characterMap: { [key: string]: number } = {};

   for (let char of string) {
      const characterExistsInMap = !!characterMap[char];
      characterMap[char] = characterExistsInMap ? characterMap[char] + 1 : 1;
   }

   let mostCommonCharacter;

   for (const character in characterMap) {
      if (!mostCommonCharacter || mostCommonCharacter.usage < characterMap[character]) {
         mostCommonCharacter = { character, usage: characterMap[character] };
      }
   }

   return mostCommonCharacter?.character;
}

console.log(maxChar("Faggggggot"));
