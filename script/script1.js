
let gold = 10;
let live = 50;
let wepons1 = "";
let wepons2 = "";
let victory = 0;
let beastWepon = '';
let beastLive = 0;
let counter = 0;
let dragonLive = 400;
var diamonds = 0;
let counterFight = 0;

function loadDataFromStrangers() {
    if (localStorage.getItem('dataFromStrangers')) {
        // Ако има, възстановяваме променливите от Local Storage
        let savedData = JSON.parse(localStorage.getItem('dataFromStrangers'));
        gold = savedData.gold;
        live = savedData.live;
        bags = savedData.bags
    }
    updateResurs();

};
loadDataFromStrangers();

// данните от магазин , битка, мина , битка с дракон
const magazin = document.querySelector(".magazin");
const mine = document.querySelector(".mine");
const fight = document.querySelector(".fight");
const killDragon = document.querySelector(".kill-dragon");
const winPic = document.querySelector(".win-pic");
const uvod = document.querySelector(".uvod");
const game = document.getElementById("container");

//ресурсите
function updateResurs() {
    document.querySelector(".diamant").textContent = diamonds
    document.querySelector(".gold").textContent = gold;
    document.querySelector(".victory").textContent = victory;
    document.querySelector(".live").textContent = live;
    document.querySelector(".weapon1").textContent = wepons1;
    document.querySelector(".weapon2").textContent = wepons2;
    document.querySelector(".animal").textContent = beastLive;
    document.querySelector(".animal-wepon").textContent = beastWepon;

};
updateResurs();

//видимост на събитията
function styleDisplay(winPicVisible, magazinVisible, mineVisible, fightVisible, killDragonVisible, uvodVisible, gameVisible) {

    winPic.style.display = winPicVisible ? "block" : "none";
    magazin.style.display = magazinVisible ? "block" : "none";
    mine.style.display = mineVisible ? "block" : "none";
    fight.style.display = fightVisible ? "block" : "none";
    killDragon.style.display = killDragonVisible ? "block" : "none";
    uvod.style.display = uvodVisible ? 'block' : "none";
    game.style.visibility = gameVisible ? "visible" : "hidden";
}



//функция за  вход в магазина
document.getElementById('button1').addEventListener("click", function () {
    cardVisibility();
    selectedGold = 0;
    let hours = new Date().getHours();
    if (hours < 8 || hours > 20) {
        alert("Работното време на магазина е от 8 h сутрин до 20 h вечер");
        styleDisplay(false, false, false, false, false, false, false);
    } else {
        updateResurs();
        styleDisplay(false, true, false, false, false, false, false);
        danger();
    }

});
//функция за покупка на живот 
document.querySelector(".by-live").addEventListener("click", function () {

    if (gold < 40) {
        alert("Нямате достатъчно злато за тази покупка");
    } else {
        live += 20;
        gold -= 40;
        updateResurs();
    };

    danger();
});
//функция за покупка на оръжие
document.getElementById('by-wepon').addEventListener("click", function () {
    const choise = document.querySelector(".wepon");
    const select = choise.value;

    function buyWeapon(weapon, price) {
        if (wepons1 === "") {
            if (gold >= price) {
                gold -= price;
                wepons1 += weapon + " ";
            } else {
                alert("Нямате достатъчно злато за да купите това оръжие");
            }
        } else if (wepons2 === "") {
            if (gold >= price) {
                gold -= price;
                wepons2 += weapon + " ";
            } else {
                alert("Нямате достатъчно злато за да купите това оръжие");
            }
        } else {
            alert("Имате право само на 2 оръжия");
        }
    }

    switch (select) {
        case "sword":
            buyWeapon("Меч", 400);
            break;
        case "shield":
            buyWeapon("Щит", 500);
            break;
        case "armor":
            buyWeapon("Броня", 880);
            break;
    }
    danger();
    updateResurs();
});

// функция за вход в  мината
document.getElementById('button2').addEventListener("click", function () {
    cardVisibility();
    selectedGold = 0;
    let hours = new Date().getHours();
    if (hours < 8 || hours > 20) {
        alert("Не може да копаеш когато мината не работи.Работно време от 8h до 20h")
        styleDisplay(false, false, false, false, false, false, false);
    } else {
        danger();
        updateResurs();
        styleDisplay(false, false, true, false, false, false, false);
        document.querySelector(".dril-result").textContent = "";
    }
});
//функция за копаене в мината
function deep() {

    if (live <= 10) {
        document.body.innerHTML = `<h1 style="text-align: center;">GAME OVER</h1> `
        //  auto(deep);
    } else {
        live -= 10;
        let result = Math.ceil(Math.random() * 100);
        gold += result;
        document.querySelector(".dril-result").textContent = `Печелите ${result} злато! - Губите 10 живот!`

        updateResurs();

    }
    danger();
}

//функция за вход в битка
document.getElementById('button3').addEventListener("click", function () {
    cardVisibility();
    selectedGold = 0;
    let entryButton1 = document.getElementById("button1");
    entryButton1.disabled = true;
    let entrybuttno2 = document.getElementById("button2");
    entrybuttno2.disabled = true;
    let entrybuttno3 = document.getElementById("button3");
    entrybuttno3.disabled = true;
    let bardak = document.querySelector(".bardak");
    bardak.disabled = true;
    styleDisplay(false, false, false, true, false, false, false);

    beastLive = Math.ceil(Math.random() * 300);
    let curentWepon = Math.random();
    if (curentWepon <= 1 / 3) {
        beastWepon = "Меч";
    } else if (curentWepon > 1 / 3 && curentWepon <= 2 / 3) {
        beastWepon = "Щит";
    } else {
        beastWepon = "Броня"
    };
    const combatButton = document.getElementById('combatButton');
    const runButton = document.getElementById('runButton');
    combatButton.disabled = false;
    runButton.disabled = false;
    document.querySelector(".result").innerHTML = "";
    updateResurs();

})
//функция за бягство от битка
function escape() {

    let answer = confirm("Сигурен ли си ,че искаш да избягаш? Ще изгубиш ресурси");
    if (answer) {
        if (diamonds > 0) {
            diamonds--;
        }
        gold = Math.floor(gold /= 2);
        let loseWepon = Math.random()
        if (wepons1 === "" && wepons2 === "") {
            gold = 0;
        } else {
            if (loseWepon <= 1 / 2) {
                wepons1 = "";
            } else {
                if (wepons2 === "") {
                    wepons1 = "";
                }
                wepons2 = "";
            }
        }
        killDragon.style.display = "none";
        fight.style.display = "none";
        let entryButton1 = document.getElementById("button1");
        entryButton1.disabled = false;
        let entrybuttno2 = document.getElementById("button2");
        entrybuttno2.disabled = false;
        let entrybuttno3 = document.getElementById("button3");
        entrybuttno3.disabled = false;
        let bardak = document.querySelector(".bardak");
        bardak.disabled = false;
    } else {
    }
    const combatButton = document.getElementById('combatButton');
    const runButton = document.getElementById('runButton');
    combatButton.disabled = false;
    runButton.disabled = false;
    updateResurs();
}
//Функция за начало на битката
document.querySelector(".combat").addEventListener("click", function () {
    counterFight++;
    if (live > beastLive && wepons1 !== "") {

        if (beastWepon === "Щит") {
            beastLive -= Math.ceil(Math.random() * 20);
        } else if (beastWepon === "Броня") {
            beastLive -= Math.ceil(Math.random() * 10);
        } else {
            beastLive -= Math.ceil(Math.random() * 50);
        };

        if (wepons2 === "Броня" || wepons1 === "Броня") {
            live -= Math.ceil(Math.random() * 10)
        } else {
            live -= Math.ceil(Math.random() * 30)
        };


        if (beastLive <= 0) {
            victoryAgenstBeast();
        } else {
            updateResurs();
        };
        if (live <= 0) {
            document.body.innerHTML = '<h1 style="text-align: center;">GAME OVER</h1>'
        } else if (live <= 100) {
            document.querySelector(".result").innerHTML = "!!! ОПАСНОСТ ОТ ЗАГУБА !!!";
        };

    } else if (live >= beastLive) {

        if (beastWepon === "Щит") {
            beastLive -= Math.ceil(Math.random() * 30);
        } else if (beastWepon === "Броня") {
            beastLive -= Math.ceil(Math.random() * 10);
        } else {
            beastLive -= Math.ceil(Math.random() * 50);
        };

        if (wepons2 === "Броня" || wepons1 === "Броня") {
            live -= Math.ceil(Math.random() * 15)
        } else {
            live -= Math.ceil(Math.random() * 40)
        };

        if (beastLive <= 0) {
            victoryAgenstBeast();

        } else {
            updateResurs();
        };
        if (live <= 0) {
            document.body.innerHTML = '<h1 style="text-align: center;">GAME OVER</h1>'
        } else if (live <= 100) {
            document.querySelector(".result").innerHTML = "!!! ОПАСНОСТ ОТ ЗАГУБА !!!";
        };
    } else {
        if (beastWepon === "Щит") {
            beastLive -= Math.ceil(Math.random() * 20);
        } else if (beastWepon === "Броня") {
            beastLive -= Math.ceil(Math.random() * 10);
        } else {
            beastLive -= Math.ceil(Math.random() * 30);
        };

        if (wepons2 === "Броня" || wepons1 === "Броня") {
            live -= Math.ceil(Math.random() * 10)
        } else {
            live -= Math.ceil(Math.random() * 100)
        };

        if (beastLive <= 0) {
            victoryAgenstBeast();

        } else {
            updateResurs();
        };
        if (live <= 0) {
            document.body.innerHTML = '<h1 style="text-align: center;">GAME OVER</h1>'
        } else if (live <= 100) {
            document.querySelector(".result").innerHTML = "!!! ОПАСНОСТ ОТ ЗАГУБА !!!";
        };
    }
    danger();


})

//Вход в Битка с дракона
document.getElementById('button4').addEventListener("click", function () {
    cardVisibility();
    selectedGold = 0
    dragonLive = 400;
    if (counter > 0 && counter <= 2) {
        dragonLive += 150;
    } else if (counter === 3) {
        dragonLive += 250
    } else if (counter > 3) {
        dragonLive += 350
    }
    counter++;
    document.querySelector(".dragonLive").textContent = dragonLive;
    updateResurs();
    if (victory >= 10) {
        styleDisplay(false, false, false, false, true, false, false);
        let entryButton1 = document.getElementById("button1");
        entryButton1.disabled = true;
        let entrybuttno2 = document.getElementById("button2");
        entrybuttno2.disabled = true;
        let entrybuttno3 = document.getElementById("button3");
        entrybuttno3.disabled = true;
        let escapeButton = document.querySelector(".run");
        escapeButton.disabled = false;
        let escapeButton1 = document.getElementById("runButton");
        escapeButton1.disabled = false;

    } else {
        alert("Трябва да победиш поне 10 звяра за да се биеш с дракона");
    }
    danger();

})

//Бой с дракона
function combatDragon() {

    if (wepons1 !== "" && wepons2 !== "") {
        live -= Math.ceil(Math.random() * 25);
        dragonLive -= Math.ceil(Math.random() * 15);
        document.querySelector(".dragonLive").textContent = dragonLive;
    }
    if (wepons1 === "Броня" || wepons2 === "Броня") {
        live -= Math.ceil(Math.random() * 20);
        dragonLive -= Math.ceil(Math.random() * 15);
        document.querySelector(".dragonLive").textContent = dragonLive;
    } else {
        live -= Math.ceil(Math.random() * 40);
        dragonLive -= Math.ceil(Math.random() * 15);
        document.querySelector(".dragonLive").textContent = dragonLive;
    }
    if (live < 500) {
        wepons1 = "";
    }
    if (live <= 0) {
        document.body.innerHTML = '<h1 style="text-align: center;">GAME OVER</h1>'
    } else if (live < 150) {
        document.querySelector(".result").innerHTML = "!!! ОПАСНОСТ ОТ ЗАГУБА !!!";
    }

    if (dragonLive <= 0) {
        document.body.innerHTML = '<h1 style="text-align: center;">!!! VICTORY !!!</h1>'
    }
    document.querySelector(".dragonLive").textContent = dragonLive;
    updateResurs();
    danger();
};

//функция за победа над звяра
function victoryAgenstBeast() {
    if (counterFight < 5) {
        alert("Бърза победа - печелиш 1 диамант");
        counterFight = 0;
        diamonds++;

    } else {
        counterFight = 0;
    }
    fight.style.display = "none";
    winPic.style.display = "block"
    victory++;
    const combatButton = document.getElementById('combatButton');
    const runButton = document.getElementById('runButton');
    combatButton.disabled = true;
    runButton.disabled = true;
    let entryButton1 = document.getElementById("button1");
    entryButton1.disabled = false;
    let entrybuttno2 = document.getElementById("button2");
    entrybuttno2.disabled = false;
    let entrybuttno3 = document.getElementById("button3");
    entrybuttno3.disabled = false;
    let bardak = document.querySelector(".bardak");
    bardak.disabled = false;
    if (live < 200 && live > 100) {
        wepons2 = "";
    } else if (live < 100) {
        wepons1 = "";
        wepons2 = "";
    }
    updateResurs();

}

//сигнализатор за опасно малко живот
function danger() {
    const danger = document.getElementById("live");
    if (live <= 20) {
        danger.style.color = "red"

    } else {
        danger.style.color = ""
    }

}


document.getElementById('gotoStrangers').addEventListener("click", ()=>{

    let data = {
        gold: gold,
        live: live,
        
    };
    localStorage.setItem('strangers', JSON.stringify(data));
})