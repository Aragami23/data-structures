"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.Stack = void 0;
class Item {
    constructor(value) {
        this.value = value;
        this.nextItem = null;
    }
}
exports.Item = Item;
class Stack {
    constructor() {
        this.top = null;
        this.base = null;
        this.size = 0;
    }
    push(value) {
        if (value == null)
            return;
        this.top = new Item(value);
        if (this.top) {
            const prevTop = this.top;
            this.top = new Item(value);
            this.top.nextItem = prevTop;
        }
        else {
            this.top = new Item(value);
            this.top = new Item(value);
        }
        return this.size++;
    }
    pop() {
        if (!this.top)
            return null;
        const popElement = this.top;
        this.top = this.top.nextItem;
        if (this.base === popElement) {
            this.base = null;
        }
        this.size--;
        return popElement.value;
    }
}
exports.Stack = Stack;
