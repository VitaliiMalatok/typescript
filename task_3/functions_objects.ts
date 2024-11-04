// functions
// functions can return a value of a certain type
function sum(a: number, b: number): number {
    return a + b;
}
let resultSum = sum(10, 11); // 21
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
let name1 = idUserName("Vitali", "Malatok"); // Vitali--Malatok
console.log(name1);
let name2 = idUserName("Palina"); // Palina
console.log(name2);

// default value in function
function getUserName(firstName: string, secondName: string = "MALATOK"): string {
    return firstName + "--" + secondName
}
let name3 = getUserName("Vitali", "Malatok"); // Vitali--Malatok
console.log(name3);
let name4 = getUserName("Palina"); // Palina--MALATOK
console.log(name4);