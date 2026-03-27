
/**
 * title: Custom Event Emitter (Pub-Sub System)
 * category: javascript
 * difficulty: Medium
 * tags: design-patterns, callbacks, events
 * problem:
 * Build a class-based EventEmitter to manage custom events and listeners.
 * requirements:
 * - subscribe(eventName, callback, once): Register a listener for an event.
 * - unsubscribe(eventName, callback): Remove a specific listener from an event.
 * - emit(eventName, data): Trigger all listeners associated with an event.
 */

class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback, once = false) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push({ fn: callback, once });
    }

    unsubscribe(eventName, callback) {
        const listeners = this.events[eventName];
        if (!listeners) return 'no event found';

        this.events[eventName] = listeners.filter(event => event.fn !== callback);
        if (this.events[eventName].length === 0) {
            delete this.events[eventName];
        }
    }

    emit(eventName, data) {
        const listeners = this.events[eventName];

        if (listeners) {
            [...listeners].forEach(listener => listener.fn(data));

            this.events[eventName] =
                listeners.filter(listener => !listener.once);
        }

        const wildcards = this.events['*'];

        if (wildcards && eventName !== '*') {
            [...wildcards].forEach(listener =>
                listener.fn(eventName, data)
            );

            this.events['*'] =
                wildcards.filter(listener => !listener.once);
        }
    }
}

// --- Test Cases ---

const emitter = new EventEmitter();

// Basic Subscription
const greet = (data) => console.log(`Hello, ${data.name}!`);
emitter.subscribe('userLogin', greet);
emitter.emit('userLogin', { name: 'Alice' }); // Prints: Hello, Alice!

// Wildcard Test
emitter.subscribe('*', (eventName, data) => {
    console.log(`[LOG]: Event "${eventName}" fired with:`, data);
});
emitter.emit('save', { id: 101 }); // Triggers wildcard

// Unsubscribe Test
const alertMe = () => console.log("Incoming alert!");
emitter.subscribe('alert', alertMe);
emitter.unsubscribe('alert', alertMe);
emitter.emit('alert'); // Should print nothing

// Once Test
emitter.subscribe('onceEvent', () => console.log("I run only once"), true);
emitter.emit('onceEvent'); // Prints
emitter.emit('onceEvent'); // Nothing happens