class Item {
    value: any;
    nextItem: Item | null;

    constructor(value: any) {
        this.value = value;
        this.nextItem = null;
    }
}
class Stack {
    top: Item | null;
    base: Item | null;
    size: number;
    constructor() {
        this.top = null;
        this.base = null;
        this.size = 0;
    }
    push (value: any) {
        if (value == null) return;
        if (this.top) {
            const prevTop = this.top
            this.top = new Item(value);
            this.top!.nextItem = prevTop;
        } else {
            this.top = value;
            this.base = value;
        }
        return this.size++;
    }
    pop () {
        if (!this.top) return null;
        const popElement = this.top;
        this.top = this.top.nextItem;
        if (this.base === popElement) {
            this.base = null;
        }
        this.size--;
        return popElement.value;
    }
    
}
export { Stack, Item };