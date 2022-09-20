function petsFood(input) {

    let foodForDogs = 2.5 * input[0];
    let foodForCats = 4 * input[1];
    let sum = foodForDogs + foodForCats;
    let result = `${sum} lv.`;

    console.log(result);
}

petsFood["13", "9"];
