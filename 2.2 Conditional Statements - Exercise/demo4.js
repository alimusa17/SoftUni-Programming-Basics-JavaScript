function demo4(input) {

    let tripPrice = Number(tPrice);
    let puzzlesCount = Number(puzzles);
    let dollysCount = Number(dollys);
    let bearsCount = Number(bears);
    let minionsCount = Number(minions);
    let trucksCount = Number(trucks);

    let toysCount = puzzlesCount + dollysCount + bearsCount + minionsCount + trucksCount;
    let toysTotalPrice = (puzzles * 2.60) + (dollys * 3) + (bears * 4.10) + (minions * 8.20) + (trucks * 2);

    if (toysCount >= 50) {
        toysTotalPrice = toysTotalPrice * 0.75;
    }

    toysTotalPrice = toysTotalPrice * 0.90;

    if (toysTotalPrice >= tripPrice) {
        console.log(`Yes! ${(toysTotalPrice - tripPrice).toFixed(2)} lv left.`);
    }
    else {
        console.log(`Not enough money! ${(tripPrice - toysTotalPrice).toFixed(2)} lv needed.`);
    }

}
