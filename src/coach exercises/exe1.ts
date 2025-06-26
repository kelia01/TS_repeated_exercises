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
