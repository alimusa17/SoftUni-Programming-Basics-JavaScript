function averageNumbers(input) {

    let number = Number(input[0]);
    let total = 0;

    for (let i = 1; i <= number; i++) {

        let currentNumber = Number(input[i]);
        total += currentNumber;
    }

    let average = total / number;

    console.log(average.toFixed(2));
}

averageNumbers(["4", "95", "23", "76", "23"]);