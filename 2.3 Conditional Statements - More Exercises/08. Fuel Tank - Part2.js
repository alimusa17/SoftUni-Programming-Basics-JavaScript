function fuelTank2(input) {

    let typeOfFuel = input[0];
    let litersOfFuel = Number(input[1]);
    let discount = input[2];

    let price = 0;

    if (typeOfFuel === 'Gasoline') {
        price = litersOfFuel * 2.22;
        if (discount === 'Yes') {
            price = litersOfFuel * (2.22 - 0.18);
        } if (litersOfFuel >= 20 && litersOfFuel <= 25) {
            price = price * 0.92;
        } else if (litersOfFuel > 25) {
            price = price * 0.9;
        }
    } else if (typeOfFuel === 'Diesel') {
        price = litersOfFuel * 2.33;
        if (discount === 'Yes') {
            price = litersOfFuel * (2.33 - 0.12);
        } if (litersOfFuel >= 20 && litersOfFuel <= 25) {
            price = price * 0.92;
        } else if (litersOfFuel > 25) {
            price = price * 0.9;
        }
    } else {
        price = litersOfFuel * 0.93;
        if (discount === 'Yes') {
            price = litersOfFuel * (0.93 - 0.08);
        } if (litersOfFuel >= 20 && litersOfFuel <= 25) {
            price = price * 0.92;
        } else if (litersOfFuel > 25) {
            price = price * 0.9;
        }
    }

    console.log(`${price.toFixed(2)} lv.`);

}

fuelTank2(['Gasoline', '25', 'No'])