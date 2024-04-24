//функцията за изтриване на неща от масива - раницата 
//За сега само Диамантите са активни 
// и елексира,но трябва да измисля как да се здобия с елексира
//трябва да направя среща с вещица и от нея да го купя


function deleteTodo(item) {
    let mesage = '';
    switch (item) {
        case "diamond":
            mesage = `Диаманд увеличава златото с 1000! Ще използвате ли ${item} ?`;
            break;
        case "liveEleksir":
            mesage = `Елексира увеличава живота с 300! Ще използвате ли ${item} ?`;
            break;
        case "knife":
            mesage = `Ножът отнема 100 живот на звяра! Ще използвате ли ${item} ?`;
            break;
        default:
            mesage = `${item} е процес на разработка! !! Не използвай !!`;
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
                beastLive -= 100;
                break;
        };
        updateResurs();
        inventory(bags);
    }
};