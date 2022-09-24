function fishland(input) {

    let mackelerPriceKg = Number(input[0]);
    let sprinklePriceKg = Number(input[1]);
    let bonitosKg = Number(input[2]);
    let safridsKg = Number(input[3]);
    let musselsKg = Number(input[4]);

    let bonitosPriceKg = mackelerPriceKg * 1.6;
    let bonitosTotalPrice = bonitosKg * bonitosPriceKg;

    let safridsPriceKg = sprinklePriceKg * 1.8;
    let safridsTotalPrice = safridsKg * safridsPriceKg;

    let musselsTotalPrice = musselsKg * 7.5;

    let totalPrice = bonitosTotalPrice + safridsTotalPrice + musselsTotalPrice;

    console.log(totalPrice.toFixed(2))

}
fishland(["5.55", "3.57", "4.3", "3.6", "7"])