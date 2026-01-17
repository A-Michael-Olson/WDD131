const PI = 3.14;
let radius = 3;

const one = 1;
const two = '2';

let course = "CSE131"; // global scope
if (true) {
    let student = "John";
    console.log(course);   // works
    console.log(student); // works
}

console.log(course); // works

try {
    console.log(student);
} catch (error) {
    console.log("student is not accessible outside the block");
}

console.log(PI);
console.log(radius);
console.log(one);
console.log(two);