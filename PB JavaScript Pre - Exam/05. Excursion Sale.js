function excursionSale(input) {

    let seaExcursion = Number(input[0]);
    let mountainExcursion = Number(input[1]);

    let index = 2;  
    let command = input[index];

    let profit = 0;

    while (command !== "Stop") {

        let packet = input[index];

        if (packet === "sea") {

            if (seaExcursion === 0) {

                command = input[++index];
                continue;

            } else {

                profit += 680;
                seaExcursion--;
            }

        } else if (packet === "mountain") {

            if (mountainExcursion === 0) {

                command = input[++index];
                continue;

            } else {

                profit += 499;
                mountainExcursion--;

            }
        }
        if (seaExcursion === 0 && mountainExcursion === 0) {

            console.log(`Good job! Everything is sold.`);
            break;

        }

        command = input[++index];
    }

    console.log(`Profit: ${profit} leva.`);
}


excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

