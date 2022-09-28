function newHouse(input) {

    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);

    let flowersPrice = 0;

    switch (flowersType) {
        case 'Roses':
            flowersPrice = flowersCount * 5;
            if (flowersCount > 80) {
                flowersPrice *= 0.9;
            }
            break;
        case 'Dahlias':
            flowersPrice = flowersCount * 3.8;
            if (flowersCount > 90) {
                flowersPrice *= 0.85;
            }
            break;
        case 'Tulips':
            flowersPrice = flowersCount * 2.8;
            if (flowersCount > 80) {
                flowersPrice *= 0.85;
            }
            break;
        case 'Narcissus':
            flowersPrice = flowersCount * 3;
            if (flowersCount < 120) {
                flowersPrice *= 1.15;
            }
            break;
        case 'Gladiolus':
            flowersPrice = flowersCount * 2.5;
            if (flowersCount < 80) {
                flowersPrice *= 1.2;
            }
            break;

    }

    if (budget >= flowersPrice) {

        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - flowersPrice).toFixed(2)} leva left.`);

    } else {

        console.log(`Not enough money, you need ${(flowersPrice - budget).toFixed(2)} leva more.`);

    }
}

newHouse(["Narcissus",
    "119",
    "360"])


