let input = prompt('What would you like to do?');
const todos = ['Collect chicken eggs', 'clean litter box'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('****************************');
        for (let item = 0; item < todos.length; item++){
            console.log(`${item}: ${todos[item]}`);
        }
        console.log('****************************');
    } else if (input === 'new'){
        const newTodo = prompt("What is the new task?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === 'delete') {
        const index = parseInt(prompt("What is the task index that you would like to remove?"));
        if (!Number.isNaN(index)) {
            if (typeof todos[index] !== 'undefined') {
                const deleted = todos.splice(index, 1);
                console.log(`OK, deleted ${deleted[0]}`)
            } else {
                console.log("Sorry, invalid index. Nothing has been deleted.");
            }
        } else {
            console.log('Sorry, that is not a number.');
        }
    }
    input = prompt('What would you like to do?');
}
console.log('Okay, you quit the app.');