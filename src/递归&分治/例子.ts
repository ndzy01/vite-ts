// n 的阶乘
function factorial(n: number): number {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}

// 斐波拉切数列
function fib(n: number): number {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
}
