const btn = document.getElementById("jokeBtn");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

function getJoke() {
    btn.disabled = true;
    btn.innerText = "Loading...";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(joke => {
            setup.innerText = joke.setup;
            punchline.innerText = joke.punchline;
        })
        .catch(() => {
            setup.innerText = "Failed to fetch joke!";
            punchline.innerText = "";
        })
        .finally(() => {
            btn.disabled = false;
            btn.innerText = "Next Joke";
        });
}

btn.addEventListener("click", getJoke);
getJoke();
