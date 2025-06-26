"use strict";
const processValue = (value) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
    else if (typeof value === "boolean") {
        console.log(value ? "True" : "False");
    }
    else {
        throw new Error(`Invalid value`);
    }
};
console.log(processValue(8));
