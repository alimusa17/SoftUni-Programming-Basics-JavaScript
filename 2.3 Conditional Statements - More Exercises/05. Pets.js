function pets(input) {

    let days = Number(input[0]);
    let foodLeft = Number(input[1]);
    let foodForDog = Number(input[2]);
    let foodForCat = Number(input[3]);
    let foodForTurtle = Number(input[4]);

    let foodForTurtleKg = foodForTurtle / 1000;

    let neededFoodDog = days * foodForDog;
    let neededFoodCat = days * foodForCat;
    let neededFoodTurtle = days * foodForTurtleKg;

    let totalFood = neededFoodDog + neededFoodCat + neededFoodTurtle;

    let foodRemains = foodLeft - totalFood;

    if (foodRemains > 0) {

        console.log(`${Math.floor(foodRemains.toFixed(2))} kilos of food left.`);

    } else {

        let foodNeeded = totalFood - foodLeft;

        console.log(`${Math.ceil(foodNeeded)} more kilos of food are needed.`);
    }
}

pets(['5', '10', '2.1', '0.8', '321'])