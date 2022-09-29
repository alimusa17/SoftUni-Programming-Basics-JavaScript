function harvest(input) {

    let m2Grapes = Number(input[0]);
    let grapesFor1m2 = Number(input[1]);
    let neededLitersWine = Number(input[2]);
    let numOfWorkers = Number(input[3]);

    let totalGrapes = m2Grapes * grapesFor1m2;
    let wine = 0.4 * totalGrapes / 2.5;

    if (neededLitersWine < wine) {

        let litersLeft = wine - neededLitersWine;
        let litersPerPerson = litersLeft / numOfWorkers;

        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(litersLeft)} liters left -> ${Math.ceil(litersPerPerson)} liters per person.`);

    } else {

        let moreLiters = Math.abs(wine - neededLitersWine);

        console.log(`It will be a tough winter! More ${Math.floor(moreLiters)} liters wine needed.`);
    }
}

harvest(['1020', '1.5', '425', '4'])