// let hello = true;
// console.log(hello);

// let other = false;
// console.log(other);

//--------General equality---------

// let score = 100;
// let ans = score == 100; // comparison operator checking whether true or not and like mother small mistakes ignored
// console.log(typeof(ans));

// --------Strict equality----------- 

// let score = "100";
// let ans = score == 100; //small mistake ignored
// let ans2 = score === 100; // like father no mistakes tolerance i added double comma shows false

// console.log(ans);
// console.log(ans2);


//--------------------
//<=, >=, >, <

// let sam = 20;
// let vohra = 20;

//let ans = sam <= vohra;
//console.log(ans)

//---------------

// let n1 = true;
// let n1 = 100;

let n1 = 0;
let n2 = false;

// // let ans = n1 == n2;
// let ans = n1 + n2; // true + false -> 1 + 0 -> 1
// let ans = n1 / n2; // true / false -> 1 / 0 -> infinite
// let ans = n2 / n1; // false / true -> 0 / 1 -> 0
// let ans = n1 / n2; // false / true -> 0 / 1 -> 0
let ans = n1 / n2; // 0 / false -> 0 / 0 -> NAN -> not a number how???? -> in js numbers are very flexible in java script 

console.log(ans);
console.log(typeof(ans));
