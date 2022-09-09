class MovingAverage {
  size = 0;
  queue: number[] = [];
  sum: number = 0;

  constructor(size: number) {
    this.size = size;
  }

  next(val: number): number {
    if (this.queue.length === this.size) {
      // @ts-ignore
      this.sum -= this.queue.shift();
    }

    this.queue.push(val);
    this.sum += val;

    return this.sum / this.queue.length;
  }
}
