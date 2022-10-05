function oscars(input) {

    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let assessorCount = input.length;

    for (let index = 3; index < assessorCount; index++) {

        if (index % 2 !== 0) {

            let points = index + 1;
            let academyPoints = input[index].length * Number(input[points]) / 2;
            startingPoints += academyPoints;
        }

        if (startingPoints > 1250.5) {
            break;
        }

    }

    if (startingPoints < 1250.5) {

        console.log(`Sorry, ${actorName} you need ${(1250.50 - startingPoints).toFixed(1)} more!`);
        
    } else {

        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
    }

}



oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
