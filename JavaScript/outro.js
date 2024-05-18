const dialogues = [
    "How about you?",
    "Are you brave enough to see for yourself what's on the other side?",
    "If you think so, you know what to do.",
    "Also, subscribe before you take the leap of faith!",
    "That's what most youtuber says :)",
    "Have fun in your journey!"
];

const element = document.getElementById('output');
const speed = 50;
const interval = 1000;
let index = 0;
let typingSound = new Audio('Audio/typingsound.mp3');

setTimeout(typeNextDialogue, 3000);

function typeNextDialogue() {
    if (index < dialogues.length) {
        simulateTyping(element, dialogues[index], speed, () => {
            index++;
            typeNextDialogue();
        });
    }
    else if (index == dialogues.length) {
        element.style.animation = 'fadeOut 3s forwards';
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
