const showJoke = document.querySelector("#joke")
const anotherJoke = document.querySelector("#joke__btn")
const spinnerEl = document.querySelector(".spinner")
const preLoaderEl = document.querySelector(".preLoader")

anotherJoke.addEventListener('click', generateJoke);
window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    preLoaderEl.classList.add("hidden");
    generateJoke();
  }, 2000);
});

function generateJoke() {
  fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: 'application/json',
    },
  })
  .then (response => response.json())
  .then (data => showJoke.innerHTML = data.joke)
  .catch( error => (showJoke.textContent = "Failed to fetch data"));
}
// anotherJoke.addEventListener('click',() => {
//   fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: 'application/json',
//     },
//   })
//   .then (response => response.json())
//   .then (data => showJoke.innerHTML = data.joke)
//   .catch( error => (showJoke.textContent = "Failed to fetch data"));
// })