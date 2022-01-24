const LinkedList = require('./linkedlist');
const Queue = require('./queue');

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