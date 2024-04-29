let gold = 0;
let live = 0;
let bags;
let wepons1;
let wepons2;
let victory;
let counter;
let diamonds;
let counterFight;
let selectedGold = 0;
let beastLive = 0;
let barTalk = 0;
let newDay = 0;
let toDay = new Date().getDate();
let entrymagazin;
let entrymine;
let entryWitch;

//функция за показване на ресурсите
function updateResurs() {
    document.getElementById("pokaji-zlato").textContent = gold;
    document.getElementById("pokaji-jivot").textContent = live;
};


//зареждане на ресурси от index.html
function loadData() {
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
        bags = savedData.bags;
        newDay = savedData.newDay;
        entrymagazin = savedData.entrymagazin;
        entrymine = savedData.entrymine;
        entryWitch = savedData.entryWitch;
    }
    updateResurs();
    inventory(bags);
}
loadData();

//запазване на ресурсите когато се отива към index.html
function saveData() {

    let data = {
        gold: gold,
        live: live,
        wepons1: wepons1,
        wepons2: wepons2,
        victory: victory,
        counter: counter,
        diamonds: diamonds,
        counterFight: counterFight,
        bags: bags,
        newDay: newDay,
        entrymagazin: entrymagazin,
        entrymine: entrymine,
        entryWitch: entryWitch
    };
    localStorage.setItem('strangers', JSON.stringify(data));

}

//текущо време
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
    document.getElementById("time").textContent = `The time is: ${curHour}:${curMinute}:${curSeconds} h`
};
setInterval(time, 1000);


//запазва локално данните когато отива в index.html
document.getElementById("back-button").addEventListener("click", () => {
    saveData();

    window.location.href = "../index.html";
})


//видимост на избор менюто
function displayVisibility(generalForChoiseVisible, menuVisible, barTalkVisible) {
    //видимост на главното меню
    let generalForChoise = document.querySelector(".general-for-choise")
    generalForChoise.style.display = generalForChoiseVisible ? "block" : "none";
    //видимост на менюто за храна
    const menu = document.getElementById("food-menu");
    menu.style.display = menuVisible ? "block" : "none";
    //видимост на разговора с бармана
    const barTalk = document.getElementById('talk-innkeeper');
    barTalk.style.display = barTalkVisible ? "block" : "none";
}


//функция за играта на ролетка
let cheriPic1 = document.querySelector(".chery-pic1");
let cheriPic2 = document.querySelector(".chery-pic2");
let cheriPic3 = document.querySelector(".chery-pic3");
let cheriPic4 = document.querySelector(".chery-pic4");
let praskovaPic1 = document.querySelector(".praskova-pic1");
let praskovaPic2 = document.querySelector(".praskova-pic2");
let praskovaPic3 = document.querySelector(".praskova-pic3");
let praskovaPic4 = document.querySelector(".praskova-pic4");
let qgodapic1 = document.querySelector(".qgoda-pic1");
let qgodapic2 = document.querySelector(".qgoda-pic2");
let qgodapic3 = document.querySelector(".qgoda-pic3");
let qgodapic4 = document.querySelector(".qgoda-pic4");
let karti1 = document.querySelector(".karti1");
let karti2 = document.querySelector(".karti2");
let karti3 = document.querySelector(".karti3");
let karti4 = document.querySelector(".karti4");
let bananaPic1 = document.querySelector(".banana-pic1");
let bananaPic2 = document.querySelector(".banana-pic2");
let bananaPic3 = document.querySelector(".banana-pic3");
let bananaPic4 = document.querySelector(".banana-pic4");
let gameContainer = document.querySelector(".container-for-game");
//функция която извиква резултат на трите карти
// функцията извиква резултата с различни аргументи от масива
let firstResult = '';
let secondResult = '';
let thirdResult = '';
let forthResult = '';

function spin() {
    const selested = document.getElementById("zalog");
    selectedGold = selested.value;
    if (selectedGold <= 0 || selectedGold === '') {
        alert("Невалиден залог!")

    } else if (selectedGold > 50) {
        alert("Максимален залог 50 злато");

    } else {
        if (gold < selectedGold) {
            alert("Нямате достатъчно злато,моля изберете друг залог!");

            return;
        }
        gold -= selectedGold;
        updateResurs();
        cardVisibility();

        // Създаване на масив с аргументи
        let argumentsArray = ["first", "second", "third", "forth"];
        // Извикване на функцията result() четири пъти с различни аргументи и интервал от 0.6 секунди
        let interval = setInterval(() => {
            // Извикване на result() с текущия аргумент от масива
            result(argumentsArray.shift());
            // Спиране на изпълнението, ако няма повече аргументи
            if (argumentsArray.length === 0) {
                clearInterval(interval);
            }
        }, 600);
        //проверка на резултата със закъснение от 2.5 сек
        setTimeout(function () {

            if (firstResult === "cheri" && secondResult === "cheri" && thirdResult === "cheri" && forthResult === "cheri") {
                alert(`Череши ви носи печалба от ${selectedGold * 50}`);
                gold += (selectedGold * 50);

            } else if (firstResult === "praskova" && secondResult === "praskova" && thirdResult === "praskova" && forthResult === "praskova") {
                alert(`Праскови ви носи печалба от ${selectedGold * 100}`);
                gold += (selectedGold * 100);

            } else if (firstResult === "qgoda" && secondResult === "qgoda" && thirdResult === "qgoda" && forthResult === "qgoda") {
                alert(`Ягоди ви носи печалба от ${selectedGold * 150}`);
                gold += (selectedGold * 150);

            } else if (firstResult === "banana" && secondResult === "banana" && thirdResult === "banana" && forthResult === "banana") {
                alert(`Банани ви носи печалба от ${selectedGold * 200}`);
                gold += (selectedGold * 200);

            } else if (firstResult === secondResult && thirdResult === forthResult) {
                alert(`Два чифта ви носи печалба от ${selectedGold * 5}`);
                gold += (selectedGold * 5);

            }
            updateResurs();
        }, 2500);
    }

}


//Резултат от рулетка
function result(input) {
    let rotate = Math.random()
    switch (input) {
        case "first":
            karti1.style.display = "none";
            if (rotate <= 1 / 4) {
                cheriPic1.style.display = "block";
                firstResult = "cheri";
            } else if (rotate >= 1 / 4 && rotate < 2 / 4) {
                praskovaPic1.style.display = "block";
                firstResult = "praskova";
            } else if (rotate >= 2 / 4 && rotate < 3 / 4) {
                qgodapic1.style.display = "block"
                firstResult = "qgoda";
            } else {
                bananaPic1.style.display = "block"
                firstResult = "banana"
            }
            break;

        case "second":
            karti2.style.display = "none";
            if (rotate <= 1 / 4) {
                cheriPic2.style.display = "block";
                secondResult = "cheri";
            } else if (rotate >= 1 / 4 && rotate < 2 / 4) {
                praskovaPic2.style.display = "block";
                secondResult = "praskova";
            } else if (rotate >= 2 / 4 && rotate < 3 / 4) {
                qgodapic2.style.display = "block"
                secondResult = "qgoda";
            } else {
                bananaPic2.style.display = "block"
                secondResult = "banana"
            }
            break;

        case "third":
            karti3.style.display = "none";
            if (rotate <= 1 / 4) {
                cheriPic3.style.display = "block";
                thirdResult = "cheri";
            } else if (rotate >= 1 / 4 && rotate < 2 / 4) {
                praskovaPic3.style.display = "block";
                thirdResult = "praskova";
            } else if (rotate >= 2 / 4 && rotate < 3 / 4) {
                qgodapic3.style.display = "block"
                thirdResult = "qgoda";
            } else {
                bananaPic3.style.display = "block"
                thirdResult = "banana"
            }
            break;

        case "forth":
            karti4.style.display = "none";
            if (rotate <= 1 / 4) {
                cheriPic4.style.display = "block";
                forthResult = "cheri";
            } else if (rotate >= 1 / 4 && rotate < 2 / 4) {
                praskovaPic4.style.display = "block";
                forthResult = "praskova";
            } else if (rotate >= 2 / 4 && rotate < 3 / 4) {
                qgodapic4.style.display = "block"
                forthResult = "qgoda";
            } else {
                bananaPic4.style.display = "block"
                forthResult = "banana"
            }
            break;
    }
    console.log(`${firstResult}, ${secondResult},${thirdResult}, ${forthResult}`);
}

//Функция за видимоста на картите
function cardVisibility() {
    gameContainer.style.display = "block"
    karti1.style.display = "block"
    karti2.style.display = "block"
    karti3.style.display = "block"
    karti4.style.display = "block"
    cheriPic1.style.display = "none";
    cheriPic2.style.display = "none";
    cheriPic3.style.display = "none";
    cheriPic4.style.display = "none";
    praskovaPic1.style.display = "none";
    praskovaPic2.style.display = "none";
    praskovaPic3.style.display = "none";
    praskovaPic4.style.display = "none";
    qgodapic1.style.display = "none"
    qgodapic2.style.display = "none"
    qgodapic3.style.display = "none"
    qgodapic4.style.display = "none"
    bananaPic1.style.display = "none"
    bananaPic2.style.display = "none"
    bananaPic3.style.display = "none"
    bananaPic4.style.display = "none"
};


//Вход в странноприемница
document.getElementById("play-game").addEventListener("click", function () {

    displayVisibility(false);
    cardVisibility();
});


//излизане от играта на ротативка
document.getElementById("stop-play-button").addEventListener("click", () => {
    gameContainer.style.display = "none"
    displayVisibility(true)

})


//функция за показване на предметите в раницата
function inventory(itemsCount) {
    const list = document.getElementById("dropdown");
    list.textContent = '';
    let counts = [];

    for (let item of itemsCount) {
        if (counts[item]) {
            counts[item]++;
        } else {
            counts[item] = 1;
        }
    }

    for (let item in counts) {
        let newitem = document.createElement('p');
        newitem.innerHTML = `${item} : ${counts[item]} бр.<button onclick = 'deleteTodo(${JSON.stringify(item)})'>Use</button> `
        list.appendChild(newitem);
    }
}


//функция за итриване на предмет от раницата
function deleteTodo(item) {
    let mesage = '';
    switch (item) {
        case "diamond":
            mesage = `Диаманд струва 1000 злато! Ще продадеш ли ${item} ?`;
            break;
        case "liveEleksir":
            mesage = `Елексира увеличава живота с 300! Ще използвате ли ${item} ?`;
            break;
        case "knife":
            if (beastLive <= 0) {
                alert("Не може да използваш този предмет ако не си в битка");
                return;
            }
            mesage = `Ножът отнема 100 живот на звяра! Ще използвате ли ${item} ?`;
            break;
        case "ring":
            mesage = `Пръстен струва 3000 злато! Ще продадеш ли ${item} ?`;
            break;
        default:
            mesage = `${item} е процес на разработка! !! Натисни отказ !!`;
            break;
    };

    if (confirm(`${mesage}`)) {
        let index = bags.indexOf(item);
        if (index !== -1) {
            bags.splice(index, 1);
        };

        switch (item) {
            case "diamond":
                gold += 1000;
                break;
            case "liveEleksir":
                live += 300;
                break;
            case "knife":
                break;
            case "ring":
                gold += 3000;
                break;
        };
        updateResurs();
        inventory(bags);
    }
};



//отиване за ядене  :)
document.getElementById('go-to-eath').addEventListener('click', () => {
    displayVisibility(false, true);
    foodQuantity();

});

//количество храна 
let soupQuantity = Math.floor(Math.random() * 10);
let chickenQuantity = Math.floor(Math.random() * 10);
let steakQuantity = Math.floor(Math.random() * 10);
function foodQuantity() {
    const soup = document.getElementById("quantity-food-soup");
    const chicken = document.getElementById("quantity-food-chicken");
    const steak = document.getElementById("quantity-food-steak");
    soup.textContent = soupQuantity;
    chicken.textContent = chickenQuantity;
    steak.textContent = steakQuantity;
}
//ядене
function eath(food, numGold, numLive) {
    if (gold < numGold) {
        alert('Нямате достатъчно пари! Може да обмените диаманти ако имате');
        return;
    };
    switch (food) {
        case "soup":
            if (soupQuantity < 1) {
                alert("Няма наличност! Опитай по-късно");
                return;
            }
            soupQuantity--;
            break;
        case "chicken":
            if (chickenQuantity < 1) {
                alert("Няма наличност! Опитай по-късно");
                return;
            }
            chickenQuantity--;
            break;
        case "steak":
            if (steakQuantity < 1) {
                alert("Няма наличност! Опитай по-късно");
                return;
            }
            steakQuantity--;
            break;
        default:
            break;
    }
    gold -= numGold;
    live += numLive;
    updateResurs();
    foodQuantity();
}

//ставане от хранене
document.getElementById("standUP").onclick = () => {
    displayVisibility(true, false);
};

//Отваряне на html за разговор с вещицата
document.getElementById("speek-to-witch").onclick = () => {
    if (entryWitch) {
        alert("Днес вече беше при вещицата! Отиди утре!");
        return;
    }
    if (confirm("В света на вещиците нищо не е безплатно! Внимавай!!!")) {
        entryWitch = true;
        saveData();
        window.location.href = "../pages/witch.html";
    };

}


//Отваряне на разговор с бармана
document.getElementById("talkToBar").onclick = () => {
    barTalk++;
    if (barTalk > 3) {
        alert("На бармана му писна от теб ! Опитай пак по-късно !");
        return;
    }
    displayVisibility(false, false, true);
    const button = document.getElementById("bar-button1");
    let text = '';
    let result = Math.random();
    if (result <= 1 / 3) {
        text = "Барманът има много работа и не може да се занимава сега с теб. Опитай по-късно.";
        button.style.visibility = "hidden"
    } else if (result > 1 / 3 && result <= 2 / 3) {
        button.style.visibility = "visible"
        text = "Здравей страннико!. Вещицата ми дължеше пари и ми даде в замяна елексир. Да ти го продам за 2500 злато?"
        button.textContent = "Buy liveEleksir !"
        button.onclick = () => {
            if (gold < 2500) {
                alert("Нямаш толкова злато");
                return;
            }
            gold -= 2500;
            bags.push("liveEleksir");
            inventory(bags);
            updateResurs();
            displayVisibility(true, false, false);
        }
    } else if (result > 2 / 3) {
        text = 'Много обичам да играя на PONG.Да се обзаложим на 3000 злато и да поиграем?';
        button.style.visibility = "visible"
        button.textContent = "Play game"
        document.getElementById("bar-button1").onclick = () => {
            if (confirm("Ако се съгласиш трябва да играеш до край. Играта се играе със стрелки на горе и надолу. Играят се 5 рунда!")) {
                if (gold >= 3000) {
                    saveData();
                    window.location.href = "../pages/game.html";
                } else {
                    alert("Нямаш достатъчно злато за този облог");
                }
            }
        }
    }
    document.getElementById("bar-text").textContent = text;
}
//Затваряне на разговора с Бармана
document.getElementById('bar-button2').onclick = () => {
    displayVisibility(true, false, false);
}