# Type Coercion Runtime Error in TypeScript

This repository demonstrates a common issue in TypeScript where type coercion can lead to runtime errors that are not caught during compilation.

The `bug.ts` file shows a function that expects two numbers as input but allows type coercion, resulting in an unexpected runtime error when a string is provided as input. The `bugSolution.ts` file demonstrates how to resolve the issue using stricter type checking and input validation.

## How to Reproduce

1. Clone the repository.
2. Compile the `bug.ts` file using a TypeScript compiler (tsc). Note that no compile-time error occurs.
3. Run the compiled JavaScript code. Observe the runtime error.

## Solution

The `bugSolution.ts` file demonstrates a robust solution by explicitly checking the types of input parameters, providing more robust error handling and preventing the type coercion issues.