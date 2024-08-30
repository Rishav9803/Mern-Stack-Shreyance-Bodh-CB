var arr = [2, 'c', "Hello world", 4,6,7]; // to push any value in array we can write arr.push(9) it'll be added by side of 7 and if we wnat to delete any value in array so we can write arr.pop()
var arr1 = [1,2,3,4,5,6];

arr1[10]=4;
console.log(arr1);
console.log(arr1.length);

// console.log(arr[0]);
// console.log(arr[3]);//in square bracket we gave instruction which var. we want..
// console.log(arr[2]);

//-------------for loop
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }


//--------------for of loop---- shortcut of upper part
// for(let val of arr){
//     console.log(val);
// }

//------- for in loop
//for(let ind in arr){
//    console.log(ind); //this index means here that how many variables, string and char means index in clr lang. entered in arr
//}

//----------------- to add or to delete any number in array
//arr1.push(10); //[1,2,3,4,5,6,10]
//arr1.push(102); //[1,2,3,4,5,6,10,102]
//arr1.push(11); //[1,2,3,4,5,6,10,102,11]
//arr1.pop(); //[1,2,3,4,5,6,10,102]
 
//---------------- shift ot unshift
//arr1.shift(); // removed first number from arr1
//arr1.unshift(24); // to add some number in starting

//#splice(start index(from where you want to start deletion part), deletion count, element to be inserted)

//var items = [1,2,3,4,5,6];
//console.log(items);
// items.splice(1); //[1]
//items.splice(1,2); [1,4,5,6]
//items.splice(1,2,40,60);
//items.splice(3,1);

//console.log(items)

//-------------- push or pop
//arr.push("last item");
//arr.pop()// removed seveb as last that was the last digit

//------------arr value output using ind
for(let ind in arr){
    console.log(arr[ind]);
}
//-----------------To add '-' this after every word we use str loop 
var str = "We are Learning JS"
console.log(str);

//---------------String to add '-'
let newStr = '';
for(let i=0; i<str.length; i++){
newStr += str[i] + '-';
}

console.log(newStr);

// to know the index of any variable in the code;;;; if we find index for anonymous name than we'll get -1 means not existing like

let index = str.indexOf('JS'); 
console.log(index);

//------------------ to split the output myfile.jpg we'll get it as myfile and jpg
let file = 'myfile.jpg';
console.log(file.split('.'));
console.log(str.split(' '));// through this we got we are learning JS in split

var updatedStr = str.split(' ').pop();
console.log(updatedStr);// we pop JS and took it only as output

let format = file.split('.').pop();
console.log(format)

//[jpg, jpeg, png]
if(['jpg', 'jpeg', 'png'].indexOf(format) != -1){
    console.log("Done!")
}
else{
    console.log("sorry! Nahi ho paayega")
}