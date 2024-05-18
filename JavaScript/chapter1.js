const dialogues = [
    " . . . ",
    "Where am I?", // Uhm... in my screen?
    "Oh...",
    "What do you want?", // I want to learn how to code!
    "You want to learn how to code?", // Yeah. I literally just pressed a button that say so!
    "You're right. My bad.",
    "Are you prepared to face the unknown?", // Heck yeah!
    "On the other side is where your own adventure begins.",
    "Once you press the button, there's NO GOING BACK.",
    "Do you have the courage to press the button below?", // Don't belittle me!
    "Okay. Here goes the UNKNOWN!"
];

const buttonText = [
    "Uhm... in my screen?",
    "I want to learn how to code!",
    "Yeah. I literally just pressed a button that say so!",
    "Heck yeah!",
    "Of course! Don't belittle me!",
];

const element = document.getElementById('output');
const button = document.getElementById('startButton');
const skipButton = document.getElementById('skipButton');
const openingText = document.getElementById('openingText');
const startOpeningButton = document.getElementById('startOpening');
let typingSound = new Audio('../Audio/typingsound.mp3');
const speed = 50;
const interval = 1000;
let index = 0;

document.addEventListener('DOMContentLoaded', () => {
    showOpeningText();
});

startOpeningButton.addEventListener('click', () => {
    startOpeningButton.style.display = 'none';
    fadeOutOpeningText();
});

button.addEventListener('click', () => {
    button.style.animation = 'fadeInOut 0.5s forwards';
    button.style.display = 'none';
    typeNextDialogue();
});

function showOpeningText() {
    openingText.style.display = 'block';
    openingText.style.animation = 'fadeInOut 1s forwards';
    setTimeout(() => {
        openingText.style.opacity = 1;
    }, 0);

    setTimeout(() => {
        startOpeningButton.style.display = 'block';
        startOpeningButton.style.animation = 'fadeInOut 0.5s forwards';
    }, 2000);
}

function fadeOutOpeningText() {
    openingText.style.animation = 'fadeOut 1s forwards';
    setTimeout(() => {
        openingText.style.display = 'none';
        typeNextDialogue();
    }, 500);
}

function typeNextDialogue() {
    if (index < dialogues.length) {
        simulateTyping(element, dialogues[index], speed, () => {
            index++;
            if([2, 4, 5, 7, 10].includes(index)) {
                button.innerHTML = buttonText[[2, 4, 5, 7, 10].indexOf(index)];
                button.style.display = 'block';
            } 
            else if(index == dialogues.length) {
                window.location.href = '../home.html';
            }
            // else if(index == dialogues.length) {
            //     window.location.href = 'https://www.youtube.com/@Noob-grammer';
            // }
            else {
                typeNextDialogue();
            }
        });
    }
}

function simulateTyping(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = '';
    typingSound.play();

    function typeCharacter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeCharacter, speed);
        } else {
            typingSound.pause();
            if (callback) {
                setTimeout(callback, interval);
            }
        }
    }

    typeCharacter();
}
