# FizzBuzz Kata

## Problem Description
Write a function `fizzBuzz(n)` that returns an array of strings from 1 to n, where:
- Numbers divisible by 3 are replaced with "Fizz"
- Numbers divisible by 5 are replaced with "Buzz" 
- Numbers divisible by both 3 and 5 are replaced with "FizzBuzz"
- All other numbers remain as strings

## Requirements
- Input: A positive integer n
- Output: Array of strings from "1" to n with FizzBuzz rules applied
- Handle edge cases (n = 0, negative numbers)

## Examples
```javascript
fizzBuzz(15)
// Returns: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

fizzBuzz(5)
// Returns: ["1", "2", "Fizz", "4", "Buzz"]

fizzBuzz(0)
// Returns: []
```