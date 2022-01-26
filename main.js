const LinkedList = require('./linkedlist');
const Queue = require('./queue');
const Stack = require('./stack');
const BinaryTree = require('./binarytree');
const Heap = require('./heap');

const tree = new BinaryTree(50);
tree.add(25).add(55).add(30).add(20).add(60).add(70);
console.log(tree.stringify())

const heap = new Heap(34);
console.log('Heap: ' + heap.stringify())