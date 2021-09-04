const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node(data);
        } else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }

    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }

    findANode(data) {
        let currentNode = this.head;
        while (currentNode && currentNode.data !== data) {
            currentNode = currentNode.getNextNode()
        }

        return currentNode;
    }

    removeANode(data) {
        let currentNode = this.head;
        const nodeToRemove = this.findANode(data)

        while (currentNode) {
            // loop through when current node points to the data to remove
            // this is the node to update pointer
            if (currentNode.getNextNode().data === nodeToRemove.data) {
                break;
            }

            currentNode = currentNode.getNextNode()
        }

        // update pointer to avoid orphaned node
        currentNode.setNextNode(nodeToRemove.getNextNode())
    }

    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }

}

module.exports = LinkedList;