const prompt = require('prompt-sync')({sigint: true});

//Program penjumlahan
var num1 = prompt("Enter a first number ");
var num2 = prompt("Enter a second number ");

var hasil1 = Number(num1) + Number(num2);
var hasil2 = num1 + num2;

console.log('first number + second number = ');
console.log(Number(num1) + Number(num2));
console.log(typeof(num1));
console.log(num1 + num2);
console.log(2);
