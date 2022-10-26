function maidenParty(input){

    let bachelorettePartyPrice = Number(input[0]);
    let loveMessagesCount = Number(input[1]);
    let waxRosesCount = Number(input[2]);
    let keyChainsCount = Number(input[3]);
    let caricaturesCount = Number(input[4]);
    let goodWishesCount = Number(input[5]);

    let amount = loveMessagesCount * 0.6 + waxRosesCount * 7.2 + keyChainsCount * 3.6 + caricaturesCount * 18.2 + goodWishesCount * 22;

    let itemsCount = loveMessagesCount + waxRosesCount + keyChainsCount + caricaturesCount + goodWishesCount;

    if (itemsCount >= 25) {

        amount *= 0.65;
        
    }

    let profit = amount * 0.9;

    if (profit >= bachelorettePartyPrice) {
        
        console.log(`Yes! ${(profit - bachelorettePartyPrice).toFixed(2)} lv left.`);

    } else {

        console.log(`Not enough money! ${(bachelorettePartyPrice - profit).toFixed(2)} lv needed.`);

    }
}

maidenParty(["320",
"8",
"2",
"5",
"5",
"1"])

