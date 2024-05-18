const dialogues = [
    "Have you written any code before?",
    "Did you ever have a dream of learning how to write these fancy series of words that can do things?",
    "Well...",
    "I do.",
    "And here's where everything begins."
];

const element = document.getElementById('output');
const speed = 50;
const interval = 1000;
let index = 0;
let typingSound = new Audio('Audio/typingsound.mp3');



const introButton = document.getElementById('introButton');
introButton.addEventListener('click', () => {
    typeNextDialogue();
    introButton.innerHTML = '';
});

function typeNextDialogue() {
    if (index < dialogues.length) {
        simulateTyping(element, dialogues[index], speed, () => {
            index++;
            typeNextDialogue();
        });
    }
    else if (index == dialogues.length) {
        window.location.href = 'home.html';
    }
    // else if (index == dialogues.length) {
    //     element.style.animation = 'fadeOut 1s forwards';
    // }
}

function simulateTyping(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = '';
    typingSound.play(); // Start playing the typing sound

    function typeCharacter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeCharacter, speed);
        } else {
            typingSound.pause(); // Stop playing the typing sound
            if (callback) {
                setTimeout(callback, interval);
            }
        }
    }

    typeCharacter();
}

const hasVisited = localStorage.getItem('hasVisited');

if (!hasVisited) {
    localStorage.setItem('hasVisited', true);
}

if (hasVisited) {
    skipButton.style.display = 'block';
}
