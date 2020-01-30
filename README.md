# Gojob - Preliminary test

Write a function “closestToZero” described by the following specification:

Given an array of positive and negative integers, it returns the closest number to zero
if the closest number in input could be either negative or positive, the function returns the positive one
if the input array is undefined or empty, the function returns 0
Examples:

- when input is [8, 5, 10] it must returns 5
- when input is [5, 4, -9, 6, -10, -1, 8] it must return -1
- when input is [8, 2, 3, -2] it must return 2

### Installation & Run
- ```yarn install``` or ```npm install```
- ```yarn run test``` or ```npm run test```

### Coverage
After running tests, open ```/coverage/lcov-report/index.html``` in your favorite browser

### Known limitations
- Maximum array length: 7300 (~850ms)
