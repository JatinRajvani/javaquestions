 //que-25(Finding second largest number in an array)
function findSecondLargest(val) {
    let first = -Infinity;
    let second = -Infinity;
  
    for (const num of val) {
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num < first) {
        second = num;
      }
    }
  
    return second;
  }
  
  // Example usage:
  const val = [10, 5, 20, 8, 15];
  console.log(findSecondLargest(val)); // Output: 15
