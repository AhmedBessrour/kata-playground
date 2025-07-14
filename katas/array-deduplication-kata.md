# Array Deduplication

## Problem Description
Write a function `removeDuplicates(array)` that takes an array and returns a new array with all duplicate values removed, keeping only the first occurrence of each value.

## Requirements
- Remove duplicate values from an array
- Preserve the original order (keep first occurrence)
- Return a new array (don't modify the original)
- Handle different data types (numbers, strings, booleans)

## Examples
```javascript
removeDuplicates([1, 2, 2, 3, 4, 4, 5]) // returns [1, 2, 3, 4, 5]
removeDuplicates(['a', 'b', 'a', 'c']) // returns ['a', 'b', 'c']
removeDuplicates([1, '1', 2, '2', 1]) // returns [1, '1', 2, '2']
removeDuplicates([]) // returns []
removeDuplicates([1]) // returns [1]
```
