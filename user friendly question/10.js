// 10. **Check if a String Contains a Substring** 
function containsSubstring(str, substr) {
    for (i = 0; i < str.length; i++) {
      for (j = 0; j < substr.length; j++) {
        if (str[i + j] !== substr[j]) break;
      }
      if (j === substr.length) return true;
    }
    return false;
  } 