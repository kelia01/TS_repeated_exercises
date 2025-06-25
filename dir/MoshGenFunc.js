"use strict";
class ArrayUtils {
    static wrapArray(value) {
        return [value];
    }
}
console.log(ArrayUtils.wrapArray('1'));
console.log(ArrayUtils.wrapArray(2));
