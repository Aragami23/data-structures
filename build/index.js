"use strict";
//npm entrypoint
const express = require('express');
const app = express();
const port = 3000;
// use stack.ts file
const stack = require('./stack');
const myStack = new stack.Stack();
myStack.push(4);
myStack.push(6);
myStack.push(9);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
myStack.push(6);
myStack.push(9);
console.log(myStack);
