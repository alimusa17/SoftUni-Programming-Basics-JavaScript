function skiTrip(input) {

    let nights = Number(input[0]);
    nights = nights - 1;

    let roomType = input[1];
    let feedback = input[2];

    let totalSum = 0;

    switch (roomType) {
        case 'room for one person':
            totalSum = nights * 18;
            break;
        case 'apartment':
            totalSum = nights * 25;
            if (nights < 10) {
                totalSum *= 0.7;
            } else if (nights < 15) {
                totalSum *= 0.65;
            } else if (nights > 15) {
                totalSum *= 0.5;
            }
            break;
        case 'president apartment':
            totalSum = nights * 35;
            if (nights < 10) {
                totalSum *= 0.9;
            } else if (nights < 15) {
                totalSum *= 0.85;
            } else if (nights > 15) {
                totalSum *= 0.8;
            }
            break;
    }

    if (feedback == 'positive') {
        totalSum *= 1.25;
    } else {
        totalSum *= 0.9;
    }

    console.log(`${totalSum.toFixed(2)}`);

}

skiTrip(["2",
"apartment",
"positive"])


