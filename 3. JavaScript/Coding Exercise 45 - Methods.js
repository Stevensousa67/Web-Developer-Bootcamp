const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}

console.log(square.area(10)); //100
console.log(square.perimeter(10)); //40