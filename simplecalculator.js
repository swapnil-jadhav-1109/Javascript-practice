let operator = "-";
let num1 = 10;
let num2 = 20;
let result;
if (operator === "+") {
     result = num1 + num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else  {
    result = num1 - num2;
}
console.log(`${num1} ${operator} ${num2} = ${result} `);