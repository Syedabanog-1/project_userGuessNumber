#! /usr/bin/env node

import  promptSync from "prompt-sync";
const prompt =promptSync();

let enterNum = parseInt(prompt("Enter your number:"));
let guessNum = parseInt(prompt("Enter guess number between 5-45:"));



if (guessNum >= 5 && guessNum<=45){
console.log("Congratulations! you guessed right number");}
else {
console.log("Sorry! you could not guess right number");
} 