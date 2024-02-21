const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg(){
        this.eggCount += 1;
        let str = 'EGG';
        return str;
    }
}

console.log(hen.name); // "Helen"
console.log(hen.eggCount); // 0
console.log(hen.layAnEgg()); // "EGG"
console.log(hen.layAnEgg()); // "EGG"
console.log(hen.eggCount); // 2