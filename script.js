
const dialogueElement = document.getElementById('dialogue');
const choicesContainer = document.getElementById('choices-container');
const characterImage = document.getElementById('character-image');
const bgm = document.getElementById('bgm');
const startButton = document.getElementById('start-button');
const startContainer = document.getElementById('start-container');
const gameContainer = document.getElementById('game-container');

const story = [
    {
        dialogue: "ねえ、おぢ。りりと一緒にいてくれる？",
        image: "a7e36bc2a222cf062a1dc3bf5c05b4ddfa50b12d.png",
        choices: [
            { text: "もちろん！", next: 1 },
            { text: "ごめん、ちょっと…", next: 2 }
        ]
    },
    {
        dialogue: "ほんと！？嬉しい！おぢ、だーいすき！",
        image: "ace5c284f8ac58278376423df4cf57bfff0d8836.webp",
        choices: []
    },
    {
        dialogue: "そっか…。おぢは、りりのこと嫌いなんだ…。",
        image: "f9ebdfd8f042fe822fc2b6c86b140e0f7d11e719.webp",
        choices: []
    }
];

let currentStoryIndex = 0;

function showStory(index) {
    const currentStory = story[index];
    dialogueElement.textContent = currentStory.dialogue;
    characterImage.src = currentStory.image;

    choicesContainer.innerHTML = '';

    currentStory.choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add('choice-button');
        button.textContent = choice.text;
        button.addEventListener('click', () => {
            if (choice.text === "もちろん!") {
                bgm.play();
            }
            currentStoryIndex = choice.next;
            showStory(currentStoryIndex);
        });
        choicesContainer.appendChild(button);
    });
}

startButton.addEventListener('click', () => {
    startContainer.style.display = 'none';
    gameContainer.style.display = 'block';
    showStory(currentStoryIndex);
});
