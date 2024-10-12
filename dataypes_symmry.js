//primitive They represent single values and are not mutable:-


// 7 types:string,Number,Boolean,null,undefines,symbol,BigInt
//javascript is dymanic language means that variables can hold values of different types during run time.

const score =100
const scoreValue=100.3
const isLogin=true
const outideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
// const bigNumber=123456789876543n

//Reference type(non primitive):-Non-primitive data types, also known as reference types, are objects and derived data types. They can store collections of values or more complex entities


//array,object,function

const heros=["shaktiman","arjuna","karna"];
let myOnj={
    name:"aman",// jitne bhi value h ye object h datatypes different and anything number string float
    age:19
}
const myFunction=function(){
consol.log("namste sabhi ko");

}

console.log(typeof id);
//*************************************************************************************************************************** 

//Stack(primitive),Heap(non-primitive)

// if stack memory used jo apne variable use kiya h uska copy milta h
// if heap memory used jo apne variable use kiya h uska reference milta h original value ka jo bhi change krenge original value me change hoga

let myYoutubename = "amansinghdotcom"

let anothername = myYoutubename
anothername="cahiaurcode"
console.log(myYoutubename);
console.log(anothername);
let age=5
console.log(age);