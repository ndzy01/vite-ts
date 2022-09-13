const mergeSimilarItems = (
  items1: number[][],
  items2: number[][],
): number[][] => {
  const map = new Map();

  for (let [a, b] of items1) {
    map.set(a, (map.get(a) || 0) + b);
  }

  for (let [a, b] of items2) {
    map.set(a, (map.get(a) || 0) + b);
  }

  return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
};

console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ],
  ),
);
