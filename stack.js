const Node = require('./node');

class Stack {
    constructor () {
        this.head = null;
    }

    isEmpty () {
        return this.head === null;
    }

    print () {
        let current = this.head;
        let output = "Stack: ( ";

        while (current) {
            output += `${current.data} -> `;
            current = current.next;
        }

        output += 'null )';

        return output;
    }

    push (data) {
        const newNode = new Node (data);

        newNode.next = this.head;
        this.head = newNode;

        return this;
    }

    pop () {
        if (!this.isEmpty()) {
            this.head = this.head.next;
        }

        return this;
    }

    peak () {
        return this.head ? this.head.data : null;
    }
}

module.exports = Stack;