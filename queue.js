const Node = require('./node');

class Queue {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    isEmpty () {
        return this.head === null;
    }

    print () {
        let current = this.head;
        let output = "Queue: ( ";

        while (current) {
            output += `${current.data} -> `;
            current = current.next;
        }
        output += 'null )';

        return output;
    }

    add (data) {
        const newNode = new Node (data);

        if (this.isEmpty()) {
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;

        return this;
    }

    remove () {
        let current = this.head;
        
        while (current.next !== this.tail) {
            current = current.next;
        }

        let output = current.next;
        current.next = null;
        this.tail = current;

        return output;
    }
}

module.exports = Queue;