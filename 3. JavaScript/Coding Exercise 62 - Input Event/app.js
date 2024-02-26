let input = document.querySelector('#username');
let h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    if (input.value === "") {
        h1.innerText = "Enter Your Username";
    } else {
        h1.innerText = `Welcome, ${input.value}`;
    }
})