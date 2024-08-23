// 16. **Remove Duplicates from an Array** 
let arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];
  
  function removeDuplicates(arr) {
  return arr.filter((item,
  index) => arr.indexOf(item) === index);
  }
  console.log(removeDuplicates(arr));  
  console.log(arr.length) 