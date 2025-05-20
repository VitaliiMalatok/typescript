// Function declaration and function expressin
// function declaration
// this function may be called before it is declared
function sayHello(): void {
    console.log("hello");
}
sayHello(); // hello

//function expression
// this syntax allows us to create a new function in the middle of any expression

const sayHej = function(): void {
    console.log("hej");
};
sayHej(); // hej

// spread operator
// allows you to decompose an array into individual values
const userName = ["Vitali", "Palina", "Alina"];
console.log(...userName); // Vitali Palina Alina

const maxValueNumber = [5, 4, 6, 2, 7, 8, 9, 3];
console.log(Math.max(...maxValueNumber)); // 9

// rest operator
// the rest operator puts the rest of some specific user-supplied values into a array
let userId = function(fistName: string, secondName: string, ...otherParam): string {
    return otherParam;
}
console.log(userId("Vitali", "Malatok", "date of bith", "last name")); // [ 'date of bith', 'last name' ]

// object
// a variable to which an object is assigned does not 3store the object itself, but a reference to its address in memory
// when copying an object, the reference is copied, not the object itself
const userVitali = {name: "Vitali"};
const admin = userVitali; // the reference is copied

// two object are equal if they are the same object
const a = {};
const b = a;
console.log(a == b); // true, two varianble are referense the same object
console.log(a === b); // true

const c = {};
const d = {};
console.log(c ==d); // false, becouse are they two independent object

// clone object
const user2 = {
    name: "Vitali",
    age: 36
};
const clone = Object.assign({}, user2); // we are clone property to the new empty object
console.log(clone); // { name: 'Vitali', age: 36 }

// metod structuredClone(), deep copy
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
const clone1 = structuredClone(user)
console.log(clone1); // { name: 'John', sizes: { height: 182, width: 50 } }

