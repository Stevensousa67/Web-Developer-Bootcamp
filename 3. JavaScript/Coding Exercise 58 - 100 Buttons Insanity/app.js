let docParent = document.querySelector('#container');
for (let i = 0; i < 100; i++) {
    let button = document.createElement('button');
    button.innerText = "Hey!";
    docParent.appendChild(button);
}