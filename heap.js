class Heap {
    constructor (data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    stringify () {
        let output = this.data + ' ';
        if (this.left)
            output += this.left.stringify();
        if (this.right) 
            output += this.right.stringify();
        return output;
    }
}

module.exports = Heap;