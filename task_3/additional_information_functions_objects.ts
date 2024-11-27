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