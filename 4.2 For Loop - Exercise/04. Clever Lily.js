function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toysCount = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= age; currentAge++) {

        if (currentAge % 2 === 0) {

            savedMoney += addMoney;
            addMoney += 10;
            stolenMoney++;

        } else {

            toysCount++;
        }
    }

    let totalMoneyFromToys = toyPrice * toysCount;
    let totalSavedMoney = totalMoneyFromToys + savedMoney - stolenMoney;

    if (totalSavedMoney >= washingMachinePrice) {

        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
        
    } else {

        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
}

cleverLily(["21",
"1570.98",
"3"])

