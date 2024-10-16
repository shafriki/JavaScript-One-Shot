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
// let a = 100;
// a%=10;
// console.log(a);

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

// // task challenge 1-100
// let firstName = 'Shafriki';
// let lastName = 'Islam';
// console.log(`My name is ${firstName} ${lastName}`);

// // task challenge 2-100
// const birthYear = 1999;
// const currentYear = 2024;
// const age = currentYear-birthYear;
// console.log(`I am ${age} years old`);

// // task challenge 3-100
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

task challenge 8 -100
const is
if(isWeekend == 'saturday' || 'sunday') {
    console.log(true)
}
else {
    console.log(false)
}

task 7-100
let number = 100;

if(number%2 == 0) {
    console.log('even')
}
else {
    console.log('odd')
}

let degreeTitle = 'B.Sc in CSE';
let department = 'CSE';
let studentName = 'shafriki'

console.log(`student name: ${studentName}. he is a ${department} department student. his degree title ${degreeTitle}`);

task 10 - 100
let length = 100;
let width = 56;
let area = length*width;

console.log(`A rectangle length = ${length} and width = ${width} and area is: ${area}`);

task 11 -100
let name = 'shafriki islam';
let cgpa = 2.75;
let isEmployed = false;

console.log(`name is a  ${typeof name}, cgpa is ${typeof cgpa} and isEmployed i ${typeof isEmployed}`)

task 12 - 100
const carDetails = {
    make: 'Toyota',
    model: 'DG2948',
    year: '2023'
};
const {make, model, year} = {model:'Toyota', make:'DG2948', year:'2023'};
console.log(make)

task 13 -100
let a;
console.log(a)

task 14 -100
let favMovies = ['Gurdian of The Galaxy', 'Pnchayet', '12th Fail'];
console.log(favMovies[favMovies.length-1]);
console.log(favMovies.length);
console.log(typeof favMovies)

task 15-100
let stringNum = '12234'
let num = parseInt(stringNum);

console.log(typeof num)

task 16-100
let firstString = 12
let secondString = '12'
console.log(firstString === secondString)

task 17 - 100
let a = null;
console.log(typeof a)

task 18 - 100
function name(yourName) {
    return (`Assalamu alaikum. I am ${yourName}`)
}
const giveName = name('shafriki islam');
console.log(giveName)

const name=(yourName) => `Assalamu alaikum. I am ${yourName}`
console.log(name('shafriki islams'))

function greet(name) {
    console.log(`hello i am ${name}`)
}
greet('riki');

task 19-100

let num =100;
num+=4;
console.log(num)

task 20-100
const givenStiring = 'Shafriki Islam';
const reverseString = givenStiring.split('').reverse().join('')
console.log(reverseString)

task 21 - 100
let num = -20;
const result = num >= 0 ? 'Positive' : 'Negative';
console.log(result)

task 23 -100
const givenNumber = 38;
if(givenNumber % 3 ===0){
    console.log('yes possibile');
}
else {
    console.log('sorry not possible')
}

task 24 100
let given;
if(typeof given === 'undefined' ){
    console.log(typeof given)
}
else {
    console.log(given)
}

task 25-100
let givenN = true;
let convertString = givenN.toString()
console.log(typeof convertString)

task 26 -100
let givenString = 'shafriki islam';
let lengthString =givenString.length;
console.log(lengthString)

task 27-100
let book = {
    title: 'Introduction to JavaScript',
    author: 'Unknown',
    yearPublished:'2024'
}
console.log(`author name: ${book.author} and title of the book: ${book.title}`)

task 28 -100
let floatNumber = 199.313;
let intNumber = parseFloat.2(floatNumber);
console.log(intNumber)

29 - 100
let givenVar=null;
if( givenVar === null){
    console.log("is Null")
}
else{
    console.log(givenVar)
}

30 - 100
function givenNumber(a,b){
    return a*b;
}
const restult = givenNumber(2,3);
console.log(restult)

const givenNumber =(a,b) => a*b;
const result = givenNumber(2,3)
console.log(result);

