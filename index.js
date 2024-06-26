const button = document.querySelector('button');
const jokeText = document.querySelector('p')
document.addEventListener('DOMContentLoaded', getJoke);

button.addEventListener('click', getJoke);

async function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
}