// const { cache } = require("react");

/**
 * title: Minimal Test Framework (BDD Style)
 * category: javascript
 * difficulty: medium
 * tags: testing, async, recursion
 * 
 * problem:
 * Build a lightweight testing framework similar to Jest or Mocha.
 * 
 * requirements:
 * - support expect() with matchers
 * - support async test()
 * - show pass/fail logs
 * 
 * notes:
 * Focus on clean design and error handling
 */
// Test Runner
let total = 0;
let passed = 0;
let failed = 0;

async function test(name, fn) {
    total++;
    try {
        await fn();
        console.log(`✅ ${name}`);
        passed++;
    } catch (err) {
        console.log(`❌ ${name}`);
        console.log('   ', err.message);
        failed++;
    }
}

function expect(actual) {
    const matchers = {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Expected ${expected} but got ${actual}`);
            }
        },

        toEqual(expected) {
            if (!deepEqual(actual, expected)) {
                throw new Error(`Expected deep equal but got different values`);
            }
        },

        toBeTruthy() {
            if (!actual) {
                throw new Error(`Expected truthy but got ${actual}`);
            }
        },

        toBeFalsy() {
            if (actual) {
                throw new Error(`Expected falsy but got ${actual}`);
            }
        },

        toThrow() {
            let threw = false;
            try {
                actual();
            } catch (e) {
                threw = true;
            }
            if (!threw) {
                throw new Error(`Expected function to throw error`);
            }
        }
    };

    // handle .not
    const not = {};
    Object.keys(matchers).forEach(key => {
        not[key] = (...args) => {
            try {
                matchers[key](...args);
            } catch {
                return;
            }
            throw new Error(`Negation failed`);
        };
    });

    return { ...matchers, not };
}

test('Basic math works', () => {
    expect(2 + 2).toBe(4);
});

test('Object equality', () => {
    const data = { a: 1 };
    expect(data).toEqual({ a: 1 });
    expect(data).not.toBe({ a: 1 });
});

// Summary (run after all tests)
setTimeout(() => {
    console.log(`\nTotal: ${total} | Passed: ${passed} | Failed: ${failed}`);
}, 100);