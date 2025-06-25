"use strict";
class Counter {
    increment() {
        Counter.count++;
    }
    static getCount() {
        return Counter.count;
    }
}
Counter.count = 0;
console.log(Counter.getCount());
