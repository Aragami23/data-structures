"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Item {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) {
        const newItem = new Item(value);
        newItem.next = null;
        if (!this.first) {
            this.first = this.last = newItem;
        }
        else {
            this.last.next = newItem;
            this.last = newItem;
        }
        this.size++;
        return this.size;
    }
    dequeue() {
        if (!this.first)
            return null;
        const itemToDequeue = this.first;
        if (this.first === this.last)
            this.last = null;
        this.first = this.first.next;
        this.size--;
        return itemToDequeue;
    }
}
exports.Queue = Queue;
