// Data Types:
//     Primitive : They store single values . they are immutable 
//         String 
//         Number
//         BigInt
//         undefined
//         Boolean
//         Null
//     Non-Primitive : They store collection of values or complex entities.they are mutable
//         object

// ------------------------------------------------------------------------------------------------------

// 1. String - set of character enclosed within Quotes '',"",``(back ticks),

let userName='Keerthana'
console.log("firstName:",userName)                          
// firstName: Keerthana
console.log(typeof(userName))                               
// string
let studentOf="Pyspider's"
console.log(userName+" is student of "+ studentOf)
// Keerthana is student of Pyspider's
console.log(typeof(studentOf))    
// string  

let course=`Python full stack`
console.log(`${userName} is a student of ${studentOf} learning ${course}`) // Template literal
// Keerthana is a student of Pyspider's learning Python full stack
console.log(typeof(course))
// string

// -----------------------------------------------------------------------------------------------

// 2. Number: Integer, Float, Octal, Hexadecimal, Binary

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
// console.log(typeof(e))
// number

let g=0b1010
console.log(typeof(g))
// number
console.log(g)
// 10

let h=0xA
console.log(typeof(h))
// number
console.log(h)
// 10

let i=0o12
console.log(typeof(i))
// number
console.log(i)
// 10

let f=12345678901234567899
console.log(f)
// 12345678901234567000
console.log(typeof(f))
// number

// ----------------------------------------------------------------------------------------------

// 3. BigInt:
// JS uses 64-bit floating point, large numbers lose precision
// so uses BigInt for large object

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

// 4.Boolean: true or false

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

// 5. Undifined: A variable is declared but not assigned a value 

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

// -----------------------------------------------------------------------------------------------

// 6. Null:Returning non existing object . 
// It is a special value, which represent empty , nothing
// intentinally making the value as absent 

let salary=null
console.log(salary)
// null
console.log(typeof salary)
// object

// This is know bug in javascript since creation. typeof(null) returns object due 
// to legacy implementation  

// -----------------------------------------------------------------------------------------------
// Object: collection of values in keys and values pair 

let trainTicket={
    passangerName:"Adarsh",
    travelDate: "19/7/25",
    source: "Banglore",
    destination: "Kannur",
    BookingStatus: "Confirmed",
    coach: "03",
    seatNumber: 85,
    insurenceAvail: true,
    contact:{
            mobile: 7878640875,
            mailId: "adarshmadhu@532003"
            }
}

console.log(trainTicket)
// {
//   passangerName: 'Adarsh',
//   travelDate: '19/7/25',
//   source: 'Banglore',
//   destination: 'Kannur',
//   BookingStatus: 'Confirmed',
//   coach: '03',
//   seatNumber: 85,
//   insurenceAvail: true,
//   contact: { mobile:7878640875 , mailId: 'adarshmadhu@532003' }
// }
console.log(typeof trainTicket)
// object

// Accessing the values

console.log(`Passanger name:${trainTicket["passangerName"]}`)
// Passanger name:Adarsh
console.log(`Destination: ${trainTicket.destination}`)
// Destination: Kannur
console.log("Passanger contact:",trainTicket.contact)
// Passanger contact: { mobile: 7878640875, mailId: 'adarshmadhu@532003' }
console.log("contact:",trainTicket.contact.mobile)
// contact: 1234567890

// Modify the value

trainTicket.seatNumber = 58
console.log(trainTicket)

// Adding new property

trainTicket.foodOrder = false
console.log(trainTicket)

// deleting property

delete trainTicket.insurenceAvail
console.log(trainTicket)

// const variable: similar to let variable can modify,add,delete

// displaying as table 

console.table(trainTicket)

// ┌───────────────┬────────────┬──────────────────────┬─────────────┐
// │ (index)       │ mobile     │ mailId               │ Values      │
// ├───────────────┼────────────┼──────────────────────┼─────────────┤
// │ passangerName │            │                      │ 'Adarsh'    │
// │ travelDate    │            │                      │ '19/7/25'   │
// │ source        │            │                      │ 'Banglore'  │
// │ destination   │            │                      │ 'Kannur'    │
// │ BookingStatus │            │                      │ 'Confirmed' │
// │ coach         │            │                      │ '03'        │
// │ seatNumber    │            │                      │ 58          │
// │ contact       │ 7878640875 │ 'adarshmadhu@532003' │             │
// │ foodOrder     │            │                      │ false       │
// └───────────────┴────────────┴──────────────────────┴─────────────┘

console.table(trainTicket.contact)

// ┌─────────┬──────────────────────┐
// │ (index) │ Values               │
// ├─────────┼──────────────────────┤
// │ mobile  │ 7878640875           │
// │ mailId  │ 'adarshmadhu@532003' │
// └─────────┴──────────────────────┘