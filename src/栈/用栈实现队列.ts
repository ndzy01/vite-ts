class MyQueue {
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

  empty(): boolean {
    return !this.stack1.length && !this.stack2.length;
  }
}
