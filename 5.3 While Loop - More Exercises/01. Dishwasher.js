function dishwasher(input) {

    let index = 0;
    let detergent = Number(input[index++]);

    let command = "";
    let allDetergent = detergent * 750;

    let neededDetergent = 0;
    let plates = 0;
    let pots = 0;
    let counter = 1;

    while (command !== "End") {

        let command = input[index++];

        if (command === "End") {
            
            break;
        }
        if (counter % 3 === 0) {

            neededDetergent += command * 15;

        } else {

            neededDetergent += command * 5;

        }
        if (neededDetergent > allDetergent) {

            break;
        }
        if (counter % 3 === 0) {

            pots += Number(command);

        } else {

            plates += Number(command);
        }
        counter++;
    }


    if (neededDetergent <= allDetergent) {

        console.log(`Detergent was enough!`);
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${Math.abs(allDetergent - neededDetergent)} ml.`)

    } else {
        
        console.log(`Not enough detergent, ${Math.abs(neededDetergent - allDetergent)} ml. more necessary!`);
    }
}

dishwasher(["1", "10", "15", "10", "12", "13", "30"])