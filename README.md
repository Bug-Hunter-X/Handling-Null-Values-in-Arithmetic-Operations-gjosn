# Handling Null Values in Node.js Arithmetic Operations
This repository demonstrates a common error in Node.js when performing arithmetic operations with variables that might hold null or undefined values.  The `bug.js` file shows the problem and the `bugSolution.js` demonstrates a solution.

The issue arises when attempting mathematical operations on variables that haven't been properly initialized or might contain unexpected null values.  This can lead to runtime errors.  The solution focuses on explicit null checks before the operation.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `node bug.js` to see the original error.
4. Run `node bugSolution.js` to see the corrected version.