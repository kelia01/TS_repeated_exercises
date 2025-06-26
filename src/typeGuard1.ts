// Write a TypeScript function processValue that takes string | number | boolean | null | undefined,
// uses type guards to log uppercase strings, numbers fixed to two decimals, and boolean as "True"/"False,” 
// and throws an error for null or undefined, including a type assertion to narrow the type.

const processValue = (value: string | number | boolean | null | undefined): void => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  } else if (typeof value === "boolean") {
    console.log(value ? "True" : "False");
  } else {
    throw new Error(`Invalid value`);
  }
};

console.log(processValue(8))
