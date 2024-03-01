const button = document.querySelector('#getJoke');
const jokes = document.querySelector('#jokes');

// Define addNewDadJoke before referencing it
async function addNewDadJoke() {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}

button.addEventListener('click', addNewDadJoke);

async function getDadJoke() {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch (e) {
        console.log("Error", e);
    }
}
