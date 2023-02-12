class Item {
    value: any;
    next: Item | null;
    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    first: Item | null;
    last: Item | null;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue (value: any) {
        const newItem = new Item(value);
        newItem.next = null;
        if (!this.first) {
            this.first = this.last = newItem;
        } else {
            this.last!.next = newItem;
            this.last = newItem;

        }
        this.size++;
        return this.size;
    }
    
    dequeue () {
        if (!this.first) return null;
        const itemToDequeue = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first!.next;
        this.size--;
        return itemToDequeue;
    }
}
export { Queue };