var arr = [2,'c', "Hello wolrd",4.66, 4,6,7];// so we can add string, int & Etc.
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[5]);


//---------------- LOOP
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//----------------- FOR OF LOOP
// for(let val of arr){ val is a name given for taking output
//     console.log(val);
// }

//---------- FOR IN LOOP GIVES US INDEX
// for(let ind in arr){
//     console.log(ind);
// }
for(let ind in arr){
    console.log(arr[ind]);
}// for taking output in array from index for loop


//To add or delete any item from array
// arr.push("last item")// push to add
arr.pop(2);// pop to delete

console.log(arr);