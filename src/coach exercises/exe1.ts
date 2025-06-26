class Logger {
  logs: { timestamp: number, message: string }[] =[];

  addLog(message: string) {
    this.logs.push({ timestamp: Date.now(), message });
  }

   clearLogs() {
    this.logs = [];
  }
}

//Second
const wrapInArray = <T>(value: T ): T[]=> {
    return [value]
}
const result = wrapInArray(42); // number[]
const result2 = wrapInArray("hello"); // string[]

// Third
interface User {
  name: "Alice",
  age: 30,
  isAdmin: false,
};
function printUserInfo(user: User) {
  console.log(`${user.name} (${user.age}) - Admin: ${user.isAdmin}`);
}

