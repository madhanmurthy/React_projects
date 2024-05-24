// Print all even numbers from 0 – 10

import { useEffect, useState } from "react";
import axios from "axios";

function findEven(x) {
  let even = [];
  for (let i = 0; i <= x.length; i++) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  return even;
}

console.log(findEven([1, 2, 3]));

// Bubble Sorting
// to sort a string split the string in to array and join later
function bubbleSort(arr, ord) {
  let swap = true;
  //let arr = str.split('');

  if (swap === true) {
    while (swap) {
      swap = false;

      for (let i = 0; i < arr.length - 1; i++) {
        if (ord === "ascending") {
          if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            swap = true;
          }
        } else if (ord === "descending") {
          if (arr[i] < arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            swap = true;
          }
        }
      }
    }
  }

  return arr;
  // arr.join('');
}

console.log(bubbleSort([9, 3, 5, 6, 1, 3, 4, 5, 6, 7], "ascending"));

//Calculate the sum of numbers within an array

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(calculateSum([1, 2, 3, 4, 5, 6]));

// learning

//find duplicates
function findUniq(arr) {
  let uniq = [...new Set(arr)];
  console.log(uniq);
}

findUniq([1, 2, 3, 4, 4, 3, 2, 5, 6]);

//find palindrome
function findPalindrome(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    newString += str[i];
  }
  if (newString === str) {
    return console.log("yes it is..");
  } else {
    return console.log("not a palindrome");
  }
}
findPalindrome("sanefar");

//factorial
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

console.log(factorial(6));

// duplicates without in-built
function removeDuplicates(array) {
  let uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (array[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}

let array = [1, 2, 3, 4, 4, 5, 5, 6, 6];
let result = removeDuplicates(array);

console.log(result);

// bubble sort with 2 for loops
function bubbleSortNew(arr, ord) {
  let swap;
  for (let i = 0; i < arr.length - 1; i++) {
    swap = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (
        (ord === "ascending" && arr[j] > arr[j + 1]) ||
        (ord === "descending" && arr[j] < arr[j + 1])
      ) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }
  return arr;
}

bubbleSortNew();

// factorial using recursion

function recursiveFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));

//fizzbuzz

function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    result = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "buzz" : "") || i;
    console.log(result);
  }
}

fizzbuzz(100);

// word occurence

function characterCount(str) {
  let exists = {};
  for (let i = 0; i < str.length; i++) {
    if (exists[str[i]]) {
      exists[str[i]] += 1;
    } else {
      exists[str[i]] = 1;
    }
  }
  for (let item in exists) {
    console.log("occurences of " + item + " is :" + exists[item]);
  }
}

characterCount("madhan");
