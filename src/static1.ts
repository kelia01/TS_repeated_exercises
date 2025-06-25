
// Solve all the typing issues in the code without changing the implementation

class Counter {
  static count = 0;

  increment() {
    Counter.count++;
  }

  static getCount() {
    return Counter.count;
  }
}
console.log(Counter.getCount())