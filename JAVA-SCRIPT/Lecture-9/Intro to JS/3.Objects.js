let obj = {
    a:true,
    b:"hello",
    c:101.2,
    arr:[1,2,3,4],
    'kuch bhi arr':["str", 2.3, true],
}
console.log(obj);
console.log(obj.a); //what output you want you can write like .a,.b,.arr; ca

//for in loop
for(let key in obj){
    console.log(key);
}
for(let key in obj){
    console.log(key['kuch bhi arr']);// if wants value of key can do like this
}