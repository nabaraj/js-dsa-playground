/**
 * title: Least Recently Used (LRU) cache
 * difficulty: medium
 * tags: class, array, Map
 * problem: Design a data structure that follows the Least Recently Used (LRU) cache policy.
It should support two operations:

get(key) → returns the value of the key if it exists, otherwise -1.

put(key, value) → insert or update the value. If the cache is full, remove the least recently used item.

Function signature (JavaScript):

class LRUCache {
  constructor(capacity) { }
  get(key) { }
  put(key, value) { }
}


Test cases:

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // Expected → 1
cache.put(3, 3);           // Removes key 2
console.log(cache.get(2)); // Expected → -1
cache.put(4, 4);           // Removes key 1
console.log(cache.get(1)); // Expected → -1
console.log(cache.get(3)); // Expected → 3
console.log(cache.get(4)); // Expected → 4

 */

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.capacity <= 0) return;

        if (this.map.has(key)) {
            this.map.delete(key);
            this.map.set(key, value);
            return;
        }

        if (this.map.size >= this.capacity) {
            const lruKey = this.map.keys().next().value;
            this.map.delete(lruKey);
        }

        this.map.set(key, value);
    }
}

const cache = new LRUCache(2);
console.log(cache.get(1));
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // Expected → 1
cache.put(3, 3);           // Removes key 2
console.log(cache.get(2)); // Expected → -1
cache.put(4, 4);           // Removes key 1
console.log(cache.get(1)); // Expected → -1
console.log(cache.get(3)); // Expected → 3
console.log(cache.get(4)); // Expected → 4
