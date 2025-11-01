// Expression:
//      combination of operants and operator
//      peace of code which produces some value

// Types:
//      Arthmetic: +,-,/,*,%,**,++,--
//      Assignment: =,+=,-=,*=,/=,%=,**=
//      Comparision: ==,!=,===(strict equal :both value and data type),!==,<,>,<=,>=,?:(Ternary operator:short form for if else)
//      Logical: AND(&&), OR(||), NOT(!)

// Arthmetic

// increment(++)- preincrement(++a): first value increments later prints
//                postincrement(a++): first prints value later increments 

// decrement(--)- predecrement(--a): first value decrements later prints
//                postdecrement(a--): first prints value later decrements 

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
