const stack = require('./stack');
const queue = require('./queue');
console.log("------ Stack tests ------")
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
myStack.push(9);
console.log(myStack);
console.log("------ Stack tests END ------")

console.log("------ Queue tests ------")
const testQueue = new queue.Queue;
console.log('enqueue values');
console.log(testQueue.enqueue("queueValue1"));
console.log(testQueue.enqueue("queueValue2"));
console.log(testQueue.enqueue("queueValue3"));
console.log(testQueue.enqueue("queueValue4"));
console.log("first", testQueue.first)       
console.log("last", testQueue.last)
console.log("size", testQueue.size)
console.log("dequeue: ", testQueue.dequeue())
console.log("dequeue: ", testQueue.dequeue())
console.log("enqueue: ", testQueue.enqueue("queueValue5"));
console.log("last", testQueue.last)
console.log("dequeue: ", testQueue.dequeue())
console.log("dequeue: ", testQueue.dequeue())
console.log("dequeue: ", testQueue.dequeue())
console.log("dequeue: ", testQueue.dequeue())
console.log("dequeue: ", testQueue.dequeue())
console.log("dequeue: ", testQueue.dequeue())
console.log("------ Queue tests END ------")