// functions
// functions can return a value of a certain type
function sum(a: number, b: number): number {
    return a + b;
}
const resultSum = sum(10, 11); // 21
console.log(resultSum);

// if the function does not return anything, then specify the void type
function sumNumber(x: number, y: number): void {
    console.log(x + y);
}
sumNumber(5, 6); //11

// you can use optional parameters in a function using the ? sign
// in this case we check value for undefined
function idUserName(firstName: string, secondName?:string): string {
    if(secondName) {
        return firstName + "--" + secondName;
    }
    else
        return firstName;
}
const name1 = idUserName("Vitali", "Malatok"); // Vitali--Malatok
console.log(name1);
const name2 = idUserName("Palina"); // Palina
console.log(name2);

// default value in function
function getUserName(firstName: string, secondName: string = "MALATOK"): string {
    return firstName + "--" + secondName
}
const name3 = getUserName("Vitali", "Malatok"); // Vitali--Malatok
console.log(name3);
const name4 = getUserName("Palina"); // Palina--MALATOK
console.log(name4);

// function expression or anonymous functions
const massage = function(): void {
    console.log("halo, halo");
}
massage(); // halo, halo

// local function
// a local function is a function inside another function
// a local function can only be called within a surrounding function
function printText(): void {
    printHello();
    function printHello(): void {
        console.log("Hello");
    }
}
printText(); // Hello

// arrow function
const hello = ()=> console.log("hello");
hello(); // hello

const printMes = mes=> console.log(mes);
printMes("hello"); // hello
const addSum = (x, y)=> console.log(x + y);
addSum(1, 2); // 3
const sumNum = (x, y)=> x + y;
console.log(sumNum(2, 3)); // 5

// object
const person = {name: "Vitali", age: 36};
for (let element in person) {
    console.log(person[element]); // Vitali, 36
}

// optional object property
let person1: {name: string, age?: number};
person1 = { name: "Tom", age: 23 };
console.log(person1.name);   // Tom
person1 = { name: "Bob"};    
console.log(person1.name);   // Bob

// object in function
function printUser(user: { name: string; age: number}) {
    console.log(`name: ${user.name}  age: ${user.age}`);
  }
  let bob = {name: "Bob", age: 44, isMarried: true};
  printUser(bob);  // name: Bob  age: 44

