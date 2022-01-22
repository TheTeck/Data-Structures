const LinkedList = require('./linkedlist');

const linkedList = new LinkedList();
linkedList.addNode(3).addNode(5).addNode(7).addNode(9);

console.log(linkedList.printList());

linkedList.reverse();

console.log(linkedList.printList());