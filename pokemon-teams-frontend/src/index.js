const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

function fetchTrainers() {
    return fetch(TRAINERS_URL)
        .then(resp => resp.json())
        .then(trainerObjects => renderTrainers(trainerObjects))
}


function renderTrainers(trainers) {
    trainers.forEach(trainer => addTrainerToPage(trainer));
}

function addTrainerToPage(trainer) {
    // using innerHTML doesn't feel like the right solution
    // should I be using the DOM to appendChild? 
    const mainSection = document.querySelector('main'); 
    mainSection.innerHTML += `
    <div class="card" data-id=${trainer.id}>
        <p>${trainer.name}</p>
        <button data-trainer-id=${trainer.id}>Add Pokemon</button>
        <ul>
            <li>Placeholder Poke</li>
        </ul>
    </div>
    `
}



document.addEventListener('DOMContentLoaded', function() {
    fetchTrainers()
  })