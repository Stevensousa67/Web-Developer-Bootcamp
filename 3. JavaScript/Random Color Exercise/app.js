let h1 = document.querySelector('.main-title');
let button = document.querySelector('#click-me');

button.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256); // Generate R value for RGB
    let g = Math.floor(Math.random() * 256); // Generate G value for RGB
    let b = Math.floor(Math.random() * 256); // Generate B value for RGB
    h1.innerText = `RGB(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})