//Creating an array

let arr = [];

//type of array
//*console.log(typeof arr); // object

//Print the array length
//*console.log(arr.length); // 0

//elements to the array

let arr1 = [1, 2, 3, 4, 5];
//*console.log(arr1); // [ 1, 2, 3, 4, 5 ]
//*console.log(arr1.length); // 5;
//*console.log(arr1[0]); // 1

//you can create an array by calling the Array constructor with a single argument specifying the length of the array

let arr2 = new Array(5);

//*console.log(arr2); // [ <5 empty items> ]
//*console.log(arr2.length); // 5
//!console.log(arr2[0]); // undefined

//Unlike many other programming languages, but common for most scripting languages,JavaScript array elements do not all have to be of the same type

let arr3 = [1, "hello", true, null, undefined];

//*console.log(arr3); // [ 1, 'hello', true, null, undefined ]

// verify that an object is an array by calling the Array.isArray() function,

//Array.isArray() function  Array constructor

let num = 2;
//!console.log(Array.isArray(num)); // false;

let arr4 = [1, 2, 3];
//*console.log(Array.isArray(arr4)); // true;

/// Accessing and Writing Array Elements

//loop through an array using a for loop 0 to 100

let arr5 = [];

for (let i = 0; i < 100; i++) {
  arr5[i] = i;
}
//*console.log(arr5); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ... ,99 ]

//while

let i = 0;
let arr6 = [];

while (i < 100) {
  arr6[i] = i;
  i++;
}

//*console.log(arr6); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ... ,99 ]

// Array elements are also accessed using the [] operator

let arr7 = [1, 2, 3, 4, 5];
//*console.log(arr7[0]); // 1
//*console.log(arr7[3]); // 4
//!console.log(arr7[5]); // undefined

let sum = arr7[0] + arr7[1] + arr7[2] + arr7[3] + arr7[4];
//*console.log(sum); // 15
//*console.log(arr7[0] + arr7[1] + arr7[2] + arr7[3] + arr7[5]); // NaN (Noat a Number)

//sum of all elements in an array of loop
let arr8 = [1, 2, 3, 4, 5];

let sum1 = 0;

for (let i = 0; i < arr8.length; i++) {
  sum1 = sum1 + arr8[i];
}

//*console.log(sum1); // 15

//Creating Arrays from Strings
//The split() method splits a string into an array of substrings

let str = "hello world";
let arr9 = str.split(" ");
//!console.log(arr9); // [ 'hello', 'world' ]
for (let i = 0; i < arr9.length; ++i) {
  //*console.log(`${i} your word ${arr9[i]}`); // hello world
}

// Aggregate Array Operations

let arr10 = [1, 2, 3, 4, 5, 8];

function copy(arr10, val) {
  for (let i = 0; i < arr10.length; i++) {
    val[i] = arr10[i];
  }
  return val;
}

//we are copying the elements of arr10 to val index by index
for (let i = 0; i < arr10.length; i++) {
  arr10[i] = i + 1;
}

let val = [];
copy(arr10, val);

//!console.log(val); // [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5, 8 ]

//Accessor Functions

//indexOf() and lastIndexOf() methods take two arguments:
// the value to search for and an optional starting index.
// The search is performed from the beginning of the array to the end,
// or from the end of the array to the beginning, depending on which method is used.

let names = ["John", "Jane", "Jim", "Jack", "Jill", "Jim"];

let named = "Jim";

let result = names.indexOf(named);
let result1 = names.lastIndexOf(named);

//!console.log(`The index of ${named} is ${result}`); // The index of rohit is -1

if (result === -1) {
  //*console.log(`${named} is not found in the array`);
} else {
  //*console.log(`${named} is found in the array at index ${result}`);
  //*console.log(`${named} is found in the array at index ${result1}`);
}

//String Representations of Arrays

//join() method joins all elements of an array into a string
//toString() method converts an array to a string

let names1 = ["John", "Jane", "Jim", "Jack", "Jill", "Jim"];
let names2 = names1.join(", ");
//*console.log(names2); // John, Jane, Jim, Jack, Jill, Jim
let names3 = names1.toString();
//*console.log(names3); // John,Jane,Jim,Jack,Jill,Jim

//Creating New Arrays from Existing Arrays

//The concat() function allows you to put together two or more arrays to create a new array, and
//the splice() function allows you to create a new array from a subset of an existing array

let name4 = ["John", "Jane", "Jim", "Jack", "Jill", "Jim"];
let name5 = ["Johns", "Janes", "Jims", "Jacks", "Jills", "Jims"];

let name6 = name4.concat(name5);
//*console.log(name6); // [ 'John', 'Jane', 'Jim', 'Jack', 'Jill', 'Jim', 'Johns', 'Janes', 'Jims', 'Jacks', 'Jills', 'Jims' ]

let name7 = name4.splice(2, 3);
//*console.log(name7); // [ 'Jim', 'Jack', 'Jill' ]

/// Mutator Functions

// Adding Elements to an Array
//  There are two mutator functions for adding elements to an array: push() and unshift(). 
//  The push() function adds an element to the end of an array:
//  The mutator function for adding array elements to the beginning of an array is unshift()

let num1 = [1, 2, 3, 4, 5];
//!console.log(num1); // [ 1, 2, 3, 4, 5 ]
num1.push(6);
//!console.log(num1); // [ 1, 2, 3, 4, 5, 6 ]

let num2 = [ 2, 3, 4, 5];
//!console.log(num2); // [ 1, 2, 3, 4, 5 ]

num2.unshift(1,2);
//!console.log(num2); // [ 1,2,2, 3, 4, 5 ]

//Removing Elements from an Array
// Removing an element from the end of an array is easy using the pop() mutator function:
// Removing an element from the beginning of an array is easy using the shift() mutator function:

let num3 = [1, 2, 3, 4, 5];
//!console.log(num3); // [ 1, 2, 3, 4, 5 ]
num3.pop();
//!console.log(num3); // [ 1, 2, 3, 4 ]

let num4 = [1, 2, 3, 4, 5];
//!console.log(num4); // [ 1, 2, 3, 4, 5 ]
num4.shift();
//!console.log(num4); // [ 2, 3, 4, 5 ]


let num5 = [8,1, 2, 3, 4, 5];
let vale = num5.shift(); //shift removes the first element of an array and returns that element

num5.push(vale);
//*console.log(num5); // [ 1, 2, 3, 4, 5, 8 ]

// Adding and Removing Elements from the Middle of an Array

//!To add elements to an array using splice(), you have to provide the following arguments:
//!• The starting index (where you want to begin adding elements)
//! • The number of elements to remove (0 when you are adding elements)
//! • The elements you want to add to the array

