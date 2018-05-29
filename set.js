class Set {
    constructor() {
        this.items = {}
    }

    has (value) {
        return this.items.hasOwnProperty(value)
    }

    add (value) {
        if (!this.has(value)) {
            this.items[value] = value
            return true
        }
        return false
    }

    delete (value) {
        if (this.has(value)) {
            delete this.items[value]
            return true
        }
        return false
    }

    clear () {
        this.items = {}
    }

    size () {
        return Object.keys(this.items).length
    }

    values () {
        let values = [];
        for (let i = 0, keys = Object.keys(this.items); i < keys.length; i++) {
            values.push(this.items[keys[i]])
        }
        return values
    }

    union (otherSet) {
        let unionSet = new Set(),
            localSet = this.items;

        for( let i = 0 , keys = localSet.values();i<keys.length;i++){
            unionSet.add(keys[i])
        }

        for( let i = 0 , keys = otherSet.values();i<keys.length;i++){
            unionSet.add(keys[i])
        }

        return unionSet;
    }
    intersection (otherSet) {
        let intersectionSet = new Set();
        for( let i=0,values = this.items.values();i<values.length;i++ ){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet;
    }
    difference (otherSet) {
        let differenceSet = new Set();
        for( let i=0,values = this.items.values();i<values.length;i++ ){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i])
            }
        }
    }
    subset (otherSet) {
        let subSet = new Set();
        if(!this.size()){
            return false
        } else {
            for( let i=0,values = this.items.values();i<values.length;i++ ){
                if(!otherSet.has(values[i])){
                    return false
                }
            }
            return true
        }
    }
}