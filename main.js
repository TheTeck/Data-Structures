const LinkedList = require('./linkedlist');
const Queue = require('./queue');
const Stack = require('./stack');

const linkedList = new LinkedList();
linkedList.addNode(3).addNode(5).addNode(7).addNode(9);
console.log(linkedList.printList());
linkedList.reverse();
console.log(linkedList.printList());

/////////////////////////////////////////

const queue = new Queue();
queue.add(2).add(4).add(6).add(8);
console.log(queue.print());
console.log(queue.remove())
console.log(queue.remove())
console.log(queue.print());

/////////////////////////////////////////

const stack = new Stack();
stack.push(1).push(2).push(3).push(4).push(5);
console.log(stack.print())
console.log(stack.peak());
stack.pop().pop();
console.log(stack.peak());
console.log(stack.print());