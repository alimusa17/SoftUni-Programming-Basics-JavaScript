function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let dressPrice = Number(input[2]);

    let sumDecor = budget * 0.1;

    let dressSum = statistCount * dressPrice;

    if (statistCount > 150) {

        dressSum *= 0.9;

    }

    let totalSum = sumDecor + dressSum;

    if (budget >= totalSum) {

        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`);

    } else {

        console.log('Not enough money!')
        console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`)

    }
}

godzillaVsKong(["20000",
    "120",
    "55.5"])








