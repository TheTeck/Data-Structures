const LinkedList = require('./linkedlist');
const Queue = require('./queue');
const Stack = require('./stack');
const BinaryTree = require('./binarytree');
const Heap = require('./heap');

const heap = new Heap();

console.log(heap);

heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);

const output = [];

output.push(heap.poll());
output.push(heap.poll());
output.push(heap.poll());
output.push(heap.poll());


console.log(output);
