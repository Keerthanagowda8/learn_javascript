// JAVASCRIPT:
// Initially created to make our page alive
// It is high level programming scripting , interpreted (line by line) and single threaded 
//      (run only one piece of code at a time it exceute each task sequentlially)
// Developed by brendon eich 1995. company netscape communications. 
//      developed in 10 days. first name is mocha.
// Features:
//  It has full integration with HTML and css
//  Simple things are done simply
//  It exceutes directly inside the browser when page loaded everytime
//  Doesnt required any special preparation and complation for exceution
//  All major browser supports JS
//  It is case sensitive
//  .js - extension 

// ---------------------------------------------------------------------------------------

// Writing and exceuting 
// 1. Directly inside the browser, using console
// 2. in html doc using script we can embed
// 3. by using run time environment like nodejs

// console.log() - used to print output to console
console.log("Hello World");
// output: Hello World

// ---------------------------------------------------------------------------------------------

// variables are name given to memory location or container to store values

// syntax to declare variable:
// var/let/const variable_name = value;

// declaring variables:var, let, const 

// Rules to declare variable:
// 1. should start with letter, _ or $ and cannot start with number
// 2. can contain alphanumeric , _ or $
// 3. cannot contain spaces
// 4. cannot use reserved keywords
// 5. case sensitive
// 6. should be meaningful

// --------------------------------------------------------------------------------------------

// var - global scope, can be re-declared and updated

var firstName="Keerthana G"
console.log(firstName)
// document.writeln("My name is ",firstName)  // to print in web page
{
    var age=21;
    console.log("inside the block",age);
    console.log("inside the block",firstName);
}
console.log("outside the block",age)

// updation or re-intialization
firstName="Madhu"
console.log("after updated ",firstName)

// re-declaration
var firstName="Adarsh"
console.log("after re-declared",firstName)

console.log(typeof firstName);
// string
console.log(typeof age)
// number

// ---------------------------------------------------------------------------------------------------------------------------------------

// let - block scope, can be updated but not re-declared

let secondName="Gowda"
console.log(secondName)

{
    console.log("inside the block:",secondName)
    let gender="Female"
    console.log("inside the block:",gender)
}
// console.log("Outside block",gender)
// ReferenceError: gender is not defined
{
    let secondName="P T"
    console.log(secondName)
    // output: P T
}
// {
    // console.log("inside the block:",secondName)
    // Uncaught ReferenceError: Cannot access 'secondName' before initialization
    // let secondName="P T"
    // console.log(secondName)
// }

// console.log("outside the block:",gender)
// basics.js:73 Uncaught ReferenceError: gender is not defined at basics.js:73:34

let gender='Male'
console.log(gender)
output: Male

// updation
secondName="G"
console.log(secondName)

// declaration
// let secondName="govindraj"
// console.log(secondName)
// Uncaught SyntaxError: Identifier 'secondName' has already been declared (at basics.js:80:5)Understand this error

// --------------------------------------------------------------------------------------------------------------------------------------------------

// const - block scope, cannot be updated or re-declared

const pi=3.14
console.log(pi)

{ 
    console.log("Inside the block",pi)
    const country="India"
    console.log("inside the block",country)
}
{
    const pi=3
    console.log(pi)
}

// {
//     console.log("Inside the block",pi)
//     Uncaught ReferenceError: Cannot access 'pi' before initialization
//     const pi=3
//     console.log(pi)
// }

console.log("outside the block",country)
// basics.js:96 Uncaught ReferenceError: country is not defined

const country="Japan"
console.log(country)
// Japan

// updation
// pi=3.1475
// console.log(pi)
// Uncaught TypeError: Assignment to constant variable.
  
// declaration
// const pi=3.147
// Uncaught SyntaxError: Identifier 'pi' has already been declared (at basics.js:100:7)

// --------------------------------------------------------------------------------------------

//        | scope   | re-initilize | re-declaratio
// _______|_________|______________|____________________
//        |         |              |
// var    | global  |   yes        |    yes
// let    | block   |   yes        |    no
// const  | block   |   no         |    no