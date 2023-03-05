// number 

var num1 = 30; //number
var num2 = 20; //number

// string

let str1 = "Hello World"; //string
let str2 = 'Hello'; //string
const a = 10;
const b = 30;
let str3 = `Heloo Team ${a} + ${b} = ${a+b}`;
console.log(str3);
console.log(str3);

// boolean 

var bol1 = true; //boolean type
var bol2 = false; //boolean type

var age = 12;

if (age >= 18){
    console.log('True');
} else {
    console.log('false')
}

// write a program to find greatest of two number

if (num1 > num2){
    console.log(`${num1} is greater then ${num2}`);
} else {
    console.log(`${num2} is greater then ${num1}`); 
}

// Null
const nul1 = null;

// undefined 
var test;
console.log(test); //undefined
test = 'Hello'
console.log(test); //hello

// Different between undefined and not defined

// different between null and undefined

// var a = "Hello";

//My name is SUbrat , i am from berhampur, I am 28 yr old

// Javascript is a case-sensitive language
var name1 = 'Priyanka';
var city = 'Berhampur';
var state = 'odisha';
var district = 'ganjam';
var myAge = 28;


// document.write(`My name is ${name1}, i am from ${city}, I am ${myAge} yr Old`);

// Array: is a collection data or which we can access sequential data
var arr = [];
var person = ['Priyanka','Berhampur','odisha','ganjam',28];
var person1 = ['Berhampur','Subrat','odisha','ganjam',28];

// array aceess : arrayname[index] person[2]
document.write(`My name is ${person[0]}, i am from ${person[1]}, I am ${person[4]} yr Old`);
document.write(`My name is ${person1[0]}, i am from ${person1[1]}, I am ${person1[4]} yr Old`);

// Object 
// =============

var obj1 = {key: 'value'};

var person2 = {
    city:'Berhampur',
    age:28,
    name:'Subrat Bhola'
};

document.getElementById('h2').innerHTML = person2.name;
// document.getElementById('name').innerHTML = person2.name;

var person3 = {
    age:28,
    name:'Upstandards',
    address : {
        city:'berhampur',
        district:'Ganjam',
        pin: 760010,
        courses:['math','science'],
        parents:{
            fname:'abc',
            mname:'def'
        }
    }
};

person3.address.courses[0]
// to access object , objectname.propertyname



console.log(`My name is ${person2.name}, i am from ${person2.city}, I am ${person2.age} yr Old`);
console.log(`My name is ${person3.name}, i am from ${person3.city}, I am ${person3.age} yr Old`);

var employes = [
    {
        city:'Berhampur',
        age:28,
        name:'Subrat'
    },
    {
        city:'Berhampur',
        age:28,
        name:'Upstandards'
    }
];

console.log(`My name is ${employes[0].name}, i am from ${person3.city}, I am ${person3.age} yr Old`);

var employeeObj = {
    enum:1,
    ename:Upstandards,
    dept:10,
    salary:10000,
    address : {
        landmark:'landmark',
        city:'city',
        state:'Odisha',
        pin:760010
    }


}





