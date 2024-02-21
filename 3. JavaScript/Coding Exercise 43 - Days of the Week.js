function returnDay(num) {
    let weekObj = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    }
    if (num >= 1 && num <= 7) {
        return weekObj[num];
    } else {
        return null;
    }
}

console.log(returnDay(1)); // "Monday"
console.log(returnDay(7)); // "Sunday"
console.log(returnDay(4)); // "Thursday"
console.log(returnDay(0)); // null