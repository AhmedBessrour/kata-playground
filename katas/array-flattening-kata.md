# Array Flattening Kata

## Problem Description
Write a function `flattenArray(array)` that takes a nested array and returns a flattened array.

## Requirements
- Flatten one level of nesting only
- Preserve order of elements
- Handle empty arrays
- Return a new array (don't modify original)

## Examples
```javascript
flattenArray([[1, 2], [3, 4]]) // returns [1, 2, 3, 4]
flattenArray([[1], [2, 3], [4, 5, 6]]) // returns [1, 2, 3, 4, 5, 6]
flattenArray([1, [2, 3], 4]) // returns [1, 2, 3, 4]
flattenArray([]) // returns []
flattenArray([[]]) // returns []
```
