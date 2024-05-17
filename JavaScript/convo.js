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
const speed = 50;
const interval = 1000;
let index = 0;

const hasVisited = localStorage.getItem('hasVisited');

if (!hasVisited) {
    localStorage.setItem('hasVisited', true);
}

if (hasVisited) {
    skipButton.style.display = 'block';
}

button.addEventListener('click', () => {
    button.style.display = 'none';
    typeNextDialogue();
});


function typeNextDialogue() {
    if (index < dialogues.length) {
        simulateTyping(element, dialogues[index], speed, () => {
            index++;
            if([2, 4, 5, 7, 10].includes(index)) {
                button.innerHTML = buttonText[[2, 4, 5, 7, 10].indexOf(index)];
                button.style.display = 'block';
            } 
            else if(index == dialogues.length) {
                window.location.href = 'home.html';
            }
            else {
                typeNextDialogue();
            }
        });
    }
}

function simulateTyping(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = '';

    function typeCharacter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeCharacter, speed);
        } else {
            if (callback) {
                setTimeout(callback, interval);
            }
        }
    }

    typeCharacter();
}

typeNextDialogue();

