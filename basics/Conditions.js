// Expression:
//      combination of operants and operator
//      peace of code which produces some value

// Types:
//      Arthmetic: +,-,/,*,%,**,++,--
//      Assignment: =,+=,-=,*=,/=,%=,**=
//      Comparision: ==,!=,===,!==,<,>,<=,>=,?
//      Logical: AND(&&), OR(||), NOT(!)

// Arthmetic

// increment(++)- preincrement(++a): first value increments later prints
//                postincrement(a++): first prints value later increments 

// decrement(--)- predecrement(++a): first value decrements later prints
//                postdecrement(a++): first prints value later decrements 

let x=99
console.log(x--)                //99
console.log(x++)                //98
console.log(++x)                //100
console.log(x)                  //100
console.log(--x)                //99
console.log(x)                  //99

// --------------------------------------------------------------------------------------------

// assignment

let a=10
a+=5
console.log(a)                  //15
a-=5
console.log(a)                  //10
a*=2
console.log(a)                  //20
a/=2
console.log(a)                  //10
a**=2
console.log(a)                  //100

// -------------------------------------------------------------------------------------------

// comparision

let p=10
let q="10"

console.log("p==q:",p==q)                   //p==q: true
console.log("p===q:",p===q)                 //p===q: false

let result = p == q ? "p & q are equal": "p & q are not equal"
console.log(result)                         // p & q are equal

// --------------------------------------------------------------------------------------------

// Logical 

//     &&             ||            NOT-!          !response.OR
//  T | T | T      T | T | T       T | F
//  T | F | F      T | F | T       F | T
//  F | T | F      F | T | T
//  F | F | F      F | F | F 

// Conditions

// Controlling the flow of program by using certain set of rules
// Types:
//      1. if
//      2.if-else
//      3.else-if
//      4.nested if
//      5.Switch case

// if Statement:

const prompt = require("prompt-sync")({sigint:true}) 
// let userName = prompt("enter the name:");
let userName="Keerthana"
if(userName==="Keerthana"){
    console.log("user found")
}
// output: user found

// if-else

if(userName==="Adarsh"){
    console.log("user found")               //user found
}
else{
    console.log("user not found")           //user not found
}

// else-if

let speed= prompt("enter the speed")
if (speed<=40){
    console.log("driving too slow")
}
else if(speed<=100 && speed>40 ){
    console.log("driving normally")
}
else if(speed>100 && speed<200){
    console.log("driving to fast")
}
else{
    console.log("Welcome too heaven")
}