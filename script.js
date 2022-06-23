// alert("My name is Miracle Ezirim");
// alert("I am 167cm tall");
// alert("I live and am from Nigeria");

const num1 = parseFloat(prompt("Enter a Number"));
const operator = prompt("Enter Operator ( +, -, * or /): ");
const num2 = parseFloat(prompt("Enter a Number"));

let result;
if (operator == "+") {
  result = num1 + num2;
} else if (operator == "-") {
  result = num1 - num2;
} else if (operator == "*") {
  result = num1 * num2;
} else {
  result = num1 / num2;
}

window.alert(num1 + operator + num2 + " = " + result);
