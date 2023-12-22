const wordsTextarea = document.querySelector(".word-counter-container .words");
const countBtn = document.querySelector(".word-counter-container .count-btn");
const wordCount = document.querySelector(".word-counter-container .word-count span");
const letterCount = document.querySelector(".word-counter-container .letter-count span");

const countWords = () => {
    let words =wordsTextarea.value;
    let wordsTrimmed = words.replace(/\s+/g, " ").trim();
    let splitWords = wordsTrimmed.split(" ");

        console.log(splitWords)

    let numberOfWords = splitWords.length;
    if (splitWords [0] == "") {
        numberOfWords = 0;
    }

    let numberOfCharacters = wordsTrimmed.length;

    wordCount.innerHTML = numberOfWords;
    letterCount.innerHTML = numberOfCharacters;
};

countBtn.addEventListener("click", countWords);