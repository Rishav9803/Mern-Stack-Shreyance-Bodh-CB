var arr = [2,'c', "Hello wolrd",4.66, 4,6,7];// so we can add string, int & Etc.
var arr1 = [1,2,3,4,5,6,7,8,9];
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr[5]);

arr1[11] = 4;
console.log(arr1);
console.log(arr1[6]);

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
// for(let ind in arr){
//     console.log(arr[ind]);
// } for taking output in array from index for loop


//To add or delete last item from array
// arr.push("last item")// push to add
// arr.pop("2");// pop to delete index wise
// arr.pop();// pop to delete  

//To add or delete first item from array
// shift to delete // unshift to add
// arr1.shift();
// arr1.unshift("10")


// console.log(arr1);
// console.log(arr);

//Splice(Starting index, deletion count, element to be inserted)
/*var items = [1,2,3,4,5,6,7,8,9];
console.log(items);*/


// items.splice(1); // [1] 
// console.log(items);

/*items.splice(1,3); // giving index where to delete
console.log(items);*/

/*items.splice(9,0,500,'krsna');
console.log(items);*/

var str = "We are Learning JS are"
console.log(str);

let newStr = '';
for(let i=0; i<str.length; i++){
    newStr += str[i] + '-'; // to add hyphen between text, if not exist then it'll come with -1
}

console.log(newStr);

let index = str.indexOf('are');
console.log(index); // will show -1 if the word not exist 


let file = 'myfile.jpg';
console.log(file.split('.'));
console.log(str.split(' '));
console.log(str.split(' ').pop()); // to pop are from we are learning js are
console.log(file.split('.').pop());

let format = file.split('.').pop();
console.log(format);

// jpg, jpeg, png
if(['jpg', 'jpeg', 'png'].indexOf(format) != -1){
    console.log("Done!");
}
else{
    console.log("Sorry, Hare krsna.");
}