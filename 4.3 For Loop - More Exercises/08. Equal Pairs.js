function equalPairs(input) {

    index = 0;
    let couple = Number(input[index]);
    index++;

    let lastPair = 0;
    let maxDiff = 0;

    for (let i = 0; i < couple; i++) {

        let number1 = Number(input[index]);
        index++;

        let number2 = Number(input[index]);
        index++;

        let currentPair = number1 + number2;

        if (i > 0) {

            let diff = Math.abs(currentPair - lastPair);

            if (diff > maxDiff) {

                maxDiff = diff;

            }
        }

        lastPair = currentPair;
    }

    if (maxDiff === 0) {

        console.log(`Yes, value=${lastPair}`)

    } else {

        console.log(`No, maxdiff=${maxDiff}`)
    }
}

equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"])