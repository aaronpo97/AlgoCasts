// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/**
 *
 * @param {number} n
 */
// function fib(n: number) {
//    const fibArray = [0, 1];
//    for (let i = 2; i <= n; i++) {
//       fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
//    }
//    return fibArray[n];
// }

// this is exponential runtime - you can improve runtime by using memoization, storing the arguments of each function call along with the result.
function fib(n: number): number {
   if (n < 2) {
      return n;
   }
   return fib(n - 1) + fib(n - 2);
}

export default fib;
