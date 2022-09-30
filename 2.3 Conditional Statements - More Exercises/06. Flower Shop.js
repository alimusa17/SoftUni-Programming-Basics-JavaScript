function flowersShop(input){

    let numbersMagnolias = Number(input[0]);
    let numbersHyacinth = Number(input[1]);
    let numbersRoses = Number(input[2]);
    let numbersCactus = Number(input[3]);
    let priceGift = Number(input[4]);

    let priceMagnolias = numbersMagnolias * 3.25;
    let priceHyacinth = numbersHyacinth * 4;
    let priceRoses = numbersRoses * 3.5;
    let priceCactus = numbersCactus * 8;

    let price = priceMagnolias + priceHyacinth + priceRoses + priceCactus;

    let taxes = price * 0.05;

    let profit = price - taxes;

    if (profit <= priceGift) {
        
        console.log(`She will have to borrow ${Math.ceil(priceGift - profit)} leva.`);

    } else {

        console.log(`She is left with ${Math.floor(profit - priceGift)} leva.`);

    }
}

flowersShop(['15', '7', '5', '10', '100'])