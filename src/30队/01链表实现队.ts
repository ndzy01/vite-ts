interface AbstractNode {
  next?: AbstractNode | null;
  prev?: AbstractNode | null;
}

class LNode<T> implements AbstractNode {
  public value: T;
  public next: AbstractNode | null;
  public prev: AbstractNode | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DummyHeadNode implements AbstractNode {
  public next: AbstractNode | null;

  constructor() {
    this.next = null;
  }
}

class DummyTailNode implements AbstractNode {
  public prev: AbstractNode | null;

  constructor() {
    this.prev = null;
  }
}

class MyQueue<T> {
  dummyHead: DummyHeadNode;
  dummyTail: DummyTailNode;
  length: number;

  constructor() {
    this.dummyHead = new DummyHeadNode();
    this.dummyTail = new DummyTailNode();
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
    this.length = 0;
  }

  enqueue(value: T): number {
    const node = new LNode(value);
    const prevLast = this.dummyTail.prev;

    // @ts-ignore
    prevLast.next = node;
    node.prev = prevLast;
    node.next = this.dummyTail;
    this.dummyTail.prev = node;

    this.length++;

    return this.length;
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    const node = this.dummyHead.next;
    const newFirst = node?.next;

    // @ts-ignore
    this.dummyHead.next = newFirst;
    // @ts-ignore
    newFirst.prev = this.dummyHead;
    // @ts-ignore
    node.next = null;

    this.length--;

    // @ts-ignore
    return node.value;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  front(): T | undefined {
    if (this.isEmpty()) return undefined;

    // @ts-ignore
    return this.dummyHead.next.value;
  }

  back(): T | undefined {
    if (this.isEmpty()) return undefined;

    // @ts-ignore
    return this.dummyTail.prev.value;
  }

  len(): number {
    return this.length;
  }
}

const myQueue = new MyQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());
console.log(myQueue.front());
console.log(myQueue.back());
console.log(myQueue.len());
