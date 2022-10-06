function flowers(input) {

    let numberOfChrysanthemums = Number(input[0]);
    let numberOfRoses = Number(input[1]);
    let numberOfTulips = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    if (season === 'Spring' || season === 'Summer') {

        let totalFlowers = numberOfChrysanthemums + numberOfRoses + numberOfTulips;

        let priceChrysanthemums = numberOfChrysanthemums * 2;
        let priceRoses = numberOfRoses * 4.1;
        let priceTulips = numberOfTulips * 2.5;

        let totalPrice = priceChrysanthemums + priceRoses + priceTulips;

        if (holiday === 'Y') {

            totalPrice *= 1.15;

        }
        if (numberOfTulips > 5 && season === "Spring") {

            totalPrice *= 0.95;

        }
        if (totalFlowers >= 20) {

            totalPrice *= 0.8;

        }

        console.log(`${(2 + totalPrice).toFixed(2)}`);
    } else {

        let totalFlowers = numberOfChrysanthemums + numberOfRoses + numberOfTulips;

        let priceChrysanthemums = numberOfChrysanthemums * 3.75;
        let priceRoses = numberOfRoses * 4.5;
        let priceTulips = numberOfTulips * 4.15;

        let totalPrice = priceChrysanthemums + priceRoses + priceTulips;

        if (holiday === 'Y') {

            totalPrice *= 1.15;

        }
        if (numberOfRoses >= 10 && season === "Winter") {

            totalPrice *= 0.9;

        }
        if (totalFlowers >= 20) {

            totalPrice *= 0.8;

        }

        console.log(`${(2 + totalPrice).toFixed(2)}`);
    }
}

flowers(["10", "10", "10", "Autumn", "N"])