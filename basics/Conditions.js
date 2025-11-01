// Conditions

// Controlling the flow of program by using certain set of rules
// Types:
//      1.if
//      2.if-else
//      3.else-if
//      4.nested if
//      5.Switch case

// ------------------------------------------------------------------------------------------

// if Statement:

const prompt = require("prompt-sync")({sigint:true}) //signal interrupt
let userName = prompt("enter the name:");
// let userName="Keerthana"
if(userName==="Keerthana"){
    console.log("user found")
}
// output: user found

// ---------------------------------------------------------------------------------

// if-else :

if(userName==="Adarsh"){
    console.log("user found")              
}
else{
    console.log("user not found")           //user not found
}

// -----------------------------------------------------------------------------------

// else-if :

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

// ------------------------------------------------------------------------------------------------------

// Nested-if :

let profileName = prompt("enter the name:");
if(profileName==="Adarsh"){
    let password=prompt("enter the password")
    if(password==="keerhi@123") {
        console.log(`Profile ${profileName}`)
        console.log("username",profileName)
        console.log("password",password)
    }  
    else{
        console.log("incorrect password")
    }          
}
else{
    console.log("user not found")           //user not found
}

// ------------------------------------------------------------------------------------------------------

let metroStatus=prompt("enter the metro status True or False:")==="true";

if (metroStatus){
    let passangerExist=prompt("enter the passanger status True or False:")==="true";
    if(passangerExist){
        console.log("Journey ended")
    }
    else{
        console.log("passanger still inside")
    }
}
else{
    console.log("Paasanger not entered")
}

// --------------------------------------------------------------------------------------------------------

// switch case

let day = new Date().getDay()
// console.log(day)  ->4 
let today
switch(day){
    case 0:
        today="Sunday"
        break
    case 1:
        today="Monday"
        break
    case 2:
        today="Tuesday"
        break
    case 3:
        today="Wednesday"
        break
    case 4:
        today="Thursday"
        break
    case 5:
        today="Friday"
        break
    case 6:
        today="Saturday"
        break
    default:
        console.log("invalid")
}
console.log(`today is ${today}`)                 // today is Thursday

// -----------------------------------------------------------------------------------------------------

week=['Sunday','Monday','Tuesday','Wednesday','Thursaday','Friday','Saturday']
console.log(`today is ${week[day]}`)             // today is Thursday