const helloButton = document.querySelector('#hello');
const byeButton = document.querySelector('#goodbye');

helloButton.addEventListener('click', () => {
    console.log('hello');
})

byeButton.addEventListener('click', () => {
    console.log('goodbye');
})