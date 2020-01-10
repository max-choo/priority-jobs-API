/*
   Priority is defined by number 'severity'. higher severity has higher priority.
*/

class QElement { 
    constructor(item, severity) 
    { 
        this.item = item; 
        this.severity = severity; 
    } 
} 
class PriorityQueue {
    constructor() 
    { 
        this.items = []; 
    } 

    enqueue(item, severity) {

        var qElement = new QElement(item, severity); 
        var contain = false; 

        for (var i = 0; i < this.items.length; i++) { 
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

    printPQueue()  { 
        var str = ""; 
        for (var i = 0; i < this.items.length; i++) 
            str += this.items[i].item + " "; 
        console.log(str); 
    } 
}