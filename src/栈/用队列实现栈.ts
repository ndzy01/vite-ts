class MyStack {
  queue: number[] = [];

  push(x: number): void {
    let len = this.queue.length;
    this.queue.push(x);

    while (len--) {
      this.queue.push(this.queue.shift() as number);
    }
  }

  pop(): number {
    return this.queue.shift() as number;
  }

  top(): number {
    const top = this.pop();

    this.push(top);

    return top;
  }

  empty(): boolean {
    return !this.queue.length;
  }
}

class MyStack1 {
  queue1: number[] = [];
  queue2: number[] = [];

  push(x: number): void {
    this.queue1.push(x);
  }

  pop(): number {
    //  减少交换测试 queue1 为空时交换
    if (!this.queue1.length) {
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift() as number);
    }

    // 最后一个元素出队
    return this.queue1.shift() as number;
  }

  top(): number {
    const top = this.pop();

    this.push(top);

    return top;
  }

  empty(): boolean {
    return !this.queue1.length && !this.queue2.length;
  }
}
