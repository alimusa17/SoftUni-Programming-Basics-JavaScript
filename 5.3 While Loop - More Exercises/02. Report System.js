function reportSystem(input) {

    let neededSum = Number(input[0]);

    let index = 1;
    let command = input[index];

    let cashPayment = 0;
    let cardPayment = 0;

    let cashPaymentSum = 0;
    let cardPaymentSum = 0;

    while (command !== "End") {

        let cash = Number(command);
        let card = Number(input[index + 1]);

        if (cash > 100) {

            console.log(`Error in transaction!`);

        } else {

            cashPayment++;
            cashPaymentSum += cash;
            console.log(`Product sold!`);
        }

        if (card < 10) {
            
            console.log(`Error in transaction!`);

        } else {

            cardPayment++;
            cardPaymentSum += card;
            console.log(`Product sold!`);
        }

        let totalSum = cashPaymentSum + cardPaymentSum;

        if (totalSum >= neededSum) {

            console.log(`Average CS: ${(cashPaymentSum / cashPayment).toFixed(2)}`);
            console.log(`Average CC: ${(cardPaymentSum / cardPayment).toFixed(2)}`);
            break;            
        }

        index += 2;
        command = input[index];
    }

    if (command === "End") {

        console.log(`Failed to collect required money for charity.`);
        
    }
}

reportSystem(["500", "120", "8", "63", "256", "78", "317"]);