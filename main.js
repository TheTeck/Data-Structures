const LinkedList = require('./linkedlist');

const linkedList = new LinkedList();
linkedList.addNode(3).addNode(5).addNode(7);

console.log(linkedList.printList());