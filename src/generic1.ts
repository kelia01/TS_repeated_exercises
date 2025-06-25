// Write a generic function identity that returns the value it receives without changing the type.

// function identity<T> (value: T): T {
//     return value;
// }

// console.log(identity([12,12]));

//Using arrow functions
const identity = <T>(value: T): T => value;
