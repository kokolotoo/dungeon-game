//променлива за изгран залог
let selectedGold = 0;

// Проверяваме дали има запазени данни в Local Storage
function loadData() {
    if (localStorage.getItem('savedData')) {
        // Ако има, възстановяваме променливите от Local Storage
        let savedData = JSON.parse(localStorage.getItem('savedData'));
        gold = savedData.gold;
        live = savedData.live;
        wepons1 = savedData.wepons1;
        wepons2 = savedData.wepons2;
        victory = savedData.victory;
        beastWeapon = savedData.beastWeapon;
        beastLive = savedData.beastLive;
        counter = savedData.counter;
        dragonLive = savedData.dragonLive;
        diamonds = savedData.diamonds;
    }
    updateResurs();
}


// Функция за запазване на променливите в Local Storage
function saveData() {
    if (fight.style.display === 'block' || killDragon.style.display === "block") {
        alert('Не можете да създадете запис когато сте влязли в битка!')
    } else {
        let data = {
            gold: gold,
            live: live,
            wepons1: wepons1,
            wepons2: wepons2,
            victory: victory,
            counter: counter,
            dragonLive: dragonLive,
            diamonds: diamonds
        };
        localStorage.setItem('savedData', JSON.stringify(data));
        alert("Играта беше запаметена");
    }

}
//функция за ресет на играта
function resset() {
    localStorage.removeItem('savedData');
    localStorage.removeItem('strangers');
    gold = 0;
    live = 50;
    wepons1 = "";
    wepons2 = "";
    victory = 0;
    beastWeapon = '';
    beastLive = 0;
    counter = 0;
    dragonLive = 400;
    diamonds = 0;
    updateResurs()
    styleDisplay(false, false, false, false, false, true, false);
    let entryButton1 = document.getElementById("button1");
    entryButton1.disabled = false;
    let entrybuttno2 = document.getElementById("button2");
    entrybuttno2.disabled = false;
}
//извиква ресурсите от странноприемницата
function loadDataFromStrangers() {
    if (localStorage.getItem('strangers')) {
        // Ако има, възстановяваме променливите от Local Storage
        let savedData = JSON.parse(localStorage.getItem('strangers'));
        gold = savedData.gold;
        live = savedData.live;
        wepons1 = savedData.wepons1;
        wepons2 = savedData.wepons2;
        victory = savedData.victory;
        counter = savedData.counter;
        diamonds = savedData.diamonds;
        counterFight = savedData.counterFight;
    }

    updateResurs();
};
loadDataFromStrangers();

//Автоматична функция
let otherButtons = document.querySelectorAll('button:not(#autoButton)'); // Избираме всички бутони, освен autoButton
let intervalId;
function auto(input, number) {

    if (intervalId) {
        // Ако вече имаме интервал, значи е стартирано автоматичното изпълнение
        clearInterval(intervalId); // Спираме интервала
        intervalId = null; // Нулираме променливата
        autoButton.textContent = 'Автоматично копаене'; // Променяме текста на бутона
        otherButtons.forEach(function (button) {
            button.disabled = false;
        });
    } else {
        let answer = confirm('Автоматично копаене , може да изчерпи целия Ви живот!! Сигурни ли сте ???')
        if (answer) {
            // Ако нямаме интервал, значи трябва да стартираме автоматичното изпълнение
            intervalId = setInterval(input, number); // Стартираме интервал с 1 секунда
            autoButton.textContent = 'Спри автоматичното копаене'; // Променяме текста на бутона
            otherButtons.forEach(function (button) {
                button.disabled = true;
            });
        };

    };

}

//Автоматичен бутон
let autoButton = document.getElementById('autoButton');
autoButton.addEventListener('click', function () {

    auto(deep, 500);
});

//функция за текущото време
function time() {
    let curHour;
    let curMinute;
    let curSeconds;
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    if (hours < 10) {
        curHour = `0${hours}`
    } else {
        curHour = hours
    };
    if (minutes < 10) {
        curMinute = `0${minutes}`
    } else {
        curMinute = minutes
    }
    if (seconds < 10) {
        curSeconds = `0${seconds}`
    } else {
        curSeconds = seconds;
    }
    document.querySelector(".hour").textContent = `The time is: ${curHour}:${curMinute}:${curSeconds} h`
};
setInterval(time, 1000);


