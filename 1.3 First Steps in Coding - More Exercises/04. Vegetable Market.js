function vegetableMarket(input) {

    let vegetablesPriceKg = Number(input[0]);
    let friutsPriceKg = Number(input[1]);
    let totalVegetablesKg = Number(input[2]);
    let totalFruitsKg = Number(input[3]);

    let vegetablesPrice = (vegetablesPriceKg * totalVegetablesKg) / 1.94;
    let fruitsPrice = (friutsPriceKg * totalFruitsKg) / 1.94;

    let totalPrice = vegetablesPrice + fruitsPrice;

    console.log(totalPrice.toFixed(2));
}

vegetableMarket(["1.5", "2.5", "10", "10"]);