// const steps = (n: number): void => {
//    // Initialize a helper variable containing n * spaces using the string repeat method.
//    let whitespaceString = " ".repeat(n);
//    // Create an array of characters using the string.split method.
//    const stringArray = whitespaceString.split("");

//    for (let i = 0; i < n; i++) {
//       // Reassign the value of index i to be a hash symbol.
//       stringArray[i] = "#";

//       // Join the array and turn it into a string. Assign it to the helper string.
//       whitespaceString = stringArray.join("");

//       // Log the helper string.
//       console.log(whitespaceString);
//    }
// };
const steps = (n: number, row = 0, stair?: string): void => {
   if (n === row) {
      return;
   }
   if (!stair) {
      stair = " ".repeat(n);
   }
   const stringArray = stair.split("");
   stringArray[row] = "#";
   stair = stringArray.join("");

   console.log(stair);
   steps(n, row + 1, stair);
};

/**
 * This solution visualizes the problem as consisting as a
 */
// const steps = (n: number) => {
//    for (let row = 0; row < n; row++) {
//       let stair = "";
//       for (let column = 0; column < n; column++) {
//          if (column <= row) {
//             stair = stair + "#";
//          } else {
//             stair = stair + " ";
//          }
//       }
//       console.log(stair);
//    }
// };

// const steps = (n: number, row = 0, stair = ""): void => {
//    if (n === row) {
//       return;
//    }
//    if (n === stair.length) {
//       console.log(stair);
//       return steps(n, row + 1);
//    }

//    if (stair.length <= row) {
//       stair += "#";
//    } else {
//       stair += " ";
//    }
//    steps(n, row, stair);
// };
export default steps;
