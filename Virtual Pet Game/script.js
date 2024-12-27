let happiness = 50;
let hunger = 50;

const petStatus = document.getElementById('petStatus');
const message = document.getElementById('message');
const petImage = document.getElementById('petImage');

const feedBtn = document.getElementById('feedBtn');
const playBtn = document.getElementById('playBtn');
const restBtn = document.getElementById('restBtn');

feedBtn.addEventListener('click', feedPet);
playBtn.addEventListener('click', playWithPet);
restBtn.addEventListener('click', restPet);

function feedPet() {
    hunger = Math.max(hunger - 20, 0);
    happiness = Math.min(happiness + 10, 100);
    updateStatus("Fed the pet! It's happier and less hungry.");
}

function playWithPet() {
    happiness = Math.min(happiness + 20, 100);
    hunger = Math.min(hunger + 10, 100);
    updateStatus("Played with the pet! It's happier now.");
}

function restPet() {
    happiness = Math.max(happiness - 10, 0);
    hunger = Math.max(hunger - 5, 0);
    updateStatus("Pet rested. It's a bit calmer.");
}

function updateStatus(messageText) {
    petStatus.textContent = `Happiness: ${happiness} | Hunger: ${hunger}`;
    message.textContent = messageText;

    if (happiness <= 20 || hunger <= 20) {
        petImage.src = 'sad_pet.webp'; // Change to sad pet image when low
    } else {
        petImage.src = 'happy_pet.webp'; // Change to a happy pet image when fine
    }
}
