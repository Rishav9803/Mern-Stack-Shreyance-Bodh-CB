// Question 1. Create an array containing the numbers from 1 to 5 and print it to the console.
var Arr1 = [1,2,3,4,5];
console.log(Arr1)

// Question 2. Access and print the third element of an array.
let Arr2 = [10, 20, 30, 40];
console.log(Arr2[2])

// Question 3. Change the value of the second element in an array to a new value.
let Arr3 = [1, 2, 3];
Arr3[1] = 20;
console.log(Arr3);

// Question 4. Find and print the length of an array.
let arr4 = [5,10,20];
console.log(arr4.length);

// Question 5. Add a new element to the end of an array.
let arr5 = [5,10,15,20,25];
arr5.push("30");
console.log(arr5)

//Question 6. Remove the last element from an array and print the result.
let arr6 = [5,10,15,20,25];
arr6.pop();
console.log(arr6)

//Question 7. Check if a specific element exists in an array and print the result.
/*let arr7 = [10, 20, 30];

console.log(arr7.split(','));

if(['10', '20', '30'].indexOf(arr7) != -1){
    console.log("Done!");
}
else{
    console.log("Sorry, Cannot be done");
}*/

// Question 8. Create a new array that contains only the first two elements of an existing array.
let arr8 = [1,2,3,4,5];
arr8.splice(3, 2);
console.log(arr8);

// Question 9. Print each element of an array using a loop.
let arr9 = [5,10,15,20,];
for(let i=0; i<arr9.length; i++)
    {
       console.log(arr9[i]);
    }

// Question 10. Combine two arrays into a single array.
let arr10 = [1,2,3,4,5];
let arr11 = [,6,7,8,9,10];
arr12 = arr10 + arr11;
console.log(arr12)