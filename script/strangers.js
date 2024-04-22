let gold = 0;
let live = 0;
let bags;
let wepons1 ;
let wepons2 ;
let victory ;
let counter ;
let diamonds ;
let counterFight ;

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
    }
    document.getElementById("pokaji-zlato").textContent = gold;
    document.getElementById("pokaji-jivot").textContent = live;
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
        counterFight: counterFight
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

document.getElementById("pokaji-zlato").textContent = gold;
document.getElementById("pokaji-jivot").textContent = live;

document.getElementById("back-button").addEventListener("click", () => {
    saveData();
})

document.getElementById("up-button").addEventListener("click", () => {
    gold++;
    document.getElementById("pokaji-zlato").textContent = gold;
})