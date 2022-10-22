function uniquePinCodes(input) {

    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    for (let firstNumber = 2; firstNumber <= first; firstNumber += 2) {

        for (let secondNumber = 2; secondNumber <= second; secondNumber++) {

            for (let thirdNumber = 2; thirdNumber <= third; thirdNumber += 2) {
                
                if (secondNumber === 2 || secondNumber === 3 || secondNumber === 5 || secondNumber === 7) {
                    
                    let uniquePin = `${firstNumber} ${secondNumber} ${thirdNumber}`;

                    console.log(uniquePin);
                }
            }
        }
    }
}

uniquePinCodes(["3", "5", "5"]);