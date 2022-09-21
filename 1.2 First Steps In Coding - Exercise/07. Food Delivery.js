function foodDelivery(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let chickenMenusPrice = chickenMenu * 10.35;
    let fishMenusPrice = fishMenu * 12.4;
    let veganMenusPrice = veganMenu * 8.15;

    let allMenusPrice = chickenMenusPrice + fishMenusPrice + veganMenusPrice;
    let desertPrice = allMenusPrice * 0.2;

    let finalPrice = allMenusPrice + desertPrice + 2.5;

    console.log(finalPrice);
}

foodDelivery(["2", "4", "3"])