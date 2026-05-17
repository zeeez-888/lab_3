// Функция для изменения фамилии
function changeSurname() {
    var newText = document.getElementById("newSurnameInput").value;
    document.getElementById("mySurname").innerHTML = newText;
}

// Функция для случайного цвета фона
function randomColor() {
    var colors = ["#FFDAB9", "#98FB98", "#DDA0DD", "#87CEFA", "#F08080", "#E6E6FA"];
    var randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

// Старая функция из задания 3 про возраст
function askAge() {
    var isConfirmed = false;
    while (isConfirmed == false) {
        var age = prompt("Введите ваш возраст:", "");
        isConfirmed = confirm("Вы уверены, что вам " + age + "?");
    }
    alert("Возраст подтвержден! Вам " + age);
}