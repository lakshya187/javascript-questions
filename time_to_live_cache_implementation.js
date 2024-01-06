class CacheImplementation {
  constructor() {
    this.state = new Map();
  }
  set = (key, value, duration) => {
    const existingKey = this.state.get(key);
    if (existingKey) {
      clearTimeout(existingKey.expire);
    }
    this.state.set(key, {
      value,
      expire: setTimeout(() => this.state.delete(key), duration),
    });
    if (existingKey) {
      return true;
    } else {
      return false;
    }
  };
  get = (key) => {
    const value = this.state.get(key);
    if (value) {
      return value.value;
    } else {
      return -1;
    }
  };
}
const timeLimitedCache = new CacheImplementation();

console.log(timeLimitedCache.set(1, 42, 500)); // false
console.log(timeLimitedCache.get(1)); // 42
setTimeout(() => {
  console.log(timeLimitedCache.get(1));
}, 1000);
