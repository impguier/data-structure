/**
 * FIFO
 * */
class Queue {
    constructor () {
        this.items = []
    }
    enqueue (element) {
        this.items.push(element)
    }
    dequeue () {
        return this.items.shift()
    }
    front () {
        return this.items[0];
    }
    isEmpty () {
        return this.items.length === 0
    }
    size () {
        return items.length
    }
    print () {
        console.log(items.toString())
    }
}
class PriorityElement {
    constructor (element, priority) {
        this.element = element;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor () {
        this.items = [];
    }
    enqueue (element, priority) {
        let queueElement = new PriorityElement(element, priority)
        let added = false
        for(let i = 0;i<this.items.length; i++){
            let item = this.items[i];
            if(queueElement.priority < item.priority ){
                this.items.splice(i,0,queueElement)
                added = true
                break
            }
        }
        if( !added ){
            this.items.push(queueElement);
        }
    }
    print () {
        console.log(this.items)
        for(let i=0;i<this.items.length;i++){
            console.log(`${this.items[i].element}  - ${this.items[i].priority}`);
        }
    }
}
let queue = new PriorityQueue();
queue.enqueue("大家好",0)
queue.enqueue("大家好3",3)
queue.enqueue("大家好1",1)
queue.enqueue("大家好2",2)
queue.enqueue("大家好4",4)
queue.print()

/*
* Hot Potato
* */
function hotPotato (nameLilst, num) {
    let queue = new Queue()

    for(let i=0;i<nameLilst.length;i++){
        queue.enqueue(nameList[i])
    }
    let eliminated = ''
    while(queue.size() > 1){
        for (let i=0; i<num; i++){
            queue.enqueue(queue.dequeue()); // {3}
        }
        eliminated = queue.dequeue();
        console.log(eliminated + ' was eliminated from the Hot Potato  game.')
    }
    return queue.dequeue()
}