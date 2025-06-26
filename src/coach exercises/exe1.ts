class Logger {
  logs: { timestamp: number, message: string }[] =[];

  addLog(message: string) {
    this.logs.push({ timestamp: Date.now(), message });
  }

   clearLogs() {
    this.logs = [];
  }
}
