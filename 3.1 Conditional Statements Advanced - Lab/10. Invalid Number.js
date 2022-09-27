function invalidNumber(input) {

    let validNumber = Number(input[0]);

    if (validNumber >= 100 && validNumber <= 200 || validNumber === 0) {

        console.log();

    } else {

        console.log('invalid');
    }
}

invalidNumber(["0"])