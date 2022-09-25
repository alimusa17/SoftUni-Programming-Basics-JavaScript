function toyShop(input) {

    let tripPrice = Number(input[0]);

    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;

    let totalPrice = puzzlesCount * 2.6 + dollsCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2;

    if (toysCount >= 50) {

        totalPrice *= 0.75;

    }

    let finalSum = totalPrice * 0.9;


    if (finalSum >= tripPrice) {

        let profit = finalSum - tripPrice;

        console.log(`Yes! ${profit.toFixed(2)} lv left.`);

    } else {

        let profit = tripPrice - finalSum;

        console.log(`Not enough money! ${profit.toFixed(2)} lv needed.`);
    }

}

toyShop(["320", "8", "2", "5", "5", "1"])


