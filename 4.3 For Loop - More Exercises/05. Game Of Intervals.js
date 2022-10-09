function gameOfIntervals(input) {

    index = 0;
    let allMoves = Number(input[index]);
    index++;

    let finalResult = 0;
    let from0To9 = 0;
    let from10To19 = 0;
    let from20To29 = 0;
    let from30To39 = 0;
    let from40To50 = 0;
    let invalid = 0;

    for (let i = 0; i < allMoves; i++) {

        let number = Number(input[index])
        index++;

        if (number >= 0 && number <= 9) {

            from0To9++;
            finalResult += number * 0.2;

        } else if (number >= 10 && number <= 19) {

            from10To19++;
            finalResult += number * 0.3;

        } else if (number >= 20 && number <= 29) {

            from20To29++;
            finalResult += number * 0.4;

        } else if (number >= 30 && number <= 39) {

            from30To39++;
            finalResult += 50;

        } else if (number >= 40 && number <= 50) {

            from40To50++;
            finalResult += 100;

        } else {

            invalid++;
            finalResult = finalResult / 2;
        }
    }

    let percent0To9 = (from0To9 / allMoves) * 100;
    let percent10To19 = (from10To19 / allMoves) * 100;
    let percent20To29 = (from20To29 / allMoves) * 100;
    let percent30To39 = (from30To39 / allMoves) * 100;
    let percent40To50 = (from40To50 / allMoves) * 100;
    let percentInvalid = (invalid / allMoves) * 100;

    console.log(`${finalResult.toFixed(2)}`);
    console.log(`From 0 to 9: ${percent0To9.toFixed(2)}%`);
    console.log(`From 10 to 19: ${percent10To19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${percent20To29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${percent30To39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${percent40To50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${percentInvalid.toFixed(2)}%`);
}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])