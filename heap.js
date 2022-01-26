class Heap {
    #size;

    constructor (data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.#size = 1;
    }

    stringify () {
        let output = this.data + ' ';
        if (this.left)
            output += this.left.stringify();
        if (this.right) 
            output += this.right.stringify();
        return output;
    }

    add (data) {
        let fullHeight = 0;
        let level = 0;
        while (fullHeight <= this.#size) {
            fullHeight += 2 ** level;
            level++;
        }
        // Got level to add new node to, now add recursive insertion
        // with level as boundary
        return level
    }
}

module.exports = Heap;