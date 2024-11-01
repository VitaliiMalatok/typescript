var customer = "Vitali"; // var
console.log(customer);

let client = "Shell"; // let
console.log(client);
client = "Orlen"
console.log(client);

const SALARY = 1300; // const
console.log(SALARY);

let value = 100500;  // variable scope
{
    let value = "Error";
    console.log(value); 
}
console.log("-------------------------------------");

let isEnable: boolean = true; // boolean
let isAlive: boolean = false;
console.log(isAlive);
console.log(isAlive);

let age: number = 36;  // number
console.log(age);

let firstNime: string = "Vitali"; // string
let secondNime: string = "Malatok";
console.log(firstNime);
console.log(secondNime);
let info: string = `Name: ${firstNime}
SecondName: ${secondNime}
Age: ${age}`;
console.log(info);

let firstVariable; // defined variable
let secondVariable: boolean;
firstVariable = "Hello World" // initialise variable
secondVariable = true;

//once you assign a value to a constant variable, you cannot change it later

let email;
console.log(email); // undefined
email = null;
console.log(email);     // null

// null and undefined are primitive types and can be used like other types, such as string

// usually union used to determine functional parametrs(it not a type, allows you to combine and merge other data types)
let idUser: number | string = "1988Molotok";
console.log(idUser);
idUser = 1988;
console.log(idUser);

function printIdNumber (id: number|string) : void {
    console.log(`Id: ${id}`);
} 
let id: string|number = "ruy74";
printIdNumber("1h2e3l4o5");
printIdNumber(9876);
printIdNumber(id);

// type, allows you to combine several data types, an alias is used for this
type id = string | number;
let user: id = 2;
console.log(user);
user = "dfsd"
console.log(user);

// type assertion 
//const header = <HTMLElement>document.getElementById("header");
//header.innerText = "Hello Typescript!";

// strict and non-strict equals
// the strict equality operator, returns false if the types are different.
let a = 10;
let b = 10;
console.log(a == b);
console.log(a === b);

// example && and ||
a = 5;
b = 6;
console.log(a > b || a < b); // true
console.log(a > b && a < b); // false
console.log(a < b && b > a); // true

// list of falsy values
/*
1. false, 
2. 0 (zero), 
3. -0 (minus zero) , 
4. 0n (BigInt zero) , 
5. " " (empty string), 
6. null, 
7. undefined & 
8. NaN.
*/

console.log(!{}); // false

// example ternary operator
let movieReleased: boolean = true;
let message: string = movieReleased ? "Movie is released" : "Not released yet";
console.log(message);

// type conversion
let c = "75";
let d = 6;
console.log(c + d);
console.log(Number(c) + d);

// how to get the type of primitives
let myVar = 42;
let myVarType = typeof myVar;
console.log(myVarType);

// give example of array
let list: number[] = [1, 3, 5, 9];
console.log(list[0]);
let listA: Array<number> = [1, 4, 6, 9];
console.log(listA[3]);

// get the max value which can be divided to 2: [5, 4, 6, 2, 7, 8, 9, 3]
let maxValue: Array<number> = [5, 4, 6, 2, 7, 8, 9, 3];
let max = maxValue[0];
for(let i = 1; i < maxValue.length; i++){
    if((maxValue[i] > max) && (maxValue[i] % 2 == 0)) {
        max = maxValue[i];
    }
}
console.log(max);

// The difference between == & === does a type conversion before checking for equality
let x = "10";
let y = 10;
console.log(x == y); // true
console.log(x === y);  // false
// the strict equality operator, returns false if the types are different.

// example and explanation of ? and ??
//ternary operation ?
const firstOperand = 1;
const secondOperand = 2;
const result = firstOperand < secondOperand ? firstOperand: secondOperand; // if the condition is true, the return the second operand
console.log(result); // 1

// operator ?? (nullish coalescing operator)
// this operator allows you to check the value for null and undefined
let firstResult = "hello" ?? "world";
console.log(firstResult); // hello, the operator return value of left operand if there not equal null or undefined
console.log(null ?? "not null");    // not null
console.log(undefined ?? "defined");    // defined

// cycle for in and for of
// for in designed for searching objects or arrays
const person = {name: "Tom", age: 37};
for(let prop in person){
      
    console.log(prop + person[prop]);
}

// for of you can use for searching arrays
let myArray = maxValue;
for(let number of myArray){
    console.log(number);
}

// type example second case
//const header = document.getElementById("header") as HTMLElement;
//header.innerText = "Hello Typescript!";

// how to use falsy valuse
/*
false
0
NaN (the "not a number" value)
"" (empty string)
[] (empty array)
null
undefined
*/
// false
let isOnline = false;
function checkStatus(status) {
  return Boolean(status) ? "ONLINE" : "OFFLINE";
}
checkStatus(isOnline); // "OFFLINE"

// 0
let unreadMessages = 0;
let hasUnreadMessages = Boolean(unreadMessages);
console.log(hasUnreadMessages) ;// false

// ""
let userInput = "";
let defaultText = "No input provided";
let displayText = Boolean(userInput) || defaultText;
console.log(displayText); // No input provided

// null
let user1 = null;
if (user1 && user1.name) {
    console.log("Welcome, " + user1.name + "!");
} else {
    console.log("Please log in to access the website.");
}

// undefined
let age1;
if (age1 === undefined) {
    console.log("The age is undefined.");
}