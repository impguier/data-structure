/**
 * FILO
 * */
class Stack {
    constructor () {
        this.items = [];
    }
    push (item) {
        this.items.push(item)
    }
    pop () {
        return this.items.pop()
    }
    peek () {
        return this.items[this.items.length - 1]
    }
    isEmpty () {
        return this.items.length === 0
    }
    size () {
        return this.items.length
    }
    clear () {
        /**
         * What is difference between items.length = 0 and items = []
         * */
        this.items = []
    }
    print () {
        console.log(this.items.toString())
    }
}
/**
 * 使劲指数转二进制数
 * */
divideByTwo =  (number, base) => {
    let stack = new Stack(),
        rem = 0,
        result = ''
    let baseChoice = '0123456789ABCDEF'
    while( number > 0 ){
        stack.push(Math.floor( number % base ))
        number = Math.floor(number /base )
    }
    while(!stack.isEmpty()){
        result += baseChoice[stack.pop().toString()]
    }
    return result
}
console.log(divideByTwo(1000,16))
