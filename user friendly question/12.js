// 12. **Generate Fibonacci Sequence** 
function fibonacci(n) {
    let fib = [0, 1]; // Starting values for the series
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; // Compute the next Fibonacci number
    }
    return fib.slice(0, n); // Return the first n Fibonacci numbers
  }
  
  console.log(fibonacci(11)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]