/*
   Priority is defined by number 'severity'. higher severity has higher priority.
*/



class QElement { 
    constructor(id, severity) 
    { 
        this.id = id; 
        this.severity = severity; 
    } 
} 

class PriorityQueue {
    constructor() 
    { 
        this.items = []; 
    } 

    enqueue(id, severity) {
        let qElement = new QElement(id, severity); 
        let contain = false;

        for (let i = 0; i < this.items.length; i++) { 
            
            if (this.items[i].severity < qElement.severity) { 
                // Once the correct location is found it is 
                // enqueued 
                this.items.splice(i, 0, qElement); 
                contain = true; 
                break; 
            } 
        } 

        if (!contain) { 
            this.items.push(qElement); 
        } 

    }

    dequeue() {
        if (this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    }

    deleteById(id) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                this.items.splice(i,1);
            }
        }
    }

    peek() {
        return this.items[0];
    }

    printPQueue()  { 
        var str = ""; 
        for (let i = 0; i < this.items.length; i++) 
            str += this.items[i].id + " ";
        console.log(str); 
    } 
}

exports.modules = { PriorityQueue }

