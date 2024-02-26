// link = https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/1.png

let mainDiv = document.querySelector('#container');
let baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i = 1; i <= 151; i++){
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    let image = document.createElement('img');
    image.src = `${baseURL}${i}.png`;

    pokemon.appendChild(image);
    pokemon.appendChild(label);
    mainDiv.appendChild(pokemon);
}
