var num = +prompt("Enter a number:");
var sum = 0;
for (var i = 1; i <= num; i++) {
    sum += i;
}
alert("Summation = " + sum);

var a = +prompt("Enter first number:");
var b = +prompt("Enter second number:");
var gcd = 1;
var min = a < b ? a : b;
for (var i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
        gcd = i;
    }
}
alert("Largest common divisor: " + gcd);

var n = +prompt("Enter a number to find its divisors:");
var result = "";
for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
        result += i + " ";
    }
}
alert("Divisors: " + result);

var x = prompt("Enter a number:");
var digits = x.length;
alert("Digits: " + digits);

var positive = 0, negative = 0, zero = 0, even = 0, odd = 0;
var value;
for (var i = 0; i < 10; i++) {
    value = +prompt("Enter number " + (i + 1));
    if (value > 0) positive++;
    else if (value < 0) negative++;
    else zero++;
    if (value % 2 === 0) even++;
    else odd++;
}
alert(
    "Positive: " + positive +
    "\nNegative: " + negative +
    "\nZero: " + zero +
    "\nEven: " + even +
    "\nOdd: " + odd
);

var again = true;
while (again) {
    var p = +prompt("Enter first number:");
    var q = +prompt("Enter second number:");
    var sign = prompt("Enter operation (+ - * /):");
    var result;
    if (sign === "+") result = p + q;
    else if (sign === "-") result = p - q;
    else if (sign === "*") result = p * q;
    else if (sign === "/") result = p / q;
    else result = "Invalid operator";
    alert("Result: " + result);
    again = confirm("Do another calculation?");
}

var num2 = prompt("Enter a number:");
var shift = +prompt("How many digits to move?");
var moved = num2.slice(shift) + num2.slice(0, shift);
alert("Shifted number: " + moved);

var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var index = 0;
while (confirm(days[index] + ". See next day?")) {
    index++;
    if (index === 7) index = 0;
}

var table = "";
for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 10; j++) {
        table += i + " x " + j + " = " + (i * j) + "\n";
    }
    table += "\n";
}
alert(table);

var low = 0;
var high = 100;
var mid;
var answer;
while (true) {
    mid = Math.floor((low + high) / 2);
    answer = prompt("Is your number > " + mid + ", < " + mid + ", or == " + mid + " ?");
    if (answer === ">") {
        low = mid + 1;
    } else if (answer === "<") {
        high = mid - 1;
    } else if (answer === "==") {
        alert("Your number is " + mid + "!");
        break;
    } else {
        alert("Enter only >, <, or ==");
    }
}
