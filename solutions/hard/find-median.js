/**
 * title: Group anagram
 * difficulty: hard
 * tags: Class, binary search, private method
 * 

Problem:
Design a structure that supports streaming numbers and returns the median at any time.

Functions (JavaScript):

class MedianFinder {
  constructor() { }
  addNum(num) { }
  findMedian() { }
}


Test cases:

const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian()); // Expected → 1.5

mf.addNum(3);
console.log(mf.findMedian()); // Expected → 2

// More
const t = new MedianFinder();
t.addNum(5);
t.addNum(15);
t.addNum(1);
t.addNum(3);
console.log(t.findMedian()); // Expected → 4 (avg of 3 and 5)

const x = new MedianFinder();
x.addNum(7);
console.log(x.findMedian()); // Expected → 7
*/

class MedianFinder {
    constructor() {
        this.data = [];
    }
    addNum(num) {
        const idx = this._findInsertIndex(num);
        this.data.splice(idx, 0, num)
    }
    // binary search to find insertion index
    _findInsertIndex(num) {
        let lo = 0, hi = this.data.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (this.data[mid] < num) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }
    findMedian() {
        const n = this.data.length;
        if (n === 0) return null;
        const mid = Math.floor(n / 2);
        if (n % 2 === 0) return (this.data[mid - 1] + this.data[mid]) / 2;
        return this.data[mid];
    }
}

const t = new MedianFinder();
t.addNum(5);
t.addNum(15);
t.addNum(1);
t.addNum(3);
console.log(t.findMedian()); // Expected → 4 (avg of 3 and 5)