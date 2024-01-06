const memo = (fn) => {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    const cachedValue = cache.get(key);
    if (cachedValue) return cachedValue;
    const value = fn(...args);
    cache.set(key, value);
    return value;
  };
};

const sum = memo((nums) => {
  return nums.reduce(
    (previousValue, currentValue) => (previousValue += currentValue),
    0
  );
});

// [[0,0],[0,0],[]]

console.log(sum([0, 0]));
console.log(sum([0, 0]));
console.log(sum([]));
// console.log(sum([20, 30]));
// console.log(sum([10, 10]));
// console.log(sum([10, 90, 30, 40, 50]));
