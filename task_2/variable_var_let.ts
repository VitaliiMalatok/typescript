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

function printIdNumber(id: number|string){
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