function lastElement(array) {
    if (array.length === 0){
        return null;
    } else {
        return array[array.length - 1];
    }
}

console.log(lastElement([3, 5, 7])) //7
console.log(lastElement([1])) //1
console.log(lastElement([])) //null