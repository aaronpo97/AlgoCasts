const fizzBuzz = (n: number): void => {
   for (let i = 1; i < n; i++) {
      let output = "";

      if (i % 3 === 0) {
         output = output + "fizz";
      }
      if (i % 5 === 0) {
         output = output + "buzz";
      }
      if (i % 8 === 0) {
         output = output + "foo";
      }
      console.log(output || i);
   }
};

fizzBuzz(200);
