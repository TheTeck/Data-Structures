class Node {
    constructor (data = null) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    isEmpty () {
        return this.head === null;
    }

    addNode (data) {
        if (this.isEmpty()) {
            this.head = new Node(data);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            const newNode = new Node(data);
            current.next = newNode;
        }
        return this;
    }

    reverse () {
        let prev = null;
        let next = null;
        let current = this.head;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this.head;
    }

    printList () {
        let output = '( ';
        let current = this.head;
        while (current) {
            output += `${current.data} -> `;
            current = current.next;
        }
        output += 'null )';
        return output;
    }
}

module.exports = LinkedList;