function bills(input) {

    let index = 0;
    let month = Number(input[index]);
    index++;

    let waterBill = 20;
    let internetBill = 15;

    let electricityCost = 0;
    let waterCost = 0;
    let internetCost = 0;
    let otherCost = 0;

    for (let i = 0; i < month; i++) {

        let currentBill = Number(input[index]);
        index++;

        electricityCost += currentBill;
        waterCost = waterBill * month;
        internetCost = internetBill * month;
        otherCost = (electricityCost + waterCost + internetCost) * 1.2;

    }

    let averageBillsMonthly = (electricityCost + waterCost + internetCost + otherCost) / month;

    console.log(`Electricity: ${electricityCost.toFixed(2)} lv`);
    console.log(`Water: ${waterCost.toFixed(2)} lv`);
    console.log(`Internet: ${internetCost.toFixed(2)} lv`);
    console.log(`Other: ${otherCost.toFixed(2)} lv`);
    console.log(`Average: ${averageBillsMonthly.toFixed(2)} lv`);
}

bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"])