let h1 = document.querySelector('.main-title');
let button = document.querySelector('#click-me');

button.addEventListener('click', () => {
    let newColor = generateRandomColor();
    h1.innerText = newColor;
    document.body.style.backgroundColor = newColor;
})

const generateRandomColor = () => {
    let r = Math.floor(Math.random() * 255); // Generate R value for RGB
    let g = Math.floor(Math.random() * 255); // Generate G value for RGB
    let b = Math.floor(Math.random() * 255); // Generate B value for RGB
    return `RGB(${r}, ${g}, ${b})`;
}