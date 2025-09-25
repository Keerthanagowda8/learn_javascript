// Data Types:
//     Primitive
//         String - set of chracter enclosed within Quotes '',"",``(back ticks),
//         Number
//         BigInt
//         undefined
//         Boolean
//         Null
//     Non-Primitive
//         object

// 1. String

let userName='Keerthana'
console.log("firstName:",userName)                          
// firstName: Keerthana
console.log(typeof(userName))                               
// string
let studentOf="Pyspider's"
console.log(userName+" is student of "+ studentOf)
console.log(typeof(studentOf))      

let course=`Python full stack`
console.log(`${userName} is a student of ${studentOf} learning ${course}`) // Template literal
console.log(typeof(course))

// -----------------------------------------------------------------------------------------------

// Number: Integer, Float, Octal, Hexadecimal, Binary

let a=1
console.log(typeof(a))
// number
let b=1.1
console.log(b)
console.log(typeof(b))
// number

// let c=3+4j
// console.log(typeof(c))
// SyntaxError: Invalid or unexpected token

let d=0
console.log(typeof(d))
// number

// let e=01234
// console.log(e)
// 668
console.log(typeof(e))
// number

let f=12345678901234567899
console.log(f)
// 12345678901234567000
console.log(typeof(f))
// number

let bigNum=BigInt("123344567890987654322222222234567899")
console.log(bigNum)
// 123344567890987654322222222234567899n
console.log(typeof bigNum)
// bigint

let largeNum= 1234567890987654321234567898765432123456787654n
console.log(largeNum)
// 1234567890987654321234567898765432123456787654n
console.log(typeof largeNum)
// bigint

let largeNumber= 1234567890987654321234567898765432123456787654
console.log(largeNumber)
// 1.2345678909876543e+45
console.log(typeof largeNumber)
// number

// -----------------------------------------------------------------------------------------------

// Boolean: true or false

let isloged=true
console.log(typeof(isloged))
// boolean

let islogged=false
console.log(typeof islogged)
// boolean

// let isloged=True
// console.log(typeof(isloged))
// ReferenceError: True is not defined

// let islogged=False
// console.log(typeof islogged)
// ReferenceError: False is not defined

// -----------------------------------------------------------------------------------------------

// Undifined: 

let age
console.log("keep your age as:",age)
// keep your age as: undefined

console.log(typeof(age))
// undefined

age=10
console.log(age)
// 10
console.log(typeof(age))
// number

// const salary
// console.log(salary)
// SyntaxError: Missing initializer in const declaration