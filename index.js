// Q1. Write a function that accepts an array of strings and returns the longest string in the array.
// test case = ["apple","banana","pineapple",”kiwi”]
// output = pineapple" (edited)

const array = ['apple', 'banana', 'pineapple', 'kiwi'];
const longestArray = (ar) =>
  ar.reduce((acc, cur) => (acc.length < cur.length ? cur : acc));
console.log(longestArray(array));

// Q2. Create a function to return the amount of string 'potato' there are in a string.
// Examples:
// potatoes("potato") ➞ 1,
// potatoes("potatopotato") ➞ 2,
// potatoes("potatoapple") ➞ 1 (edited)

const str = 'potatoapple';
const wordReg = /potato/g;
const wordsCounter = (str, word) => [...str.matchAll(word)].length;
console.log(wordsCounter(str, wordReg));

// Q3. What's Hiding Amongst the Crowd?
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:
// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// The word will be spread out amongst the random letters, but their letters remain in the same order.
// Examples:
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
// detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

const crowdString = 'bEEFGBuFBRrHgUHlNFYaYr';
const finder = (str) =>
  str
    .split('')
    .reduce((acc, cur) => (cur === cur.toLowerCase() ? acc + cur : acc), '');
console.log(finder(crowdString));

// Q4.Create a function that will receive two arrays of numbers as arguments and
// return an array composed of all the numbers that are either in the first array or second array but not in both.

const ar1 = [0, 3, 9, 8, 11, 35, 12];
const ar2 = [3, 9, 13, 19, 11, 100, 200, 1000];

const uniqNumbersInAR = (arr1, arr2) => {
  return arr1
    .reduce((acc, cur) => (!arr2.includes(cur) ? acc + ',' + cur : acc))
    .split(',');
};
const uniqInBoth = (array1, array2) =>
  uniqNumbersInAR(array1, array2).concat(uniqNumbersInAR(array2, array1));
console.log('uniqInBoth', uniqInBoth(ar1, ar2));

// Q5.Given an array of objects contains cities with multiple properties: name, population, and country.
// Sort the cities primarily by population in ascending order,
// 	if two cities have the same population, sort them alphabetically by their country name,
// 	if they also share the same country, sort them alphabetically by their name, return the entire object.
// Start from:
const cities = [
  { name:"Tokyo",population:37400068,country:"Japan" },
  { name:"Delhi",population:29399141,country:"India" },
  { name:"Shanghai",population:26317104,country:"China" },
  { name:"São Paulo",population:21846507,country:"Brazil" },
  { name:"Mexico City",population:21671908,country:"Mexico" },
  { name:"Cairo",population:20484965,country:"Egypt" },
  { name:"Mumbai",population:20185064,country:"India" },
  { name:"Beijing",population:20035455,country:"China" },
  {name:"Buenos Aires",population:15000000,country:"Argentina" },
  { name:"Osaka",population:19222665,country:"Japan" },
  { name:"Chongqing",population:15872000,country:"China" },
  { name:"Karachi",population:15400000,country:"Pakistan" },
]

const objSorter = (cities) => cities.sort((a, b) => a.population - b.population);
console.log(objSorter(cities));


// Q6. Write a program to print the following patterns on the console.
// *   *   *   *   *
// *   *   *   *   *
// *   *   *   *   *
// *   *   *   *   *
// *   *   *   *   *

const printer = (rows, cols) => {

  for (let i = 0; i < rows; i++) {
    console.log(new Array(cols).fill('*').join('   '));
  }
}

printer(5, 5)