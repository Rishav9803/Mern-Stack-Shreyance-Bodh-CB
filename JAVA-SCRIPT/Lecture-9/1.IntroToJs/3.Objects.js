//----------------OBJECTS
let obj = {
    a:true,
    b:"Hello",
    c:101.2,
    arr:[1,2,3,4],
    'kuch bhi arr' :["str", 2.3, true],
}
//----------------To print whole object
console.log(obj)

//----------------to print a part of object
console.log(obj.a)

//----------------to print a mul-part of object
console.log(obj.a, obj.b)

//----------------for getting output of last kuch bhi
console.log(obj['kuch bhi arr']);

//----------------For getting index; element under objects
for(let i in obj){
    console.log(i);
}

//---------------- To get output of properties
for(let key in obj){
    console.log(obj[key]);
}
