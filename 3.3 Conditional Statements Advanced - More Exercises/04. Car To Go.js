function carToGo(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let typeOfCar = '';
    let classOfCar = '';

    if (budget <= 100) {

        classOfCar = "Economy class";

        if (season === "Summer") {

            typeOfCar = "Cabrio";
            budget *= 0.35;

        }
        else {

            typeOfCar = "Jeep";
            budget *= 0.65;
        }
    }
    else if (budget > 100 && budget <= 500) {

        classOfCar = "Compact class";

        if (season === "Summer") {

            typeOfCar = "Cabrio";
            budget *= 0.45;

        }
        else {

            typeOfCar ="Jeep";
            budget *= 0.8;
        }
    }
    else {

        classOfCar = "Luxury class";
        typeOfCar = "Jeep";
        budget *= 0.9;
    }

    console.log(`${classOfCar}`);
    console.log(`${typeOfCar} - ${budget.toFixed(2)}`);
}
carToGo(["450", "Winter"])