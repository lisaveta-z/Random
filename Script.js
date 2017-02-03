var letter = document.getElementById("letter");
var number = document.getElementById("number");
var generator = document.getElementById("rand");

var lettersArray = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к',
    'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

number.addEventListener("click", function () { generator.textContent = randomInteger(1, 9) });
letter.addEventListener("click", function () { generator.textContent = lettersArray[randomInteger(0, 32)]; });