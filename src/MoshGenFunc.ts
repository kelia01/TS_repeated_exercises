class ArrayUtils {
    static wrapArray<T> (value: T){
        return [value];
    }
}
console.log(ArrayUtils.wrapArray('1'));
console.log(ArrayUtils.wrapArray(2));