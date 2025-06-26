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

//Fourth
type Circle = {
    type: 'circle',
    radius: number
}
type Rectangle = {
    type: 'rectangle',
    length: number,
    width: number
}
type Shape =  Circle | Rectangle;

function getArea(shape: Shape): number {
  if(shape.type === 'circle') 
    return shape.radius*2;
return shape.length * shape.width;
}

//Update the function to accept a tuple and destructure it correctly
function greet([firstName, lastName]: [string, string]): string {
  return `Hello, ${firstName} ${lastName}`;
}
