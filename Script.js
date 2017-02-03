var letter = document.getElementById("letter");
var number = document.getElementById("number");
var generator = document.getElementById("rand");

var lettersArray = ["a", "б", "в", "г", "д", "е", "ж", "з"];

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

number.addEventListener("click", function () { generator.textContent = randomInteger(1, 9) });
letter.addEventListener("click", function () { generator.textContent = lettersArray[randomInteger(0, 7)]; });