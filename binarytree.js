class BinaryTree {
    constructor (data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    add (data) {
        if (!this.data) {
            this.data = data;
        } else if (data < this.data) {
            if (!this.left) {
                const newNode = new BinaryTree(data);
                this.left = newNode;
            } else {
                this.left.add(data);
            }
        } else {
            if (!this.right) {
                const newNode = new BinaryTree(data);
                this.right = newNode;
            } else {
                this.right.add(data);
            }
        }
        return this;
    }

    stringify () {
        let output = '';
        
        output += this.left ? this.left.stringify() : '';
        output += this.data + ' ';
        output += this.right ? this.right.stringify() : '';

        return output;
    }
}

module.exports = BinaryTree;