// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let newLI = document.createElement('LI');
    newLI.innerText = `${quantity.value} ${product.value}`;
    list.appendChild(newLI);
    product.value = "";
    quantity.value = "";
})