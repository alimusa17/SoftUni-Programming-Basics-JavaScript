function basketballEquipment(input) {

    let trainingsPrice = Number(input[0]);
    let shoesPrice = trainingsPrice - (trainingsPrice * 0.4);
    let outfitPrice = shoesPrice - (shoesPrice * 0.2);
    let ballPrice = outfitPrice * 0.25;
    let accessory = ballPrice * 0.2;

    let totalPrice = trainingsPrice + shoesPrice + outfitPrice + ballPrice + accessory;

    console.log(totalPrice);
}

basketballEquipment(["365"])