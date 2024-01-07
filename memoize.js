const memo = (fn) => {
  const cache = new Map();
  let callCount = 0;
  return function (...args) {
    const argumentsAsString = args.toString();

    if (cache.has(argumentsAsString)) return cache.get(argumentsAsString);
    const value = fn(...args);

    cache.set(key, value);

    callCount++;

    return value;
  };
};

let callCount = 0;
const memoizedFn = memo(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
