function fuelTank(input) {

    let fuel = input[0];
    let liters = Number(input[1]);

    if (fuel === 'Diesel' || fuel === 'Gasoline' || fuel === 'Gas') {

        if (liters >= '25') {

            console.log(`You have enough ${fuel.toLowerCase()}.`);

        } else {

            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);

        }

    } else {

        console.log(`Invalid fuel!`);
    }
}

fuelTank(['Gasoline', '40'])