class Node {
    constructor (element) {
        this.element = element
        this.next = null
    }
}
class LinkedList {
    constructor () {
        this.head = null
        this.length = 0
    }
    append (element) {
        let node = new Node(element),
            current

        if(this.head === null){
            this.head = node
        }else{
            current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.length++
    }
    removeAt (position) {
        if( position > -1 && position < this.length ){
            let current = this.head,
                previous,
                index = 0
            if(position === 0){
                this.head = current.next
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next
                }
                previous.next = current.next;
            }
            this.length--
            return current.element
        } else {
            return null
        }
    }
    insert (element, position) {
        let node = new Node(element)
        if(position > -1 && position > this.length) {
            let current = this.head,
                previous,
                index
            if( position === 0 ){
                node.next = current
                this.head = node;
            } else {
                while(index++ < position) {
                    previous = current
                    current = current.next
                }
                previous.next = node;
                node.next = current
            }
            this.length++
        } else {
            return false
        }
    }
    toString () {
        let string = '',
            current = this.head
        while ( current ) {
            string += current.element + (current.next ? '\n': '')
            current = current.next
        }
        return string
    }
    indexOf (element) {
        let current = this.head,
            index = 0
        while( current ) {
            if( current.element === element ){
                return index
            }
            current = current.next
            index++
        }
        return -1
    }
    remove (element) {
        let index = this.indexOf(element);
        this.removeAt(index);
    }
    isEmpty () {
        return this.length === 0
    }
    size () {
        return this.length
    }
    print () {
        console.log(this.toString())
    }
    getHead () {
        return this.head
    }
}
class DoublyNode {
    constructor(element) {
        this.element = element
        this.previous = null
        this.next = null
    }
}
class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.length = 0;
        this.tail = null
    }
}

let linkList = new LinkedList();
linkList.append("1")
linkList.append("2")
linkList.append("3")
linkList.append("4")

console.log(linkList.toString())
