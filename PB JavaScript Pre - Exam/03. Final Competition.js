function finalCompetition(input){

    let dancer = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let sumWon = 0;

    if (place === "Bulgaria") {

        sumWon = dancer * points;

    } else if (place === "Abroad") {

        sumWon = dancer * points;
        sumWon = sumWon * 1.5;

    }
    if (season === "summer" && place === "Bulgaria") {

        sumWon *= 0.95;

    } else if (season === "summer" && place === "Abroad") {

        sumWon *= 0.9;

    } else if (season === "winter" && place === "Bulgaria") {

        sumWon *= 0.92;

    } else if (season === "winter" && place === "Abroad") {

        sumWon *= 0.85;
    }
 
    let charity = sumWon * 0.75;
    let rest = sumWon - charity;
    let dancersMoney = rest / dancer;
 
    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${dancersMoney.toFixed(2)}`);
}

finalCompetition(["25",
"98",
"winter",
"Bulgaria"])

