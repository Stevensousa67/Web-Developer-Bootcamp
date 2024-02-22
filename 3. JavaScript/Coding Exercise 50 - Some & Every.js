function allEvens(array) {
    return array.every(number => number % 2 === 0);
}

function someEvens(array) {
    return array.some(number => number % 2 === 0);
}

// Test Every
console.log(allEvens([2, 4, 6, 8, 10]));
console.log(allEvens([1, 3, 5, 7, 9]));
console.log(allEvens([2, 4, 5, 8, 10]));

// Test Some
console.log(someEvens([2, 4, 6, 8, 10]));
console.log(someEvens([1, 3, 5, 7, 9]));
console.log(someEvens([2, 4, 5, 8, 10]));