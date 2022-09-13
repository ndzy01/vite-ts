class MovingAverage {
  size = 0;
  queue: number[] = [];
  sum: number = 0;

  constructor(size: number) {
    this.size = size;
  }

  next(val: number): number {
    if (this.queue.length === this.size)
      this.sum -= this.queue.shift() as number;

    this.queue.push(val);
    this.sum += val;

    return this.sum / this.queue.length;
  }
}

const movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1));
console.log(movingAverage.next(2));
console.log(movingAverage.next(3));
console.log(movingAverage.next(4));
