// 28. **Calculate the GCD of Two Numbers** 
// que-28(finding Gcd)
function gcd(a, b) {
    // Ensure the numbers are non-negative
    a = Math.abs(a);
    b = Math.abs(b);
  
    // Continue until b becomes 0
    while (b != 0) {
      let temp = b;
      b = a % b; // Compute the remainder
      a = temp; // Update a to be the old value of b
    }
    
    // a now contains the GCD
    return a;
  }
  console.log(gcd(18, 12));
  
  