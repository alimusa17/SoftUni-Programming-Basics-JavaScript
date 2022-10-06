function matchTickets(input) {

    let budget = Number(input[0]);
    let category = input[1];
    let numbersOfPeople = input[2];

    let ticketPrice = 0;
    let totalMoney = 0;

    let vip = 499.99;
    let normal = 249.99;

    if (numbersOfPeople <= 4) {

        totalMoney = budget * 0.25;

    } else if (numbersOfPeople <= 9) {

        totalMoney = budget * 0.4;

    } else if (numbersOfPeople <= 24) {

        totalMoney = budget * 0.5;

    } else if (numbersOfPeople <= 49) {

        totalMoney = budget * 0.6;

    } else if (numbersOfPeople > 50) {

        totalMoney = budget * 0.75;
    }

    switch (category) {
        case 'VIP':

            ticketPrice = vip * numbersOfPeople;

            break;
        case 'Normal':

            ticketPrice = normal * numbersOfPeople;

            break;
    }

    if (totalMoney >= ticketPrice) {

        console.log(`Yes! You have ${(totalMoney - ticketPrice).toFixed(2)} leva left.`);

    } else {

        console.log(`Not enough money! You need ${(ticketPrice - totalMoney).toFixed(2)} leva.`);

    }
}

matchTickets(["30000","VIP","49"])