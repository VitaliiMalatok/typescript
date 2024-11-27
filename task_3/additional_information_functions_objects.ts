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

