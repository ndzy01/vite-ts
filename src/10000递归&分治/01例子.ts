// n 的阶乘
const factorial = (n: number): number => {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
};

// 斐波拉切数列
const fib = (n: number): number => {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};

console.log(factorial(4), fib(5));
