// chapter -1: variable and data types

// alert('shafriki islam');

/*console.log('shafriki islam a new learner');

name = 'shafriki islam';
age ='25';
degree = 'B.Sc in CSE';
console.log(name, age, degree);
*/

// var let const

/*
let a =10;
let b =20;
const result = a+b;
let Result = a-b;
console.log(result,Result);*/

//data type in JavaScript

/*let number = 05;
const fullName = 'shafriki islam';
const age ='25';
const phoneNumber = 01786141015;
console.log(number, fullName, age, phoneNumber);*/

// object task 1
/*const product = {
    productTitle:'Parker Jotter Standard CT Ball Pen(Black)',
    price: 270,
    rating: 7,
    isDeal: true,
    offer: '5%'

}
console.log(product);
console.log(product.price);
console.log(product['productTitle']);

// object task 2
const profile = {
    userName: 'ShradhaKhapra',
    isFollow: true,
    followers: '569K',
    following: 4,
    post: '195 posts',
    bio: 'apna college'
}
console.log(profile);
console.log(profile.post);
console.log(typeof profile);*/

// 1. Declare and Initialize Variables
/*const firstName = 'Shafriki';
const lastName = 'Islam';
const age = 25;
console.log(`my name is ${firstName} ${lastName}. my age: ${age}`);

// task 2
const fullName = firstName +' '+ lastName;
console.log(fullName);*/

// task 3
// let isEmployed = true;

// console.log(isEmployed);

// task 4
/*let hobbies = ['bike riding', 'sleeping', 'coding'];
hobbies.push('eating');
console.log(hobbies)*/

// task 5
/*const person = {
    firstName: 'shafriki',
    lastName: 'Islam',
    age: 25,
    hobbies: 'bike riding'
};
person.age =26;

console.log(person);
console.log(person.firstName);
console.log(typeof person.age);
console.log(person['hobbies'])
*/


// chapter -2: Operators and Conditional Statements

// arithmetic operator 

/*let a =6;
let b =2;
let sum = a+b;
let sub = a-b;
let multiply = a*b;
let divide = a/b;

console.log(`the value of a = ${a} and b = ${b}. Here a and b sum = ${sum}, subtract = ${sub}, multiply = ${multiply}, and divide = ${divide},`);*/

// unary operator
/*let a =100;
let b =200;

console.log(`a-- = ${a--}`);
console.log(`a = ${a}`);*/

// assignment operator
let a = 100;
a%=10;
console.log(a);

// conditional statement
/*let num = 109493283;

if(num%2 == 0) {
    console.log('EVEN Number')
}
else {
    console.log('ODD Number')
}

let number = prompt('Enter a number');

if(number % 5 == 0) {
    console.log('multiple of 5')
}
else{
    console.log('not')
}*/

/*let marks = 9;

if(marks >= 80 && marks <= 100) {
    console.log('Grade: A')
}
else if(marks >= 70 && marks <= 89) {
    console.log('Grade: B')
}
else if(marks >= 60 && marks <= 69) {
    console.log('Grade: D')
}
else if(marks >= 50 && marks <= 59) {
    console.log('Grade: F')
}
else {
    console.log('FAILED')
}*/

// task challenge 1-100
let firstName = 'Shafriki';
let lastName = 'Islam';
console.log(`My name is ${firstName} ${lastName}`);

// task challenge 2-100
const birthYear = 1999;
const currentYear = 2024;
const age = currentYear-birthYear;
console.log(`I am ${age} years old`);

// task challenge 3-100
const favoriteColor = 'black';
console.log(`my favorite color is ${favoriteColor}`);

// task challenge 4-100
const favFood = ['honey','kacchi biriani', 'milk', 'beaf meet cury', 'bou'];
console.log(favFood[1]);

// task challenge 5-100
const person = {
    firstName:'shafriki',
    lastName: 'islam',
    age: 25
};
console.log(`my name is ${firstName} ${lastName}. I am ${age} years old`);

// task challenge 6-100
let h = 5;
let i = 10;

let temp = h;
h = i;
i = temp;

console.log(h, i);

// task challenge 8 -100
if(isWeekend == 'saturday' || 'sunday') {
    console.log(true)
}
else {
    console.log(false)
}


