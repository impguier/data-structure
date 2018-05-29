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
class Dictionary {
    constructor () {
        this.items  = {};
    }
    has ( element ) {
        return element in this.items
    }
    set (key, value) {
        this.items[key] = value
    }
    delete (key) {
        if(this.has(key)){
            delete this.items[key]
            return true
        }else{
            return false
        }
    }
    get (key) {
        return this.has(key) ? this.items[key] : undefined
    }
    keys () {
        return Object.keys(this.items)
    }
    getItems () {
        return this.items
    }
}
function ValuePair (key, value){
    this.key = key;
    this.value = value;
    this.toString = function(){
        return '[' + this.key + '-' + this.value + ']'
    }
}
class Hash {
    constructor () {
        this.table = []
    }
    loseloseHashCode (key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }
    put (key, value) {
        /*let position = this.loseloseHashCode(key)
        this.table[position] = value*/
        let position = this.loseloseHashCode(key)
        if(!this.table[position]){
            this.table[position] = new LinkedList()
        }
        this.table[position].append(new ValuePair(key, value))
    }
    get (key) {
        let position = this.loseloseHashCode(key)
        if(this.table[position]){
            let current = this.table[position].getHead()
            while(current.next){
                if(current.element.key === key ){
                    return current.element.value;
                }
                current = current.next;
            }
            if(current.element.key === key){
                return current.element.value
            }
        }
        return undefined
    }
    remove (key) {
        let position = this.loseloseHashCode(key)
        if(this.table[position]){
            let current = this.table[position].getHead();
            while(current.next){
                if(current.element.key === key){
                    this.table[position].remove(current.element);
                    if(this.table[position].isEmpty()){
                        this.table[position] = undefined
                    }
                }
            }
            if(current.element.key === key ){
                this.table[position].remove(current.element);
                if(this.table[position].isEmpty()){
                    this.table[position] = undefined
                }
            }
        }
    }
}