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
let typingSound = new Audio('Audio/typingsound.mp3'); // Replace 'typingsound.mp3' with the path to your audio file

typeNextDialogue();

function typeNextDialogue() {
    if (index < dialogues.length) {
        simulateTyping(element, dialogues[index], speed, () => {
            index++;
            typeNextDialogue();
        });
    }
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
