let award = '';
let number = 0;
let textForResult = document.getElementById("textResult");
document.getElementById("swounGold").textContent = live;
document.getElementById("zlatotext").textContent = gold;
function goback() {
    if (live <= 50) {
        alert("Със сетни сили се махаш от там преди магията да те е убила");
        saveData();
        window.location.href = "../pages/strangers.html";
        return;
    }
    live--;
    document.getElementById("swounGold").textContent = live;
}
setInterval(goback, 2000);

// видимост на въпросите
const welcome = document.querySelector(".welcome");

function preparation1(pareparation1Visible) {
    const preparation1 = document.querySelector(".preparation1");
    preparation1.style.display = pareparation1Visible ? "block" : "none"
};
function preparation2(pareparation2Visible) {
    const preparation2 = document.querySelector(".preparation2");
    preparation2.style.display = pareparation2Visible ? "block" : "none"
};
function question1(question1Visible) {
    const question1 = document.querySelector(".question1");
    question1.style.display = question1Visible ? "block" : "none";
};
function question2(question2Visible) {
    const question2 = document.querySelector(".question2");
    question2.style.display = question2Visible ? "block" : "none";
};
function question3(question3Visible) {
    const question3 = document.querySelector(".question3");
    question3.style.display = question3Visible ? "block" : "none";
};
function question4(question4Visible) {
    const question4 = document.querySelector(".question4");
    question4.style.display = question4Visible ? "block" : "none";
};
function question5(question5Visible) {
    const question5 = document.querySelector(".question5");
    question5.style.display = question5Visible ? "block" : "none";
};
function question6(question6Visible) {
    const question6 = document.querySelector(".question6");
    question6.style.display = question6Visible ? "block" : "none";
};
function question7(question7Visible) {
    const question7 = document.querySelector(".question7");
    question7.style.display = question7Visible ? "block" : "none";
};
function question8(question8Visible) {
    const question8 = document.querySelector(".question8");
    question8.style.display = question8Visible ? "block" : "none";
};
function question9(question9Visible) {
    const question9 = document.querySelector(".question9");
    question9.style.display = question9Visible ? "block" : "none";
};
function question10(question10Visible) {
    const question10 = document.querySelector(".question10");
    question10.style.display = question10Visible ? "block" : "none";
};


//функции за бутоните - избор на магия
document.getElementById("magicButton").onclick = () => {
    welcome.style.display = "none";
    preparation1(true);
}
//функции за бутоните - избор на предмет
document.getElementById("itemButton").onclick = () => {
    welcome.style.display = "none";
    preparation2(true);
}

//отказ за въпроси
document.getElementById("reject1").onclick = () => {
    number++;
    preparation1(false)
    welcome.style.display = "none"
    textForResult.textContent = "Още не си готов за мен! Върви си ,но не и безнаказано!"
    if (gold > 500) {
        gold -= 350;
        saveData();
    }
}
document.getElementById("reject2").onclick = () => {
    number++;
    preparation2(false)
    welcome.style.display = "none"
    textForResult.textContent = "Още не си готов за мен! Върви си ,но не и безнаказано!"
    if (gold > 500) {
        gold -= 350;
        saveData();
    }
}

//функция за въпрос
function answer(input) {
    if (input === 1) {
        award = 'magic'
        preparation1(false);
    } else {
        award = 'ring'
        preparation2(false);
    }
    let randomNumber = Math.floor(Math.random() * 10);

    switch (randomNumber) {
        case 0:
            question1(true);
            break;
        case 1:
            question2(true);
            break;
        case 2:
            question3(true);
            break;
        case 3:
            question4(true);
            break;
        case 4:
            question5(true);
            break;
        case 5:
            question6(true);
            break;
        case 6:
            question7(true);
            break;
        case 7:
            question8(true);
            break;
        case 8:
            question9(true)
            break;
        case 9:
            question10(true);
            break;

    }
}

//отговор на въпрос 1
document.getElementById('answer1').onclick = () => {
    const myAnswer = prompt("Какъв е твоят отговор?").trim();
    let answerResult = myAnswer.toLowerCase();
    if (answerResult === "коприва") {
        bags.push(award);
        textForResult.textContent = `Поздравление за правилния отговор. Вече имаш ${award} в раницата си и може да напуснеш замъка докато все още можеш!`
    } else {
        if (award === "magic") {
            gold = Math.ceil(gold / 2);
        } else {
            live = Math.ceil(live / 2);
            document.getElementById("swounGold").textContent = live;
        }
        textForResult.textContent = "Грешен отговор ! Можеш да си вървиш и повече късмет ако дойдеш пак!"
    }
    question1(false);
    saveData();
    number++
}

//отговор на въпрос 2
document.getElementById('answer2').onclick = () => {
    const myAnswer = prompt("Какъв е твоят отговор?").trim();
    let answerResult = myAnswer.toLowerCase();
    if (answerResult === "кокиче") {
        bags.push(award);
        textForResult.textContent = `Правилно ! Вече имаш ${award} в раницата си и може да напуснеш замъка докато все още можеш!`
    } else {
        if (award === "magic") {
            gold = Math.ceil(gold / 2);
        } else {
            live = Math.ceil(live / 2);
            document.getElementById("swounGold").textContent = live;
        }
        textForResult.textContent = "Грешен отговор ! Можеш да си вървиш и повече късмет ако дойдеш пак!"
    }
    question2(false);
    saveData();
    number++
}

//отговор на въпрос 3
document.getElementById('answer3').onclick = () => {
    const myAnswer = prompt("Какъв е твоят отговор?").trim();
    let answerResult = myAnswer.toLowerCase();
    if (answerResult === "ръкавица" || answerResult === "ръкавици") {
        bags.push(award);
        textForResult.textContent = `Правилно ! Вече имаш ${award} в раницата си и може да напуснеш замъка докато все още можеш!`
    } else {
        if (award === "magic") {
            gold = Math.ceil(gold / 2);
        } else {
            live = Math.ceil(live / 2);
            document.getElementById("swounGold").textContent = live;
        }
        textForResult.textContent = "Грешен отговор ! Можеш да си вървиш и повече късмет ако дойдеш пак!"
    }
    question3(false);
    saveData();
    number++
}

//отговор на въпрос 4
document.getElementById('answer4').onclick = () => {
    const myAnswer = prompt("Какъв е твоят отговор?").trim();
    let answerResult = myAnswer.toLowerCase();
    if (answerResult === "слънце" || answerResult === "слънцето") {
        bags.push(award);
        textForResult.textContent = `Правилно ! Вече имаш ${award} в раницата си и може да напуснеш замъка докато все още можеш!`
    } else {
        if (award === "magic") {
            gold = Math.ceil(gold / 2);
        } else {
            live = Math.ceil(live / 2);
            document.getElementById("swounGold").textContent = live;
        }
        textForResult.textContent = "Грешен отговор ! Можеш да си вървиш и повече късмет ако дойдеш пак!"
    }
    question4(false);
    saveData();
    number++
}

//отговор на въпрос 5
document.getElementById('answer5').onclick = () => {
    const myAnswer = prompt("Какъв е твоят отговор?").trim();
    let answerResult = myAnswer.toLowerCase();

    if (answerResult === "ехо" || answerResult === "ехото") {
        bags.push(award);
        textForResult.textContent = `Правилно ! Вече имаш ${award} в раницата си и може да напуснеш замъка докато все още можеш!`
    } else {
        if (award === "magic") {
            gold = Math.ceil(gold / 2);
        } else {
            live = Math.ceil(live / 2);
            document.getElementById("swounGold").textContent = live;
        }
        textForResult.textContent = "Грешен отговор ! Можеш да си вървиш и повече късмет ако дойдеш пак!"
    }
    question5(false);
    saveData();
    number++
}

//отговор на въпрос 6
document.getElementById('answer6').onclick = () => {
    const myAnswer = prompt("Какъв е твоят отговор?").trim();
    let answerResult = myAnswer.toLowerCase();

    if (answerResult === "огън") {
        bags.push(award);
        textForResult.textContent = `Правилно ! Вече имаш ${award} в раницата си и може да напуснеш замъка докато все още можеш!`
    } else {
        if (award === "magic") {
            gold = Math.ceil(gold / 2);
        } else {
            live = Math.ceil(live / 2);
            document.getElementById("swounGold").textContent = live;
        }
        textForResult.textContent = "Грешен отговор ! Можеш да си вървиш и повече късмет ако дойдеш пак!"
    }
    question6(false);
    saveData();
    number++
}

//отговор на въпрос 7
document.getElementById('answer7').onclick = () => {
    const myAnswer = prompt("Какъв е твоят отговор?").trim();
    let answerResult = myAnswer.toLowerCase();

    if (answerResult === "паяк") {
        bags.push(award);
        textForResult.textContent = `Правилно ! Вече имаш ${award} в раницата си и може да напуснеш замъка докато все още можеш!`
    } else {
        if (award === "magic") {
            gold = Math.ceil(gold / 2);
        } else {
            live = Math.ceil(live / 2);
            document.getElementById("swounGold").textContent = live;
        }
        textForResult.textContent = "Грешен отговор ! Можеш да си вървиш и повече късмет ако дойдеш пак!"
    }
    question7(false);
    saveData();
    number++
}

//отговор на въпрос 8
document.getElementById('answer8').onclick = () => {
    const myAnswer = prompt("Какъв е твоят отговор?").trim();
    let answerResult = myAnswer.toLowerCase();

    if (answerResult === "стол" || answerResult === "маса") {
        bags.push(award);
        textForResult.textContent = `Правилно ! Вече имаш ${award} в раницата си и може да напуснеш замъка докато все още можеш!`
    } else {
        if (award === "magic") {
            gold = Math.ceil(gold / 2);
        } else {
            live = Math.ceil(live / 2);
            document.getElementById("swounGold").textContent = live;
        }
        textForResult.textContent = "Грешен отговор ! Можеш да си вървиш и повече късмет ако дойдеш пак!"
    }
    question8(false);
    saveData();
    number++
}

//отговор на въпрос 9
document.getElementById('answer9').onclick = () => {
    const myAnswer = prompt("Какъв е твоят отговор?").trim();
    let answerResult = myAnswer.toLowerCase();

    if (answerResult === "заек") {
        bags.push(award);
        textForResult.textContent = `Правилно ! Вече имаш ${award} в раницата си и може да напуснеш замъка докато все още можеш!`
    } else {
        if (award === "magic") {
            gold = Math.ceil(gold / 2);
        } else {
            live = Math.ceil(live / 2);
            document.getElementById("swounGold").textContent = live;
        }
        textForResult.textContent = "Грешен отговор ! Можеш да си вървиш и повече късмет ако дойдеш пак!"
    }
    question9(false);
    saveData();
    number++
}

//отговор на въпрос 10
document.getElementById('answer10').onclick = () => {
    const myAnswer = prompt("Какъв е твоят отговор?").trim();
    let answerResult = myAnswer.toLowerCase();

    if (answerResult === "дърво" || answerResult === "дървото") {
        bags.push(award);
        textForResult.textContent = `Правилно ! Вече имаш ${award} в раницата си и може да напуснеш замъка докато все още можеш!`
    } else {
        if (award === "magic") {
            gold = Math.ceil(gold / 2);
        } else {
            live = Math.ceil(live / 2);
            document.getElementById("swounGold").textContent = live;
        }
        textForResult.textContent = "Грешен отговор ! Можеш да си вървиш и повече късмет ако дойдеш пак!"
    }
    question10(false);
    saveData();
    number++
}