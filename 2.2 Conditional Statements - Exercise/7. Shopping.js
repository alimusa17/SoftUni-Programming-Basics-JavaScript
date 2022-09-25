function shopping(input) {

    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramMemoryCount = Number(input[3]);

    let videoCardsPrice = videoCardsCount * 250;

    let processorsPrice = videoCardsPrice * 0.35;
    let processorsTotalPrice = processorsPrice * processorsCount;

    let ramMemoryPrice = videoCardsPrice * 0.1;
    let ramMemoryTotalPrice = ramMemoryPrice * ramMemoryCount;

    let totalSum = videoCardsPrice + processorsTotalPrice + ramMemoryTotalPrice;

    if(videoCardsCount > processorsCount){

        totalSum *= 0.85;

    }

    let difference = Math.abs(budget - totalSum);

    if(budget >= totalSum){

        console.log(`You have ${difference.toFixed(2)} leva left!`);

    } else {

        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`);

    }

}

shopping(["920.45",
"3",
"1",
"1"])

