class MyQueue1 {
  stack1: number[] = [];
  stack2: number[] = [];

  push(x: number): void {
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop() as number);
    }

    this.stack1.push(x);
  }

  pop(): number {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop() as number);
    }

    return this.stack2.pop() as number;
  }

  peek(): number {
    const head = this.pop();

    this.stack2.push(head);

    return head;
  }

  isEmpty(): boolean {
    return !this.stack1.length && !this.stack2.length;
  }
}

const queue = new MyQueue1();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue);
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.isEmpty());
console.log(queue);
