```javascript
function myFunction(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; 
}

console.log(myFunction(5, null)); // Output: 0
```